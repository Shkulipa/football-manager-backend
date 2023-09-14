import { BadRequestException, ForbiddenException, Inject, Logger } from '@nestjs/common';
import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import Redis from 'ioredis';
import { hasDuplicatesIds } from 'src/common/helpers/duplicates.helper';
import { IUserData } from 'src/common/interfaces/user-data.interfaces';
import { IORedisKey } from 'src/services/redis/redis.module';

import { EPlayerPositionName } from '../real-player/constants/player-position-name.enum';
import { playerPositions, playerPositionsSecondTeam } from '../real-player/constants/player-positions';
import averageSkillPlayerHelper from '../real-player/helpers/average-skills-players-helper';
import { ratingHelper } from '../real-player/helpers/rating.helper';
import { UserTeamRepository } from '../user-team/user-team.repository';
import { defaultStats } from './constants/default-stats.interface';
import { NameKeys } from './constants/name-keys.enum';
import { UpdateSquadsReqDto } from './dto/update-squads-req.dto';
import { parserPositionsHelper } from './helpers/parser-positions.helper';
import { IMatchInfo } from './interfaces/football-simulator-engine/match-info.interface';
import { ENameTeams } from './interfaces/football-simulator-engine/name-teams.interface';
import { IPlayer, IPlayerParse } from './interfaces/football-simulator-engine/player.interface';
import { EStatusMatch, IPlayerData } from './interfaces/match-detail.interface';
import { MatchRepository } from './match.repository';

@Injectable()
export class MatchService {
  private readonly logger = new Logger(MatchRepository.name);

  constructor(
    @Inject(IORedisKey) private readonly redisClient: Redis,
    private readonly matchRepository: MatchRepository,
    private readonly userTeamRepository: UserTeamRepository,
  ) {}

  async validationStartMatch(matchId: string) {
    const match = await this.matchRepository.getMatchById(matchId);

    if (match.status === `${EStatusMatch.IN_PROCESS}`)
      throw new BadRequestException("Match has already started, subscribe to 'match-simulation'");

    if (match.status === `${EStatusMatch.FINISHED}`) throw new BadRequestException('Match has already finished');

    if (!match.player1.isReady || !match.player1.isReady)
      throw new BadRequestException(`For starting match(${matchId}) need be ready for both players`);

    await this.matchRepository.setStatusMatch(matchId, EStatusMatch.IN_PROCESS, 900);

    return match;
  }

  async parseSquad(player: IPlayerData, sideTeam: ENameTeams) {
    const squadPlayer = await this.userTeamRepository.findById(player.team._id.toString());
    const allFootballersPlayer = [...Object.values(squadPlayer.main), ...squadPlayer.bench];
    const mainSquad = { ...player.team.main };
    const players: IPlayerParse[] = [];
    for (const [position, id] of Object.entries(mainSquad)) {
      const player = allFootballersPlayer.find((p) => p._id.toString() === id);

      const data: IPlayerParse = {
        realPlayerId: player._id,
        name: player.name,
        rating: +(ratingHelper(player.skills) * 20).toFixed(0),
        position: position === EPlayerPositionName.GK ? EPlayerPositionName.GK : parserPositionsHelper(position),
        skill: player.skills,
        currentPOS:
          sideTeam === ENameTeams.KICK_OFF_TEAM ? playerPositions[position] : playerPositionsSecondTeam[position],
        fitness: 100,
        injured: false,
      };
      mainSquad[position] = data;
      players.push(data);
    }

    const team = {
      name: player.team.clubName,
      manager: player.user.username,
      players,
      rating: averageSkillPlayerHelper([...allFootballersPlayer]),
    };

    return team;
  }

