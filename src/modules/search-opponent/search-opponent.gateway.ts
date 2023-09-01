import { Logger, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayInit, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { pick } from 'lodash';
import { Namespace } from 'socket.io';
import { WsExceptionFilter } from 'src/common/exceptions/ws-exception-filter.decorator';
import { wsExceptionFilterHelper } from 'src/common/helpers/ws-exception-filter.helper';
import { SocketUserData } from 'src/common/interfaces/socket-user-data.interface';
import { WSAuthMiddleware } from 'src/common/middlewares/ws-auth.middleware';
import { JwtService } from 'src/services/jwt/jwt.service';

import { MatchRepository } from '../match/match.repository';
import { UserService } from '../user/user.service';
import { UserTeamRepository } from '../user-team/user-team.repository';
import { UserPoll } from './dto/user-poll.dto';

@UsePipes(new ValidationPipe())
@UseFilters(new WsExceptionFilter())
@WebSocketGateway({ namespace: 'search-opponent' })
export class SearchOpponentGateway implements OnGatewayConnection, OnGatewayInit {
  logger = new Logger(SearchOpponentGateway.name);

  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly userTeamRepository: UserTeamRepository,
    private readonly matchRepository: MatchRepository,
  ) {}
  @WebSocketServer()
  io: Namespace;

  private pollUsers: UserPoll[] = [];

  afterInit() {
    const middle = WSAuthMiddleware(this.jwtService, this.userService);
    this.io.use(middle);
    this.logger.log('Web socket(search-opponent) was initialized!');
  }

  handleDisconnect(client: SocketUserData) {
    this.logger.debug(
      `disconnect user: socketId(${client.id}) id(${client.user._id}), username(${client.user.username})`,
    );
    this.removeFromPoll(client.id);
    this.logger.debug(`current poll: ${JSON.stringify(this.pollUsers)}`);
  }

  async handleConnection(client: SocketUserData) {
    this.logger.debug(
      `connected user: socketId(${client.id}) id(${client.user._id}), username(${client.user.username})`,
    );

    // find most fit player or add this player in array
    try {
      await this.matchRepository.checkExistInMatch(client.user._id.toString());

      const team = await this.userTeamRepository.matchmakingTeam(client.user._id.toString());
      const teamData = {
        ...pick(team, ['clubName', 'logoClub', 'ratingElo', 'skills', 'main', 'bench']),
      };

      const currPlayer: UserPoll = {
        socketId: client.id,
        user: client.user,
        team: teamData,
      };
      this.pollUsers.push(currPlayer);

      this.logger.debug(`current poll: ${JSON.stringify(this.pollUsers)}`);

      // finding opponent
      const foundOpponent = this.findOpponent(currPlayer);
      this.logger.debug(`current user(${currPlayer.user.username}) find opponent...`);

      if (foundOpponent) {
        this.removeFromPoll(currPlayer.socketId);
        this.removeFromPoll(foundOpponent.socketId);
        this.startMatch(currPlayer, foundOpponent);
      }
    } catch (err) {
      const error = wsExceptionFilterHelper(err);
      this.io.to(client.id).emit('exception', JSON.stringify(error));
    }
  }

  private findOpponent(currPlayer: UserPoll) {
    // Проходим по пулу пользователей и ищем соперника
    const opponent = this.pollUsers.find((user) => {
      // Проверяем, что это не текущий пользователь и разница в рейтинге не больше 100
      return user.socketId !== currPlayer.socketId && Math.abs(user.team.ratingElo - currPlayer.team.ratingElo) <= 100;
    });

    if (opponent) return opponent;

    return;
  }

  private async startMatch(currPlayer: UserPoll, player2: UserPoll) {
    this.logger.debug('start match between:', currPlayer, player2);

    const matchId = await this.matchRepository.createMatch(currPlayer, player2);

    const resSearch = JSON.stringify({ matchId: matchId });
    this.io.to(currPlayer.socketId).emit('searched-match', resSearch);
    this.io.to(player2.socketId).emit('searched-match', resSearch);
  }

  private removeFromPoll(socketId: string) {
    this.pollUsers = this.pollUsers.filter((user) => user.socketId !== socketId);
    this.logger.debug('remove From Poll user with socket id:', socketId);
  }
}
