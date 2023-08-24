import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, PipelineStage } from 'mongoose';
import { CommonJoinMainSquad } from 'src/common/aggregate/lookups/common-join-main-squad';
import { CommonLeagueLookup } from 'src/common/aggregate/lookups/common-league-lookup';
import { CommonRealPlayerLookup } from 'src/common/aggregate/lookups/common-real-player.lookup';
import { commonItemsMatch } from 'src/common/aggregate/matches/common-items.match';
import { parsedIdsWithNull, toId } from 'src/common/helpers/transform.helper';
import { BaseMongoRepository } from 'src/database/base-repository/base-mongo.repository';

import { EPlayerPositionName } from '../real-player/constants/player-position-name.enum';
import { PlayerGroupDto } from '../real-player/dto/player-group.dto';
import averageSkillPlayerHelper from '../real-player/helpers/average-skills-players-helper';
import { attackers, defenders, midfielders } from '../real-player/helpers/group-players-by-position.helper';
import { RealPlayerRepository } from '../real-player/real-player.repository';
import { CreateRealTeamReqDto } from './dto/create-real-team-req.dto';
import { QueryGetRealTeamsReqDto } from './dto/query-get-real-teams-req.dto';
import { UpdateRealTeamReqDto } from './dto/update-real-team-req.dto';
import { RealTeam, RealTeamDocument } from './entities/real-team.entity';
import checkDuplicatePlayerHelper from './helper/check-duplicate-player.helper';

@Injectable()
export class RealTeamRepository extends BaseMongoRepository<RealTeamDocument> {
  protected readonly logger = new Logger(RealTeamRepository.name);

  constructor(
    @InjectModel(RealTeam.name)
    private readonly realTeamModel: Model<RealTeamDocument>,
    private readonly realPlayersRepository: RealPlayerRepository,
  ) {
    super(realTeamModel, 'Real Team');
  }

  /**
   * need for update squad, and we check all players for existing in DB
   * and that player doesn't duplicate in main & bench squad at the same time
   */
  async validateSquad(realTeamDto: UpdateRealTeamReqDto | CreateRealTeamReqDto, realTeamId?: string) {
    checkDuplicatePlayerHelper(realTeamDto);
    const playersIds = [...(realTeamDto.main ? Object.values(realTeamDto.main) : []), ...(realTeamDto.bench || [])];
    const players = await this.realPlayersRepository.checkExistPlayersForRealTeam(playersIds, realTeamId);
    return players;
  }

  async deletePlayerFromRealTeamSquad(id: string) {
    // find player in bench or in main squad
    const positions = Object.values(EPlayerPositionName) as string[];
    const mainFieldsArray = positions.map((position) => ({
      [`main.${position}`]: toId(id),
    }));
    const team = await this.realTeamModel.findOne({
      $or: [...mainFieldsArray, { bench: toId(id) }],
    });

    // check for which squad(main or bench) current player belongs
    const benchSquad = team.bench.map((playerId) => playerId.toString());
    const isBench = team.bench.map((playerId) => playerId.toString()).includes(id);
    if (isBench) {
      // delete from bench squad
      const newBenchSquad = benchSquad.filter((playerId) => playerId !== id);
      await this.realTeamModel.findOneAndUpdate(
        {
          _id: toId(id),
        },
        { $set: { bench: newBenchSquad } },
      );
    } else {
      // delete from main squad
      const newMainSquad = { ...team.main };
      for (const key in newMainSquad) {
        if (newMainSquad[key].toString() === id) {
          newMainSquad[key] = null;
        }
      }
      await this.realTeamModel.findOneAndUpdate(
        {
          _id: toId(id),
        },
        { $set: { main: newMainSquad } },
      );
    }

    await this.countSkillRealTeam(team.id);
  }

  async countSkillRealTeam(id: string) {
    const teamPlayers = await this.getRealTeam(id);

    const playersMain: PlayerGroupDto[] = Object.values(teamPlayers.main).map((p: PlayerGroupDto) => ({
      positions: p.positions,
      skills: p.skills,
    }));

    const playersBench: PlayerGroupDto[] = teamPlayers.bench.map((p: PlayerGroupDto) => ({
      positions: p.positions,
      skills: p.skills,
    }));

    const players = [...playersMain, ...playersBench];

    const att = averageSkillPlayerHelper(attackers(players));
    const mid = averageSkillPlayerHelper(midfielders(players));
    const def = averageSkillPlayerHelper(defenders(players));

    const skills = { att, mid, def };

    await this.realTeamModel.updateOne({ _id: toId(id) }, { $set: { skills } });
  }

  async getRealTeam(id: string) {
    const result = await this.realTeamModel
      .aggregate([
        {
          $match: {
            _id: toId(id),
          },
        },
        {
          $limit: 1, // get the first item from the array
        },
        {
          // join bench
          $lookup: CommonRealPlayerLookup('bench', 'bench'),
        },
        ...CommonLeagueLookup,
        ...CommonJoinMainSquad,
        {
          $project: {
            _id: 1,
            leagueId: 1,
            clubName: 1,
            logoName: 1,
            main: 1,
            bench: 1,
            skills: 1,
          },
        },
      ])
      .exec();

    return result[0];
  }

  async getRealTeams(query: QueryGetRealTeamsReqDto) {
    const { limit, page, leagueId, clubName } = query;
    const skip = (page - 1) * limit;

    const match: PipelineStage.FacetPipelineStage = {
      $match: {
        ...(clubName ? { name: { $regex: new RegExp(clubName, 'i') } } : {}),
        ...commonItemsMatch(parsedIdsWithNull(leagueId), 'leagueId'),
      },
    };

    const result = await this.realTeamModel
      .aggregate([
        {
          $facet: {
            items: [
              match,
              { $sort: { 'leagues.name': 1 } },
              { $limit: limit },
              { $skip: skip },
              ...CommonLeagueLookup,
              {
                // join bench squad
                $lookup: CommonRealPlayerLookup('bench', 'bench'),
              },
              ...CommonJoinMainSquad,
              {
                $project: {
                  countryId: 0,
                },
              },
            ],
            count: [
              match,
              {
                $count: 'count',
              },
            ],
          },
        },
        {
          $unwind: {
            path: '$count',
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $project: {
            items: '$items',
            count: { $ifNull: ['$count.count', 0] },
          },
        },
      ])
      .exec();

    return result[0];
  }
}
