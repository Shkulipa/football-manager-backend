import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommonCountryLookup } from 'src/common/aggregate/lookups/common-country.lookup';
import { commonItemsMatch } from 'src/common/aggregate/matches/common-items.match';
import { parsedIdsWithNull, toId } from 'src/common/helpers/transform.helper';
import { BaseMongoRepository } from 'src/database/base-repository/base-mongo.repository';

import { CreateLeagueReqDto } from './dto/create-league-req.dto';
import { QueryGetLeaguesReqDto } from './dto/query-get-leagues-req.dto';
import { League, LeagueDocument } from './entities/league.entity';

@Injectable()
export class LeagueRepository extends BaseMongoRepository<LeagueDocument> {
  protected readonly logger = new Logger(LeagueRepository.name);

  constructor(
    @InjectModel(League.name)
    private readonly leagueModel: Model<LeagueDocument>,
  ) {
    super(leagueModel, 'League');
  }

  async getLeagues(query: QueryGetLeaguesReqDto) {
    const { page, limit, country } = query;
    const skip = (page - 1) * limit;

    const match = {
      $match: {
        ...commonItemsMatch(parsedIdsWithNull(country), 'countryId'),
      },
    };

    const result = await this.leagueModel
      .aggregate([
        match,
        {
          $facet: {
            items: [
              { $sort: { 'leagues.name': 1 } },
              { $skip: skip },
              { $limit: limit },
              {
                // join country id
                $lookup: CommonCountryLookup,
              },
              {
                $addFields: {
                  country: { $arrayElemAt: ['$countryId', 0] },
                },
              },
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
            count: { $ifNull: ['$count.count', 0] }, // Извлекаем значение из массива или устанавливаем 0, если массив пустой
          },
        },
      ])
      .exec();

    return result[0];
  }

  async getLeague(id: string) {
    const query = await this.leagueModel
      .aggregate([
        {
          $match: {
            _id: toId(id),
          },
        },
        {
          $limit: 1, // get first item from array
        },
        {
          // join country id
          $lookup: CommonCountryLookup,
        },
        {
          $addFields: {
            country: { $arrayElemAt: ['$countryId', 0] }, // Добавляем новое поле country с первым элементом массива
          },
        },
        {
          $project: {
            countryId: 0, // Удаляем временное поле countryId
          },
        },
      ])
      .exec();

    return query[0];
  }

  async createLeague(urlFile: string, createLeagueDto: CreateLeagueReqDto) {
    const newLeague = {
      name: createLeagueDto.name,
      countryId: toId(createLeagueDto.countryId),
      logoLeague: urlFile,
    };
    const createdLeague = await this.leagueModel.create(newLeague);

    const res = {
      _id: createdLeague._id,
      ...newLeague,
    };

    return res;
  }
}
