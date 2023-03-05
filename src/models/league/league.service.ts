import { HttpException, HttpStatus, Logger } from '@nestjs/common';
import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { InjectModel } from '@nestjs/mongoose';
import { isEmpty, pick } from 'lodash';
import { Model, Types } from 'mongoose';
import getKeyS3Helper from 'src/common/helpers/getKeyS3.helper';
import { IParsedQuery } from 'src/common/interfaces/query.interfaces';
import { S3Service } from '../s3/s3.service';
import { CreateLeagueDto } from './dto/createLeague.dto';
import { UpdateLeagueDto } from './dto/updateLeague.dto';
import { League, LeagueDocument } from './entities/league.entity';

@Injectable()
export class LeagueService {
  constructor(
    @InjectModel(League.name)
    private readonly leagueModel: Model<LeagueDocument>,
    private readonly s3Service: S3Service,
  ) {}

  private readonly path = 'public/leagues';
  private readonly logger = new Logger(LeagueService.name);

  async findAll(query: IParsedQuery) {
    const { limit, page } = query;

    try {
      const leagues = await this.leagueModel
        .find()
        .populate([
          {
            path: 'countryId',
            select: ['-key'],
          },
        ])
        .skip(limit * page - limit)
        .limit(limit)
        .select(['-key']);

      const count = await this.leagueModel.find().count();

      return { leagues, count };
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  }

  async findById(id: string) {
    try {
      const country = await this.leagueModel.findById(new Types.ObjectId(id));
      if (!country)
        throw new HttpException("League wasn't found", HttpStatus.NOT_FOUND);

      return country;
    } catch (err) {
      throw err;
    }
  }

  async create(file: Express.Multer.File, createLeagueDto: CreateLeagueDto) {
    try {
      /**
       * @todo
       * check countryId or throw err
       */
      // load file in s3
      const urlFile = await this.s3Service.create(file, this.path);

      const newCountry = {
        name: createLeagueDto.name,
        countryId: new Types.ObjectId(createLeagueDto.countryId),
        logoLeague: urlFile,
      };

      await this.leagueModel.create(newCountry);
      return newCountry;
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  }

  async update(
    file: Express.Multer.File,
    updateLeagueDto: UpdateLeagueDto,
    id: string,
  ) {
    try {
      const league = await this.findById(id);
      const newLeagueData = {
        ...pick(league, ['name', 'logoLeague', 'key']),
      };

      if (file) {
        const key = getKeyS3Helper(league.logoLeague);
        await this.s3Service.delete(key);
        const logoLeague = await this.s3Service.create(file, this.path);
        const updatedObj = { logoLeague };
        Object.assign(newLeagueData, updatedObj);
      }

      const isEmptyBody = isEmpty(updateLeagueDto);
      if (!isEmptyBody) Object.assign(newLeagueData, updateLeagueDto);

      // https://mongoosejs.com/docs/tutorials/findoneandupdate.html
      const updatedLeague = await this.leagueModel.findOneAndUpdate(
        { _id: league._id },
        {
          $set: newLeagueData,
        },
        {
          new: true,
        },
      );

      return updatedLeague;
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  }

  async delete(id: string) {
    try {
      const league = await this.leagueModel.findById(new Types.ObjectId(id));

      if (!league)
        throw new HttpException("League wasn't found", HttpStatus.BAD_REQUEST);

      const key = getKeyS3Helper(league.logoLeague);
      await this.s3Service.delete(key);
      return await this.leagueModel.findByIdAndRemove(new Types.ObjectId(id));
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  }
}