  async updateSquads(id: string, user: IUserData, updateSquadReqDto: UpdateSquadsReqDto) {
    const match = await this.matchRepository.getMatchById(id);

    const tokenUserId = user._id.toString();
    if (match.player1.user._id !== tokenUserId && match.player2.user._id !== tokenUserId)
      throw new ForbiddenException('You are not a player of this match');

    let playerKey: string;
    if (match.player1.user._id === user._id) playerKey = 'player1';
    else playerKey = 'player2';

    const player = match[playerKey] as IPlayerData;
    const idsMain = Object.values(player.team.main);
    const newPlayers = updateSquadReqDto.replacements.map((p) => p.on);
    const oldPlayers = updateSquadReqDto.replacements.map((p) => p.off);
    if (idsMain.length < 11) throw new BadRequestException('Your main squad should have 11 players');

    const newIdsMainSquad = Object.values(updateSquadReqDto.main);
    const includesOnPlayers = newPlayers.filter((p) => !newIdsMainSquad.includes(p.toString()));
    const includesOffPlayers = newIdsMainSquad.filter((p) => oldPlayers.includes(p.toString()));
    if (includesOffPlayers.length > 0)
      throw new BadRequestException(`Your main squad has off players: ${includesOffPlayers.join(', ')}`);
    if (includesOnPlayers.length > 0)
      throw new BadRequestException(
        `Some players in main squad weren't included from replacements.on: ${includesOnPlayers.join(', ')}`,
      );

    const allFootballersForCurrMatch = [...idsMain, ...player.team.bench];
    const allFootballersForChanges = [...Object.values(updateSquadReqDto.main), ...match[playerKey].team.bench];

    const isDuplicates = hasDuplicatesIds(idsMain);
    if (isDuplicates) throw new BadRequestException('you have duplicates ids in main squad');

    // check players for declared for this match
    const notDeclaredPlayers = allFootballersForChanges.filter((id) => !allFootballersForCurrMatch.includes(id));
    if (notDeclaredPlayers.length > 0)
      throw new BadRequestException(`Players with ids: ${notDeclaredPlayers.join(', ')} not belongs to this match`);

    const newMainSquad = { ...updateSquadReqDto.main };

    const newBenchSquad = [
      ...match[playerKey].team.bench.filter((p: string) => !newPlayers.includes(p)),
      ...oldPlayers,
    ];

    // replacements
    const idsNewMain = Object.values(newMainSquad);
    const totalReplacements = player.replacements.length + updateSquadReqDto.replacements.length;
    if (totalReplacements > 3) throw new BadRequestException('You can make only 3 replacements for match');

    // check on the already replaced players(they can't be continue playing after replaced and again entire to game)
    // players that must not appear in the game again after their replacement
    const includesOldReplacements = idsNewMain.filter((id) =>
      player.replacements.map((i) => i.off).includes(id.toString()),
    );
    if (includesOldReplacements.length > 0)
      throw new BadRequestException(
        `Players with ids: ${includesOldReplacements.join(
          ', ',
        )} were already played and can't be come back in the game again`,
      );

    const replacements = [...player.replacements, ...updateSquadReqDto.replacements];

    const key = `${NameKeys.MATCH}:${id}`;
    await this.redisClient
      .multi([
        ['call', 'JSON.SET', key, `.${playerKey}.isNeedUpdateSquad`, JSON.stringify(true)],
        ['call', 'JSON.SET', key, `.${playerKey}.replacements`, JSON.stringify(replacements)],
        ['call', 'JSON.SET', key, `.${playerKey}.team.main`, JSON.stringify(newMainSquad)],
        ['call', 'JSON.SET', key, `.${playerKey}.team.bench`, JSON.stringify(newBenchSquad.map((i) => i.toString()))],
      ])
      .exec();

    return { success: true };
  }

  async updateSquadForEngineSimulator(matchInfo: IMatchInfo, player: IPlayerData, team: ENameTeams) {
    const replacement = await this.parseSquad(player, team);

    // old squad without new players
    const onlyOldSquad = matchInfo[team].players.filter(
      (p) => !player.replacements.map((i) => i.off).includes(p.realPlayerId.toString()),
    );

    // new players in squad
    const replacementsNewIds = Object.values(player.team.main).filter(
      (p) => !onlyOldSquad.map((i) => i.realPlayerId.toString()).includes(p.toString()),
    );

    // parse new players for replace them in matchInfo(for engine)
    const replacements: IPlayer[] = replacementsNewIds.map((p) => {
      // data of new player
      const newPlayerData = replacement.players.find(
        (parsedPlayer) => parsedPlayer.realPlayerId.toString() === p.toString(),
      );

      // get old player, for get him data in match
      const offPreviousPlayer = player.replacements.find((i) => i.on.toString() === p.toString());
      const oldPlayerData = matchInfo[team].players.find(
        (oldPlayer) => oldPlayer.realPlayerId.toString() === offPreviousPlayer.off.toString(),
      );

      // parsed data for engine
      const parsedPlayer: IPlayer = {
        ...newPlayerData,
        fitness: 100,
        injured: false,
        originPOS: newPlayerData.currentPOS,
        playerID: oldPlayerData.playerID,
        intentPOS: oldPlayerData.intentPOS,
        currentPOS: oldPlayerData.currentPOS,
        action: oldPlayerData.action,
        offside: oldPlayerData.offside,
        hasBall: oldPlayerData.hasBall,
        stats: defaultStats,
      };

      return parsedPlayer;
    });

    // union
    const newSquad = [...onlyOldSquad, ...replacements];

    // check on positions of players
    const positionsPlayers = Object.entries(player.team.main);

    const updatePositions = newSquad.map((p) => {
      const [position] = positionsPlayers.find((pl) => p.realPlayerId.toString() === pl[1].toString());

      const originPOS = ENameTeams.KICK_OFF_TEAM ? playerPositions[position] : playerPositionsSecondTeam[position];
      const updatedDataPlayer = {
        ...p,
        originPOS,
        position: position === EPlayerPositionName.GK ? EPlayerPositionName.GK : parserPositionsHelper(position),
      };
      return updatedDataPlayer;
    });

    return updatePositions;
  }
}
