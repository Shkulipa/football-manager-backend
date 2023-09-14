import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, PipelineStage } from 'mongoose';
import { CommonRealPlayerLookup } from 'src/common/aggregate/lookups/common-real-player.lookup';
import { toId } from 'src/common/helpers/transform.helper';
import { BaseMongoRepository } from 'src/database/base-repository/base-mongo.repository';

import {
  maxAgePlayer,
  maxRatingPlayer,
  minAgePlayer,
  minRatingPlayer,
} from '../real-player/constants/common-player-values';
import { RealPlayerRepository } from '../real-player/real-player.repository';
import { GetQueryLotsReqDto } from './dto/get-lots-req.dto';
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

  async getLots(getQueryLotsReqDto: GetQueryLotsReqDto) {
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

    const nameField = 'playerId';
    const match: PipelineStage.FacetPipelineStage = {
      $match: {
        price: {
          $gte: priceFrom || 10,
          $lte: priceTo || Number.POSITIVE_INFINITY,
        },
        ...(search ? { [`${nameField}.name`]: { $regex: new RegExp(search, 'i') } } : {}),
        ...(positions ? { [`${nameField}.positions`]: { $all: positions } } : {}),
        ...(country
          ? {
              [`${nameField}.countryId._id`]: {
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
          $lookup: CommonRealPlayerLookup('playerId', 'playerId'),
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
            items: '$items',
            count: { $ifNull: ['$count.count', 0] },
          },
        },
      ])
      .exec();

    return result[0];
  }
}
