import { Logger, UseFilters, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { initiateGame, playIteration, startSecondHalf } from 'footballsimulationengine';
import { Namespace } from 'socket.io';
import { EEnvVariables } from 'src/common/constants/env-variables.enum';
import { WsExceptionFilter } from 'src/common/exceptions/ws-exception-filter.decorator';
import { GatewayAuthGuard } from 'src/common/guards/gateway-auth.guard';
import { wsExceptionFilterHelper } from 'src/common/helpers/ws-exception-filter.helper';
import { SocketUserData } from 'src/common/interfaces/socket-user-data.interface';
import { WSAuthMiddleware } from 'src/common/middlewares/ws-auth.middleware';
import { JwtService } from 'src/services/jwt/jwt.service';

import { MatchRepository } from '../match/match.repository';
import { UserService } from '../user/user.service';
import { pitchSize } from './constants/pitch-size';
import { IMatchInfo } from './interfaces/football-simulator-engine/match-info.interface';
import { ENameTeams } from './interfaces/football-simulator-engine/name-teams.interface';
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
    private readonly configService: ConfigService,
    private readonly matchRepository: MatchRepository,
  ) {}
  @WebSocketServer()
  io: Namespace;

  private readonly GAME_LENGTH = this.configService.get<string>(EEnvVariables.GAME_LENGTH);
  private readonly CHECK_ITERATION = this.configService.get<string>(EEnvVariables.CHECK_ITERATION);

  afterInit() {
    const middle = WSAuthMiddleware(this.jwtService, this.userService);
    this.io.use(middle);
    this.logger.log('Web socket(search-opponent) was initialized!');
  }

  handleDisconnect(client: SocketUserData) {
    this.logger.debug(
      `disconnect user: socketId(${client.id}) id(${client.user._id}), username(${client.user.username})`,
    );
    client.rooms.forEach((r) => client.leave(r));
  }

  @UseGuards(GatewayAuthGuard)
  @SubscribeMessage('join')
  async joinToMatch(@ConnectedSocket() client: SocketUserData, @MessageBody('matchId') matchId: string) {
    try {
      const match = await this.matchRepository.getMatchById(matchId);

      const roomName = matchId;
      await client.join(roomName);

      // check if user from match
      if (match.status === EStatusMatch.PREPARE) {
        await this.matchRepository.setPlayerReady(match, matchId, client.user._id.toString());
      }

      const updatedMatch = await this.matchRepository.getMatchById(matchId);
      // here you can handle situation with spectators
      this.io.to(matchId).emit('join', updatedMatch);

      // checking on start match
      if (
        updatedMatch.status === EStatusMatch.PREPARE &&
        updatedMatch.player1.isReady &&
        updatedMatch.player2.isReady
      ) {
        await this.match(matchId);
      }
    } catch (err) {
      const error = wsExceptionFilterHelper(err);
      this.io.to(client.id).emit('exception', JSON.stringify(error));
    }
  }

  @SubscribeMessage('start-match')
  async match(@MessageBody('matchId') matchId: string) {
    const match = await this.matchService.validationStartMatch(matchId);

    // simulation match
    const gameLength = parseInt(this.GAME_LENGTH);
    // const gameLength = 100;
    const checkIteration = parseInt(this.CHECK_ITERATION);
    const iterationHalfTime = gameLength / 2;
    let currIteration = 0;
    let matchInfo: IMatchInfo;

    const matchData = {
      gameLength,
      simulations: [],
    };

    // fo start need normal coordinates, and we say it the both team on the KICK_OFF_TEAM side of field;
    // for replacements need to say correct side for teams
    const guests = JSON.parse(
      JSON.stringify(await this.matchService.parseSquad(match.player1, ENameTeams.KICK_OFF_TEAM)),
    ); // secondTeam in engine simulator
    const hosts = JSON.parse(
      JSON.stringify(await this.matchService.parseSquad(match.player2, ENameTeams.KICK_OFF_TEAM)),
    ); // kickOffTeam in engine simulator
    initiateGame(hosts, guests, pitchSize).then(function (newMatchInfo: IMatchInfo) {
      matchInfo = newMatchInfo;
      matchData.simulations.push(newMatchInfo);
    });

    const simulation = setInterval(async () => {
      // check every some part of game on changes squads in players from redis
      const isCloseHalfTime =
        currIteration >= iterationHalfTime - checkIteration + 25 &&
        currIteration <= iterationHalfTime + checkIteration + 25;
      if (currIteration % checkIteration === 0 && !isCloseHalfTime) {
        const matchData = await this.matchRepository.getMatchById(matchId);
        if (matchData.player1.isNeedUpdateSquad) {
          const { main, bench, replacements } = await this.matchService.updateSquadForEngineSimulator(
            matchInfo,
            matchData.player1,
            ENameTeams.SECOND_TEAM,
          );

          matchInfo = {
            ...matchInfo,
            secondTeam: {
              ...matchInfo.secondTeam,
              players: [...main],
              bench: [...bench],
              replacements: [...replacements],
            },
          };
        }

        if (matchData.player2.isNeedUpdateSquad) {
          const { main, bench, replacements } = await this.matchService.updateSquadForEngineSimulator(
            matchInfo,
            matchData.player2,
            ENameTeams.KICK_OFF_TEAM,
          );

          matchInfo = {
            ...matchInfo,
            kickOffTeam: {
              ...matchInfo.kickOffTeam,
              players: [...main],
              bench: [...bench],
              replacements: [...replacements],
            },
          };
        }

        await this.matchRepository.setReplacementsUpdated(matchId);
      }

      // check on the second half
      const halfTime = +(gameLength / 2).toFixed(0);
      if (currIteration === halfTime) {
        startSecondHalf(matchInfo).then(function (newMatchInfo: IMatchInfo) {
          matchInfo = newMatchInfo;
        });
      }

      // play iteration
      playIteration(matchInfo).then(function (newMatchInfo: IMatchInfo) {
        matchInfo = newMatchInfo;
        matchData.simulations.push(newMatchInfo);
      });

      // send notification(array of iterations) to users(every <count> iterations)
      if (currIteration % 2 === 0) {
        this.io.to(matchId).emit('match-simulation', JSON.stringify({ ...matchData, currIteration }));
        matchData.simulations = [];
      }

      // check finishing game
      if (currIteration === gameLength) {
        clearInterval(simulation);

        const reward = await this.matchRepository.setResult(matchId, matchInfo);

        this.io.to(matchId).emit('match-result', reward);
        this.io.socketsLeave(matchId); // drop all plyers from room
        return;
      }

      currIteration++;
    }, 20);
  }
}
