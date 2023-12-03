import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CommonJoinMainSquad } from 'src/common/aggregate/lookups/common-join-main-squad';
import { CommonRealPlayerLookup } from 'src/common/aggregate/lookups/common-real-player.lookup';
import { CommonUserLookup } from 'src/common/aggregate/lookups/common-user.lookup';
import { QueryDto } from 'src/common/dto/query.dto';
import { toId } from 'src/common/helpers/transform.helper';
import { IUserData } from 'src/common/interfaces/user-data.interfaces';
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

  async getOwnRating(user: IUserData) {
    const result = await this.userTeamModel.aggregate([
      {
        $facet: {
          items: [
            { $sort: { ratingElo: -1 } },
            {
              $project: {
                _id: 1,
                logoClub: 1,
                clubName: 1,
                ratingElo: 1,
              },
            },
          ],
          userRating: [
            {
              $match: {
                userId: toId(user._id),
              },
            },
            {
              $project: {
                _id: 1,
                logoClub: 1,
                clubName: 1,
                ratingElo: 1,
              },
            },
            {
              $limit: 1,
            },
          ],
        },
      },
      {
        $unwind: {
          path: '$userRating',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $addFields: {
          userRating: {
            $mergeObjects: [
              '$userRating',
              {
                rank: {
                  $add: [
                    {
                      $indexOfArray: ['$items._id', '$userRating._id'],
                    },
                    1,
                  ],
                },
              },
            ],
          },
        },
      },
      {
        $project: {
          userTeam: '$userRating',
        },
      },
    ]);
    return result[0];
  }

  async getUsersTeamsByRating(query: QueryDto) {
    const { limit, page } = query;
    const skip = (page - 1) * limit;

    const result = await this.userTeamModel.aggregate([
      {
        $facet: {
          items: [
            { $sort: { ratingElo: -1 } },
            { $skip: skip },
            { $limit: limit },
            {
              $project: {
                _id: 1,
                logoClub: 1,
                clubName: 1,
                ratingElo: 1,
              },
            },
          ],
          count: [
            {
              $count: 'count',
            },
          ],
        },
      },
      {
        $addFields: {
          items: {
            $map: {
              input: '$items',
              as: 'item',
              in: {
                $mergeObjects: [
                  '$$item',
                  {
                    rank: {
                      $add: [
                        {
                          $indexOfArray: ['$items._id', '$$item._id'],
                        },
                        1,
                      ],
                    },
                  },
                ],
              },
            },
          },
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
    ]);

    return result[0];
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
