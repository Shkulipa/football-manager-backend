import { Logger, UseFilters, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
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
import { WsExceptionFilter } from 'src/common/exceptions/ws-exception-filter.decorator';
import { GatewayAuthGuard } from 'src/common/guards/gateway-auth.guard';
import { SocketUserData } from 'src/common/interfaces/socket-user-data.interface';
import { WSAuthMiddleware } from 'src/common/middlewares/ws-auth.middleware';
import { JwtService } from 'src/services/jwt/jwt.service';

import { MatchRepository } from '../match/match.repository';
import { EPlayerPositionName } from '../real-player/constants/player-position-name.enum';
import { playerPositions } from '../real-player/constants/player-positions';
import { UserService } from '../user/user.service';
import { defaultStats } from './constants/default-stats.interface';
import { pitchSize } from './constants/pitch-size';
import { parserPositionsHelper } from './helpers/parser-positions.helper';
import { IMatchInfo } from './interfaces/football-simulator-engine/match-info.interface';
import { ENameTeams } from './interfaces/football-simulator-engine/name-teams.interface';
import { IPlayer } from './interfaces/football-simulator-engine/player.interface';
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
    client.rooms.forEach((r) => client.leave(r));
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
  @SubscribeMessage('start-match')
  async match(@MessageBody('matchId') matchId: string) {
    const match = await this.matchService.validationStartMatch(matchId);

    // simulation match
    let countIterations = 0;
    const matchData = {
      simulations: [],
    };

    const gameLength = 5000;
    let currIteration = 0;
    let matchInfo: IMatchInfo;

    // fo start need normal coordinates, and we say it the both team on the KICK_OFF_TEAM side of field;
    // for replacements need to say correct side for teams
    const guests = await this.matchService.parseSquad(match.player1, ENameTeams.KICK_OFF_TEAM); // secondTeam in engine simulator
    const hosts = await this.matchService.parseSquad(match.player2, ENameTeams.KICK_OFF_TEAM); // kickOffTeam in engine simulator
    initiateGame(hosts, guests, pitchSize).then(function (newMatchInfo: IMatchInfo) {
      matchInfo = newMatchInfo;
      matchData.simulations.push(newMatchInfo);
    });

    this.logger.debug(`Start simulation for match: ${matchId}`);
    const simulation = setInterval(async () => {
      this.logger.debug(`simulation #${currIteration} for match: ${matchId}`);

      // check every some part of game on changes squads in players from redis
      if (countIterations % 500 === 0) {
        this.logger.debug(`check updating squad for match ${matchId}`);

        const matchData = await this.matchRepository.getMatchById(matchId);
        if (matchData.player1.isNeedUpdateSquad && matchData.player1.replacements.length !== 0) {
          const newSquad = await this.matchService.updateSquadForEngineSimulator(
            matchInfo,
            matchData.player1,
            ENameTeams.SECOND_TEAM,
          );

          matchInfo.secondTeam.players = [...newSquad];
        }

        if (matchData.player2.isNeedUpdateSquad && matchData.player2.replacements.length !== 0) {
          const newSquad = await this.matchService.updateSquadForEngineSimulator(
            matchInfo,
            matchData.player2,
            ENameTeams.KICK_OFF_TEAM,
          );

          matchInfo.kickOffTeam.players = [...newSquad];
        }

        await this.matchRepository.setReplacementsUpdated(matchId);
      }

      // check on the second half
      if (currIteration === gameLength / 2) {
        startSecondHalf(matchInfo).then(function (newMatchInfo: IMatchInfo) {
          matchInfo = newMatchInfo;
          currIteration++;
        });
      }

      // play iteration
      playIteration(matchInfo).then(function (newMatchInfo: IMatchInfo) {
        matchInfo = newMatchInfo;
        matchData.simulations.push(newMatchInfo);
        currIteration++;
      });

      // send notification(array of iterations) to users(every <count> iterations)
      if (countIterations % 20 === 0) {
        this.logger.debug(`notify players for match ${matchId}`);
        this.io.to(matchId).emit('match-simulation', JSON.stringify(matchData));
        matchData.simulations = [];
      }

      // check finishing game
      if (countIterations === gameLength) {
        this.logger.debug(`match(${matchId}) was finished`);
        clearInterval(simulation);

        await this.matchRepository.setStatusMatch(matchId, EStatusMatch.FINISHED, 300);
        await this.matchRepository.setResult(matchId, matchInfo);
      }

      countIterations++;
    }, 20);
  }
}
