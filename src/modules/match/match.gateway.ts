import { Logger, UseFilters, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
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
import { SocketUserData } from 'src/common/interfaces/socket-user-data.interface';
import { WSAuthMiddleware } from 'src/common/middlewares/ws-auth.middleware';
import { JwtService } from 'src/services/jwt/jwt.service';

import { MatchRepository } from '../match/match.repository';
import { UserService } from '../user/user.service';
import { EStatusMatch } from './interfaces/match-detail.interface';
import { MatchService } from './match.service';

@UsePipes(new ValidationPipe())
@UseFilters(new WsExceptionFilter())
@WebSocketGateway({ namespace: 'match' })
export class MatchGateway implements OnGatewayInit {
  logger = new Logger(MatchGateway.name);

  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly matchService: MatchService,
    private readonly matchRepository: MatchRepository,
  ) {}
  @WebSocketServer()
  io: Namespace;

  afterInit() {
    const middle = WSAuthMiddleware(this.jwtService, this.userService);
    this.io.use(middle);
    this.logger.log('Web socket(search-opponent) was initialized!');
  }

  handleDisconnect(client: SocketUserData) {
    this.logger.debug(
      `disconnect user: socketId(${client.id}) id(${client.user._id}), username(${client.user.username})`,
    );
  }

  @UseGuards(GatewayAuthGuard)
  @SubscribeMessage('join')
  async joinToMatch(@ConnectedSocket() client: SocketUserData, @MessageBody('matchId') matchId: string) {
    const match = await this.matchRepository.getMatchById(matchId);
    this.logger.debug(`user(socketId(${client.id}) connected to ${matchId}`);

    const roomName = matchId;
    await client.join(roomName);

    // check if user from match
    await this.matchRepository.setPlayerReady(match, matchId, client.user._id.toString());
    const updatedMatch = await this.matchRepository.getMatchById(matchId);

    // options of room
    const connectedClients = this.io.adapter.rooms?.get(roomName)?.size ?? 0;
    this.logger.debug(`Total clients connected to match '${roomName}': ${connectedClients}`);

    // here you can handle situation with spectators
    this.io.to(matchId).emit('join', updatedMatch);
  }

  @UseGuards(GatewayAuthGuard)
  @SubscribeMessage('simulation-match')
  async match(@MessageBody('matchId') matchId: string) {
    await this.matchService.validationStartMatch(matchId);

    // simulation match
    let countIterations = 0;
    const matchData = {
      simulations: [],
    };
    const simulation = setInterval(async () => {
      // Ваш код симуляции матча
      this.logger.debug(`# of Simulation iteration: ${countIterations}`);
      matchData.simulations.push(countIterations);

      // Отправляем уведомление каждые 2000 итераций
      if (countIterations % 20 === 0) {
        this.logger.debug(`notify players for match ${matchId}`);
        this.io.to(matchId).emit('match-simulation', JSON.stringify(matchData));
      }

      // Проверяем, завершился ли матч (например, после определенного числа итераций)
      if (countIterations === 100) {
        this.logger.debug(`match(${matchId}) was finished`);
        clearInterval(simulation); // Останавливаем цикл симуляции
        await this.matchRepository.setStatusMatch(matchId, EStatusMatch.FINISHED, 300);
      }

      countIterations++;
    }, 500);
  }
}
