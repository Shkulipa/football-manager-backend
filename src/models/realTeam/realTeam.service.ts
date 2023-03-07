import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isEmpty, pick } from 'lodash';
import { Model, Types } from 'mongoose';
import getKeyS3Helper from 'src/common/helpers/getKeyS3.helper';
import { IParsedQuery } from 'src/common/interfaces/query.interfaces';

import { League, LeagueDocument } from '../league/entities/league.entity';
import { S3Service } from '../s3/s3.service';
import { CreateRealTeamDto } from './dto/createRealTeam.dto';
import { UpdateRealTeamDto } from './dto/updateRealTeam.dto';
import { RealTeam, RealTeamDocument } from './entities/realTeam.entity';

@Injectable()
export class RealTeamService {
  constructor(
    @InjectModel(League.name)
    private readonly leagueModel: Model<LeagueDocument>,
    @InjectModel(RealTeam.name)
    private readonly realTeamModel: Model<RealTeamDocument>,
    private readonly s3Service: S3Service,
  ) {}

  private readonly path = 'public/real-teams';
  private readonly logger = new Logger(RealTeamService.name);

  async findAll(query: IParsedQuery) {
    const { limit, page } = query;

    try {
      const realTeams = await this.realTeamModel
        .find()
        .populate([
          {
            path: 'countryId',
            select: ['-key'],
          },
          {
            path: 'leagueId',
            select: ['-key'],
          },
        ])
        .skip(limit * page - limit)
        .limit(limit)
        .select(['-key']);

      const count = await this.realTeamModel.find().count();

      return { realTeams, count };
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  }

  async findById(id: string) {
    try {
      const realTeam = await this.realTeamModel.findById(
        new Types.ObjectId(id),
      );
      if (!realTeam)
        throw new HttpException("Team wasn't found", HttpStatus.NOT_FOUND);

      return realTeam;
    } catch (err) {
      throw err;
    }
  }

  async create(
    file: Express.Multer.File,
    createRealTeamDto: CreateRealTeamDto,
  ) {
    try {
      // load file in s3
      const urlFile = await this.s3Service.create(file, this.path);

      const league = await this.leagueModel
        .findById(new Types.ObjectId(createRealTeamDto.leagueId))
        .select(['countryId']);

      if (!league)
        throw new HttpException(
          "The leagues doesn't exsist",
          HttpStatus.BAD_REQUEST,
        );

      const newRealTeam = {
        clubName: createRealTeamDto.clubName,
        countryId: new Types.ObjectId(league.countryId),
        leagueId: new Types.ObjectId(createRealTeamDto.leagueId),
        logoClub: urlFile,
      };

      await this.realTeamModel.create(newRealTeam);
      return newRealTeam;
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  }

  async update(
    file: Express.Multer.File,
    updateRealTeamDto: UpdateRealTeamDto,
    id: string,
    leagueId: Types.ObjectId,
  ) {
    try {
      const realTeam = await this.findById(id);

      const newRealTeamData = {
        ...pick(realTeam, [
          'countryId',
          'leagueId',
          'logoClub',
          'clubName',
          'key',
        ]),
      };

      if (file) {
        const key = getKeyS3Helper(realTeam.logoClub);
        await this.s3Service.delete(key);
        const logoClubUrl = await this.s3Service.create(file, this.path);
        const updatedObj = { logoClub: logoClubUrl };
        Object.assign(newRealTeamData, { leagueId, ...updatedObj });
      }

      const isEmptyBody = isEmpty(updateRealTeamDto);
      if (!isEmptyBody) Object.assign(newRealTeamData, updateRealTeamDto);

      // https://mongoosejs.com/docs/tutorials/findoneandupdate.html
      const updatedReamTeam = await this.leagueModel.findOneAndUpdate(
        { _id: realTeam._id },
        {
          $set: newRealTeamData,
        },
        {
          new: true,
        },
      );

      return updatedReamTeam;
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  }

  async delete(id: string) {
    try {
      const realTeam = await this.realTeamModel.findById(
        new Types.ObjectId(id),
      );

      if (!realTeam)
        throw new HttpException("Team wasn't found", HttpStatus.BAD_REQUEST);

      const key = getKeyS3Helper(realTeam.logoClub);

      await this.s3Service.delete(key);
      return await this.realTeamModel.findByIdAndRemove(new Types.ObjectId(id));
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  }
}
