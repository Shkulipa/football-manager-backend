import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CommonJoinMainSquad } from 'src/common/aggregate/lookups/common-join-main-squad';
import { CommonRealPlayerLookup } from 'src/common/aggregate/lookups/common-real-player.lookup';
import { CommonUserLookup } from 'src/common/aggregate/lookups/common-user.lookup';
import { toId } from 'src/common/helpers/transform.helper';
import { BaseMongoRepository } from 'src/database/base-repository/base-mongo.repository';
import { groupPlayersByPositionInMainSquad } from 'src/modules/real-player/helpers/group-players-by-position-in-main-squad';
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
    if (!team) throw new NotFoundException("Team for user wasn't found, please create your team(In 'Your Team')");

    if (Object.values(team.main).length < 11)
      throw new BadRequestException("Your main squad in your team should exist 11 players(In 'Your Team')");

    return team;
  }

  async countSkillUserTeam(id: string) {
    const teamPlayers = await this.findById(id);

    const skills = groupPlayersByPositionInMainSquad(teamPlayers.main);

    await this.userTeamModel.updateOne({ _id: toId(id) }, { $set: { skills } });
  }
}
