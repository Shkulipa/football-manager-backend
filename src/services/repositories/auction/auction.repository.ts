import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, PipelineStage } from 'mongoose';
import { CommonRealPlayerLookup } from 'src/common/aggregate/lookups/common-real-player.lookup';
import { toId } from 'src/common/helpers/transform.helper';
import { IUserData } from 'src/common/interfaces/user-data.interfaces';
import { BaseMongoRepository } from 'src/database/base-repository/base-mongo.repository';
import { GetQueryLotsReqDto } from 'src/modules/auction/dto/get-lots-req.dto';
import { ILot } from 'src/modules/auction/dto/lot.dto';
import {
  maxAgePlayer,
  maxRatingPlayer,
  minAgePlayer,
  minRatingPlayer,
} from 'src/modules/real-player/constants/common-player-values';
import { RealPlayerRepository } from 'src/services/repositories/real-player/real-player.repository';

import { Auction, AuctionDocument } from './entity/auction.entity';

@Injectable()
export class AuctionRepository extends BaseMongoRepository<AuctionDocument> {
  protected readonly logger = new Logger(AuctionRepository.name);

  constructor(
    @InjectModel(Auction.name)
    private readonly auctionModel: Model<AuctionDocument>,
    private readonly realPlayerRepository: RealPlayerRepository,
  ) {
    super(auctionModel, 'lot');
  }

  async getOwnLots(user: IUserData) {
    const match: PipelineStage.FacetPipelineStage = {
      $match: {
        userId: user._id,
      },
    };

    const result = await this.auctionModel
      .aggregate([
        {
          $lookup: CommonRealPlayerLookup('playerId', 'player'),
        },
        match,
      ])
      .exec();

    return result.map((p) => ({ ...p, player: p.player[0] })) as ILot[];
  }

  async getLots(getQueryLotsReqDto: GetQueryLotsReqDto, user: IUserData) {
    const { page, limit, search, positions, country, ratingFrom, ratingTo, ageFrom, ageTo, priceFrom, priceTo } =
      getQueryLotsReqDto;
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
    } = getQueryLotsReqDto; // skills
    const skip = (page - 1) * limit;

    const nameField = 'player';
    const match: PipelineStage.FacetPipelineStage = {
      $match: {
        userId: { $ne: user._id },
        price: {
          $gte: priceFrom || 1,
          $lte: priceTo || Number.POSITIVE_INFINITY,
        },
        ...(search ? { [`${nameField}.name`]: { $regex: new RegExp(search, 'i') } } : {}),
        ...(positions ? { [`${nameField}.positions`]: { $in: positions } } : {}),
        ...(country
          ? {
              [`${nameField}.country._id`]: {
                $in: country.map((id) => toId(id)),
              },
            }
          : {}),
        [`${nameField}.rating`]: {
          $gte: ratingFrom || minRatingPlayer,
          $lte: ratingTo || maxRatingPlayer,
        },
        [`${nameField}.age`]: {
          $gte: ageFrom || minAgePlayer,
          $lte: ageTo || maxAgePlayer,
        },
        [`${nameField}.skills.agility`]: this.realPlayerRepository.matchSkillPlayer(agilityFrom, agilityTo),
        [`${nameField}.skills.jumping`]: this.realPlayerRepository.matchSkillPlayer(jumpingFrom, jumpingTo),
        [`${nameField}.skills.passing`]: this.realPlayerRepository.matchSkillPlayer(passingFrom, passingTo),
        [`${nameField}.skills.penalty_taking`]: this.realPlayerRepository.matchSkillPlayer(
          penaltyTakingFrom,
          penaltyTakingTo,
        ),
        [`${nameField}.skills.saving`]: this.realPlayerRepository.matchSkillPlayer(savingFrom, savingTo),
        [`${nameField}.skills.shooting`]: this.realPlayerRepository.matchSkillPlayer(shootingFrom, shootingTo),
        [`${nameField}.skills.tackling`]: this.realPlayerRepository.matchSkillPlayer(tacklingFrom, tacklingTo),
        [`${nameField}.skills.strength`]: this.realPlayerRepository.matchSkillPlayer(strengthFrom, strengthTo),
      },
    };

    const result = await this.auctionModel
      .aggregate([
        {
          $lookup: CommonRealPlayerLookup('playerId', 'player'),
        },
        match,
        {
          $facet: {
            items: [{ $sort: { name: 1 } }, { $skip: skip }, { $limit: limit }],
            count: [
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
            items: {
              $map: {
                input: '$items',
                as: 'item',
                in: {
                  $mergeObjects: [
                    '$$item',
                    {
                      player: { $arrayElemAt: ['$$item.player', 0] },
                    },
                  ],
                },
              },
            },
            count: { $ifNull: ['$count.count', 0] },
          },
        },
      ])
      .exec();

    return result[0];
  }
}
