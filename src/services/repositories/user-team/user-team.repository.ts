import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CommonJoinMainSquad } from 'src/common/aggregate/lookups/common-join-main-squad';
import { CommonRealPlayerLookup } from 'src/common/aggregate/lookups/common-real-player.lookup';
import { CommonUserLookup } from 'src/common/aggregate/lookups/common-user.lookup';
import { toId } from 'src/common/helpers/transform.helper';
import { BaseMongoRepository } from 'src/database/base-repository/base-mongo.repository';
import { PlayerGroupDto } from 'src/modules/real-player/dto/player-group.dto';
import averageSkillPlayerHelper from 'src/modules/real-player/helpers/average-skills-players-helper';
import { attackers, defenders, midfielders } from 'src/modules/real-player/helpers/group-players-by-position.helper';
import { UserTeamDbDto } from 'src/modules/user-team/dto/user-team-db.dto';

import { UserTeam } from './entities/user-team.entity';

@Injectable()
export class UserTeamRepository extends BaseMongoRepository<UserTeamDbDto> {
  protected readonly logger = new Logger(UserTeamRepository.name);

  constructor(
    @InjectModel(UserTeam.name)
    private readonly userTeamModel: Model<UserTeamDbDto>,
  ) {
    super(userTeamModel, 'User Team');
  }

  async findById(id: string) {
    const result = await this.userTeamModel
      .aggregate([
        {
          $match: {
            _id: toId(id),
          },
        },
        {
          $limit: 1, // get the first item from the array
        },
        ...CommonJoinMainSquad,
        {
          // join bench
          $lookup: CommonRealPlayerLookup('bench', 'bench'),
        },
        {
          // join reserve
          $lookup: CommonRealPlayerLookup('reserve', 'reserve'),
        },
        {
          // join user
          $lookup: CommonUserLookup,
        },
        {
          $project: {
            _id: 1,
            user: { $arrayElemAt: ['$userId', 0] },
            logoClub: 1,
            ratingElo: 1,
            clubName: 1,
            skills: 1,
            main: 1,
            bench: 1,
            reserve: 1,
          },
        },
      ])
      .exec();

    return result[0];
  }

  async matchmakingTeam(userId: string) {
    const team = await this.userTeamModel.findOne({ userId: new Types.ObjectId(userId) });
    if (!team) throw new NotFoundException("Team for user wasn't found");

    if (Object.values(team.main).length < 11) throw new BadRequestException('Your main squad should exist 11 players');

    return team;
  }

  async countSkillUserTeam(id: string) {
    const teamPlayers = await this.findById(id);

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

    await this.userTeamModel.updateOne({ _id: toId(id) }, { $set: { skills } });
  }
}
