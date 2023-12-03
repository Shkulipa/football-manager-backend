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
import { v4 as uuidv4 } from 'uuid';

import { UserService } from '../user/user.service';
import { ClientDto } from './dto/client.dto';
import { IMsgDto } from './dto/msg.dto';
import { SendMsgChatReqDto } from './dto/send-msg-chat.dto';

@UsePipes(new ValidationPipe())
@UseFilters(new WsExceptionFilter())
@WebSocketGateway({ namespace: 'chats' })
export class ChatsGateway implements OnGatewayInit {
  private readonly logger = new Logger(ChatsGateway.name);
  private clients: ClientDto[] = [];

  constructor(private readonly jwtService: JwtService, private readonly userService: UserService) {}
  @WebSocketServer()
  io: Namespace;

  private msgGeneralChat: IMsgDto[] = [];

  // need for getting user from <@ConnectedSocket() client: SocketUserData>
  afterInit() {
    const middle = WSAuthMiddleware(this.jwtService, this.userService);
    this.io.use(middle);
    this.logger.log('Web socket(chats) was initialized!');
  }

  handleDisconnect(client: SocketUserData) {
    client.rooms.forEach((r) => client.leave(r));
    this.clients = this.clients.filter((c) => c.socketId !== client.id);
  }

  async handleConnection(client: SocketUserData) {
    this.logger.debug(
      `connected user: socketId(${client.id}) id(${client.user._id}), username(${client.user.username})`,
    );

    try {
      const currPlayer: ClientDto = { socketId: client.id, username: client.user.username, _id: client.user._id };
      this.clients = this.clients.filter((u) => u._id !== client.user._id);
      this.clients.push(currPlayer);
    } catch (err) {
      const error = wsExceptionFilterHelper(err);
      this.io.to(client.id).emit('exception', error);
    }
  }

  @UseGuards(GatewayAuthGuard)
  @SubscribeMessage('join-to-chat')
  async joinToCommonChat(@ConnectedSocket() client: SocketUserData, @MessageBody('chatId') chatId: string) {
    this.logger.debug(`user(socketId(${client.id}) connected to ${chatId}`);

    await client.join(chatId);

    // options of room
    const connectedClients = this.io.adapter.rooms?.get(chatId)?.size ?? 0;
    if (chatId === 'general') this.io.to(client.id).emit('get-old-messages', this.msgGeneralChat);
    this.logger.debug(`Total clients connected to '${chatId}': ${connectedClients}`);
  }

  @UseGuards(GatewayAuthGuard)
  @SubscribeMessage('send-msg-chat')
  async sendMsgChat(@ConnectedSocket() client: SocketUserData, @MessageBody() sendMsgChatReqDto: SendMsgChatReqDto) {
    const { chatId, msg } = sendMsgChatReqDto;

    const newMsg = { id: uuidv4(), user: client.user, msg, date: Date.now() };

    // if chat is common
    if (chatId === 'general') {
      const maxLengthGeneralChat = 25;
      this.msgGeneralChat =
        this.msgGeneralChat.length < maxLengthGeneralChat
          ? [...this.msgGeneralChat, newMsg]
          : [...this.msgGeneralChat.slice(0, maxLengthGeneralChat - 1), newMsg];
    }

    this.io.to(chatId).emit('msg-chat', newMsg);
  }
}
