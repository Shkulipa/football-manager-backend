import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, PipelineStage, Types } from 'mongoose';
import { CommonCountryLookup } from 'src/common/aggregate/lookups/common-country.lookup';
import { CommonRealTeamLookup } from 'src/common/aggregate/lookups/common-real-team.lookup';
import { commonItemsMatch } from 'src/common/aggregate/matches/common-items.match';
import { parsedIdsWithNull, toId, toIdsArr } from 'src/common/helpers/transform.helper';
import { BaseMongoRepository } from 'src/database/base-repository/base-mongo.repository';

import {
  maxAgePlayer,
  maxRatingPlayer,
  maxSkillPlayer,
  minAgePlayer,
  minRatingPlayer,
  minSkillPlayer,
} from './constants/common-player-values';
import { EPlayerPositionName } from './constants/player-position-name.enum';
import { ERolePlayer } from './constants/rolePlayer.enum';
import { CreateRealPlayerReqDto } from './dto/create-real-player-req.dto';
import { QueryGetRealPlayersReqDto } from './dto/query-get-real-players-req.dto';
import { RealPlayer, RealPlayerDocument } from './entities/real-player.entity';
import { isExistPlayers } from './helpers/is-exist-player.helper';
import { ratingHelper } from './helpers/rating.helper';

@Injectable()
export class RealPlayerRepository extends BaseMongoRepository<RealPlayerDocument> {
  protected readonly logger = new Logger(RealPlayerRepository.name);

  constructor(
    @InjectModel(RealPlayer.name)
    private readonly realPlayerModel: Model<RealPlayerDocument>,
  ) {
    super(realPlayerModel, 'Real Player');
  }

  private matchSkillPlayer(from: number, to: number) {
    return {
      $gte: from || minSkillPlayer,
      $lte: to || maxSkillPlayer,
    };
  }

  // for real team
  async checkExistPlayersForRealTeam(playersIds: (string | Types.ObjectId)[], realTeamId?: string) {
    const players = await this.realPlayerModel.find({
      _id: { $in: toIdsArr(playersIds) },
      realTeamId: { $or: [toId(realTeamId), null] }, // if you need check players for exactly team
    });

    if (players.length !== playersIds.length)
      throw new BadRequestException('you can only add a player if he is without a club or belongs to this team');

    const foundIds = players.map((doc) => doc._id.toString());
    isExistPlayers(playersIds, foundIds);

    return players;
  }

  // for user team
  async checkExistPlayersForUserTeam(playersIds: (string | Types.ObjectId)[]) {
    const players = await this.realPlayerModel.find({
      _id: { $in: toIdsArr(playersIds) },
    });
    const foundIds = players.map((doc) => doc._id.toString());
    isExistPlayers(playersIds, foundIds);

    return players;
  }

  async formRandomPlayers() {
    const projectPlayer: PipelineStage.Project['$project'] = {
      _id: 1,
    };

    const players = await this.realPlayerModel.aggregate([
      {
        $facet: {
          GKs: [
            { $match: { positions: { $in: [EPlayerPositionName.GK] } } },
            { $project: projectPlayer },
            { $sample: { size: 2 } },
          ],
          others: [
            { $match: { positions: { $nin: [EPlayerPositionName.GK] } } },
            { $project: projectPlayer },
            { $sample: { size: 23 } },
          ],
        },
      },
      {
        $addFields: {
          allPlayers: { $concatArrays: ['$GKs', '$others'] },
        },
      },
      {
        $project: {
          players: '$allPlayers',
        },
      },
    ]);

    return players[0].players;
  }

