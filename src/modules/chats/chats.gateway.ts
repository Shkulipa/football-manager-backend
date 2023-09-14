import { Logger, NotFoundException, UseFilters, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Namespace } from 'socket.io';
import { WsExceptionFilter } from 'src/common/exceptions/ws-exception-filter.decorator';
import { GatewayAuthGuard } from 'src/common/guards/gateway-auth.guard';
import { wsExceptionFilterHelper } from 'src/common/helpers/ws-exception-filter.helper';
import { SocketUserData } from 'src/common/interfaces/socket-user-data.interface';
import { WSAuthMiddleware } from 'src/common/middlewares/ws-auth.middleware';
import { JwtService } from 'src/services/jwt/jwt.service';

import { UserService } from '../user/user.service';
import { ClientDto } from './dto/client.dto';
import { SendMsgChatReqDto } from './dto/send-msg-chat.dto';
import { SendMsgDirectReqDto } from './dto/send-msg-direct.dto';

@UsePipes(new ValidationPipe())
@UseFilters(new WsExceptionFilter())
@WebSocketGateway({ namespace: 'chats' })
export class ChatsGateway implements OnGatewayInit {
  private readonly logger = new Logger(ChatsGateway.name);
  private clients: ClientDto[] = [];

  constructor(private readonly jwtService: JwtService, private readonly userService: UserService) {}
  @WebSocketServer()
  io: Namespace;

  // need for getting user from <@ConnectedSocket() client: SocketUserData>
  afterInit() {
    const middle = WSAuthMiddleware(this.jwtService, this.userService);
    this.io.use(middle);
    this.logger.log('Web socket(chats) was initialized!');
  }

  handleDisconnect(client: SocketUserData) {
    this.logger.debug(
      `disconnect user: socketId(${client.id}) id(${client.user._id}), username(${client.user.username})`,
    );
    client.rooms.forEach((r) => client.leave(r));
    this.clients = this.clients.filter((c) => c.socketId !== client.id);
  }

  async handleConnection(client: SocketUserData) {
    this.logger.debug(
      `connected user: socketId(${client.id}) id(${client.user._id}), username(${client.user.username})`,
    );

    try {
      const currPlayer: ClientDto = { socketId: client.id, username: client.user.username, _id: client.user._id };
      this.clients.push(currPlayer);
      this.io.emit('users-online', JSON.stringify({ count: this.clients.length, clients: this.clients }));
    } catch (err) {
      const error = wsExceptionFilterHelper(err);
      this.io.to(client.id).emit('exception', JSON.stringify(error));
    }
  }

  @UseGuards(GatewayAuthGuard)
  @SubscribeMessage('join-to-chat')
  async joinToCommonChat(@ConnectedSocket() client: SocketUserData, @MessageBody('chatId') chatId: string) {
    this.logger.debug(`user(socketId(${client.id}) connected to ${chatId}`);

    await client.join(chatId);

    // options of room
    const connectedClients = this.io.adapter.rooms?.get(chatId)?.size ?? 0;
    this.logger.debug(`Total clients connected to '${chatId}': ${connectedClients}`);
  }

  @UseGuards(GatewayAuthGuard)
  @SubscribeMessage('send-msg-chat')
  async sendMsgChat(@ConnectedSocket() client: SocketUserData, @MessageBody() sendMsgChatReqDto: SendMsgChatReqDto) {
    const { username } = client.user;
    const { chatId, msg } = sendMsgChatReqDto;
    this.io.to(chatId).emit('msg-chat', JSON.stringify({ username, msg, date: Date.now() }));
  }

  @UseGuards(GatewayAuthGuard)
  @SubscribeMessage('send-msg-direct')
  async sendMsgDirect(
    @ConnectedSocket() client: SocketUserData,
    @MessageBody() sendMsgDirectlyReqDto: SendMsgDirectReqDto,
  ) {
    const { userSocketId, msg } = sendMsgDirectlyReqDto;
    if (!this.clients.find((c) => c.socketId === userSocketId))
      throw new NotFoundException('This user not online right now');

    const { username } = client.user;
    this.io
      .to(userSocketId)
      .emit('msg-direct', JSON.stringify({ senderSocketId: client.id, username, msg, date: Date.now() }));
  }
}
