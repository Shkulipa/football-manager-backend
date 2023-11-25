import { BadRequestException, ForbiddenException, Inject } from '@nestjs/common';
import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import Redis from 'ioredis';
import { hasDuplicatesIds } from 'src/common/helpers/duplicates.helper';
import { IUserData } from 'src/common/interfaces/user-data.interfaces';
import { IORedisKey } from 'src/services/redis/redis.module';
import { UserTeamRepository } from 'src/services/repositories/user-team/user-team.repository';

import { playerPositions, playerPositionsSecondTeam } from '../real-player/constants/player-positions';
import averageSkillPlayerHelper from '../real-player/helpers/average-skills-players-helper';
import { ratingHelper } from '../real-player/helpers/rating.helper';
import { defaultStats } from './constants/default-stats.interface';
import { NameKeys } from './constants/name-keys.enum';
import { UpdateSquadsReqDto } from './dto/update-squads-req.dto';
import { IMatchInfo } from './interfaces/football-simulator-engine/match-info.interface';
import { ENameTeams } from './interfaces/football-simulator-engine/name-teams.interface';
import { IPlayer, IPlayerParse } from './interfaces/football-simulator-engine/player.interface';
import { EStatusMatch, IPlayerData } from './interfaces/match-detail.interface';
import { MatchRepository } from './match.repository';

@Injectable()
export class MatchService {
  constructor(
    @Inject(IORedisKey) private readonly redisClient: Redis,
    private readonly matchRepository: MatchRepository,
    private readonly userTeamRepository: UserTeamRepository,
  ) {}

  async getCurrentLiveMatch(user: IUserData) {
    return await this.matchRepository.getCurrentMatchLive(user._id.toString());
  }

  async validationStartMatch(matchId: string) {
    const match = await this.matchRepository.getMatchById(matchId);

    if (match.status === EStatusMatch.IN_PROCESS)
      throw new BadRequestException("Match has already started, subscribe to 'match-simulation'");

    if (match.status === EStatusMatch.FINISHED) throw new BadRequestException('Match has already finished');

    if (!match.player1.isReady || !match.player2.isReady)
      throw new BadRequestException(`For starting match(${matchId}) need be ready for both players`);

    await this.matchRepository.setStatusMatch(matchId, EStatusMatch.IN_PROCESS, 900);

    return match;
  }

  /**
   * @info
   * parse squad for football simulator engine
   * get full data about players
   */
  async parseSquad(player: IPlayerData, sideTeam: ENameTeams) {
    const squadPlayer = await this.userTeamRepository.findById(player.team._id.toString());

    const allFootballersPlayer = [...Object.values(squadPlayer.main), ...squadPlayer.bench];
    const mainSquad = { ...player.team.main };

    const players: IPlayerParse[] = [];
    for (const [position, id] of Object.entries(mainSquad)) {
      const player = allFootballersPlayer.find((p) => p._id.toString() === id);

      const data: IPlayerParse = {
        ...player,
        name: player.name,
        rating: +(ratingHelper(player.skills) * 20).toFixed(0),
        position,
        skill: player.skills,
        intentPOS:
          sideTeam === ENameTeams.KICK_OFF_TEAM ? playerPositions[position] : playerPositionsSecondTeam[position],
        currentPOS:
          sideTeam === ENameTeams.KICK_OFF_TEAM ? playerPositions[position] : playerPositionsSecondTeam[position],
        fitness: 100,
        injured: false,
      };
      mainSquad[position] = data;
      players.push(data);
    }

    const benchSquad = [...player.team.bench];
    const benchPlayers = benchSquad.map((benchPlayer) => {
      const player = allFootballersPlayer.find((p) => p._id.toString() === benchPlayer.toString());

      const data = {
        _id: player._id,
        rating: +(ratingHelper(player.skills) * 20).toFixed(0),
        skill: player.skills,
        positions: player.positions,
        number: player.number,
        name: player.name,
        country: player.country,
        age: player.age,
        fitness: 100,
        injured: false,
      };
      if (player.photo) data['photo'] = player.photo;

      return data;
    });

    const team = {
      logoClub: player.team?.logoClub || '',
      name: player.team.clubName,
      manager: player.user.username,
      players,
      rating: averageSkillPlayerHelper([...allFootballersPlayer]),
      bench: benchPlayers,
      replacements: [],
    };

    return team;
  }