  async getRealPlayers(query: QueryGetRealPlayersReqDto) {
    const { page, limit, search, positions, country, team, ratingFrom, ratingTo, ageFrom, ageTo } = query;
    const {
      agilityFrom,
      agilityTo,
      jumpingFrom,
      jumpingTo,
      passingFrom,
      passingTo,
      penaltyTakingFrom,
      penaltyTakingTo,
      savingFrom,
      savingTo,
      shootingFrom,
      shootingTo,
      tacklingFrom,
      tacklingTo,
      strengthFrom,
      strengthTo,
    } = query; // skills
    const skip = (page - 1) * limit;

    const match: PipelineStage.FacetPipelineStage = {
      $match: {
        ...(search ? { name: { $regex: new RegExp(search, 'i') } } : {}),
        ...(positions ? { positions: { $all: positions } } : {}),
        ...commonItemsMatch(parsedIdsWithNull(country), 'countryId'),
        ...commonItemsMatch(parsedIdsWithNull(team), 'realTeamId'),
        rating: {
          $gte: ratingFrom || minRatingPlayer,
          $lte: ratingTo || maxRatingPlayer,
        },
        age: {
          $gte: ageFrom || minAgePlayer,
          $lte: ageTo || maxAgePlayer,
        },
        'skills.agility': this.matchSkillPlayer(agilityFrom, agilityTo),
        'skills.jumping': this.matchSkillPlayer(jumpingFrom, jumpingTo),
        'skills.passing': this.matchSkillPlayer(passingFrom, passingTo),
        'skills.penalty_taking': this.matchSkillPlayer(penaltyTakingFrom, penaltyTakingTo),
        'skills.saving': this.matchSkillPlayer(savingFrom, savingTo),
        'skills.shooting': this.matchSkillPlayer(shootingFrom, shootingTo),
        'skills.tackling': this.matchSkillPlayer(tacklingFrom, tacklingTo),
        'skills.strength': this.matchSkillPlayer(strengthFrom, strengthTo),
      },
    };

    const result = await this.realPlayerModel
      .aggregate([
        match,
        {
          $facet: {
            items: [
              { $sort: { name: 1 } },
              { $skip: skip },
              { $limit: limit },
              {
                // join country id
                $lookup: CommonCountryLookup,
              },
              {
                // join team id
                $lookup: CommonRealTeamLookup,
              },
              {
                $addFields: {
                  country: { $arrayElemAt: ['$countryId', 0] },
                  realTeam: { $arrayElemAt: ['$realTeamId', 0] },
                },
              },
              {
                $project: {
                  countryId: 0,
                  realTeamId: 0,
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

  async getRealPlayer(id: string) {
    const query = await this.realPlayerModel
      .aggregate([
        {
          $match: {
            _id: toId(id),
          },
        },
        {
          $limit: 1,
        },
        {
          $lookup: CommonCountryLookup,
        },
        {
          $lookup: CommonRealTeamLookup,
        },
        {
          $addFields: {
            country: { $arrayElemAt: ['$countryId', 0] },
            realTeam: { $arrayElemAt: ['$realTeamId', 0] },
          },
        },
        {
          $project: {
            countryId: 0,
            realTeamId: 0,
          },
        },
      ])
      .exec();

    return query[0];
  }

  async createNewRealPlayer(createRealPlayerReqDto: CreateRealPlayerReqDto, urlFile: string) {
    const { agility, jumping, passing, penalty_taking, saving, shooting, tackling, strength } = createRealPlayerReqDto;
    const skills = { agility, jumping, passing, penalty_taking, saving, shooting, tackling, strength };
    const { countryId, name, number, role, realTeamId, positions } = createRealPlayerReqDto;

    // if team already has limit mains or bench players
    if (realTeamId) {
      if (role === ERolePlayer.MAIN) {
        const limitMain = 11;
        const countMainPlayers = await this.realPlayerModel
          .find({ realTeamId: toId(realTeamId), role: ERolePlayer.MAIN })
          .count();
        if (countMainPlayers === limitMain)
          throw new BadRequestException(`Team already have ${limitMain} ${ERolePlayer.MAIN} players`);
      }

      if (role === ERolePlayer.BENCH) {
        const limitBench = 12;
        const countMainPlayers = await this.realPlayerModel
          .find({ realTeamId: toId(realTeamId), role: ERolePlayer.BENCH })
          .count();
        if (countMainPlayers === limitBench)
          throw new BadRequestException(`Team already have ${limitBench} ${ERolePlayer.BENCH} players`);
      }
    }

    const rating = ratingHelper(skills);

    await this.realPlayerModel.create({
      countryId: toId(countryId),
      realTeamId: toId(realTeamId),
      rating,
      name,
      number,
      role,
      positions,
      skills,
      photo: urlFile,
    });
  }
}