  async updateSquads(id: string, user: IUserData, updateSquadReqDto: UpdateSquadsReqDto) {
    const match = await this.matchRepository.getMatchById(id);

    const tokenUserId = user._id.toString();
    if (match.player1.user._id !== tokenUserId && match.player2.user._id !== tokenUserId)
      throw new ForbiddenException('You are not a player of this match');

    let playerKey: string;
    if (match.player1.user._id === tokenUserId) playerKey = 'player1';
    else playerKey = 'player2';

    const player = match[playerKey] as IPlayerData;
    const idsMain = Object.values(player.team.main);
    const oldPlayers = updateSquadReqDto.replacements.map((p) => p.off);
    if (idsMain.length < 11) throw new BadRequestException('Your main squad should have 11 players');

    const newIdsMainSquad = Object.values(updateSquadReqDto.main);
    const includesOffPlayers = newIdsMainSquad.filter((p) => oldPlayers.includes(p.toString()));
    if (includesOffPlayers.length > 0)
      throw new BadRequestException(`Your main squad has off players: ${includesOffPlayers.join(', ')}`);

    const allFootballersForCurrMatch = [...idsMain, ...player.team.bench];
    const allFootballersForChanges = [...Object.values(updateSquadReqDto.main), ...updateSquadReqDto.bench];

    const isDuplicates = hasDuplicatesIds(idsMain);
    if (isDuplicates) throw new BadRequestException('you have duplicates ids in main squad');

    // check players for declared for this match
    const notDeclaredPlayers = allFootballersForChanges.filter((id) => !allFootballersForCurrMatch.includes(id));
    if (notDeclaredPlayers.length > 0)
      throw new BadRequestException(`Players with ids: ${notDeclaredPlayers.join(', ')} not belongs to this match`);

    const newMainSquad = { ...updateSquadReqDto.main };

    // replacements
    if (updateSquadReqDto.replacements.length > 3)
      throw new BadRequestException('You can make only 3 replacements for match');

    // check on the already replaced players(they can't be continue playing after replaced and again entire to game)
    // players that must not appear in the game again after their replacement
    const idsNewMain = Object.values(newMainSquad);
    const includesOldReplacements = idsNewMain.filter((id) =>
      player.replacements.map((i) => i.off).includes(id.toString()),
    );
    if (includesOldReplacements.length > 0)
      throw new BadRequestException(
        `Players with ids: ${includesOldReplacements.join(
          ', ',
        )} were already played and can't be come back in the game again`,
      );

    const key = `${NameKeys.MATCH}:${id}`;
    await this.redisClient
      .multi([
        ['call', 'JSON.SET', key, `.${playerKey}.isNeedUpdateSquad`, JSON.stringify(true)],
        ['call', 'JSON.SET', key, `.${playerKey}.replacements`, JSON.stringify(updateSquadReqDto.replacements)],
        ['call', 'JSON.SET', key, `.${playerKey}.team.main`, JSON.stringify(newMainSquad)],
        ['call', 'JSON.SET', key, `.${playerKey}.team.bench`, JSON.stringify(updateSquadReqDto.bench)],
      ])
      .exec();

    return { success: true };
  }

  async updateSquadForEngineSimulator(matchInfo: IMatchInfo, player: IPlayerData, engineNameTeam: ENameTeams) {
    const team = await this.parseSquad(player, engineNameTeam);

    // old squad without new players
    const onlyOldSquad = matchInfo[engineNameTeam].players.filter(
      (p) => !player.replacements.map((i) => i.off).includes(p._id.toString()),
    );
    const onlyOldSquadIds = onlyOldSquad.map((i) => i._id.toString());

    // new players in squad
    const replacementsNewIds = Object.values(player.team.main).filter((p) => !onlyOldSquadIds.includes(p.toString()));

    // parse new players for replace them in matchInfo(for engine)
    const replacements: IPlayer[] = replacementsNewIds.map((p) => {
      // data of new player
      const newPlayerData = team.players.find((parsedPlayer) => parsedPlayer._id.toString() === p.toString());

      // get old player, for get him data in match
      const offPreviousPlayer = player.replacements.find((i) => i.on.toString() === p.toString());
      const oldPlayerData = matchInfo[engineNameTeam].players.find(
        (oldPlayer) => oldPlayer._id.toString() === offPreviousPlayer.off.toString(),
      );

      // parsed data for engine
      const parsedPlayer: IPlayer = {
        ...newPlayerData,
        fitness: 100,
        injured: false,
        originPOS: oldPlayerData.currentPOS,
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
    const newMainSquad = [...onlyOldSquad, ...replacements];

    // check on positions of players
    const newSquadByUser = Object.entries(player.team.main);
    const newReplacePositionsMainSquad: IPlayer[] = []; // new squad with updated positions
    newSquadByUser.forEach(([position, playerId]) => {
      const playerData = newMainSquad.find((p) => p._id.toString() === playerId.toString());

      const newData = {
        ...playerData,
        position,
        originPOS:
          engineNameTeam === ENameTeams.KICK_OFF_TEAM
            ? matchInfo.half === 1
              ? playerPositions[position]
              : playerPositionsSecondTeam[position]
            : matchInfo.half === 1
            ? playerPositionsSecondTeam[position]
            : playerPositions[position],
      };

      newReplacePositionsMainSquad.push(newData);
    });

    // final result with full info about players
    const allPlayers = [...team.players, ...team.bench];
    const benchPlayerFullInfo = player.team.bench.map((id) =>
      allPlayers.find((p) => p._id.toString() === id.toString()),
    );

    return {
      main: newReplacePositionsMainSquad,
      bench: benchPlayerFullInfo,
      replacements: player.replacements,
    };
  }
}
