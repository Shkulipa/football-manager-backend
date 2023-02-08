import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isEmpty, pick } from 'lodash';
import { Model, Types } from 'mongoose';
import { IParsedQuery } from 'src/common/interfaces/query.interfaces';
import { S3Service } from 'src/models/s3/s3.service';
import { CreateFlagDto } from './dto/createFlag.dto';
import { UpdateFlagDto } from './dto/updateFlag.dto';
import { Flag, FlagDocument } from './entities/flag.entity';

@Injectable()
export class FlagService {
  constructor(
    @InjectModel(Flag.name) private readonly flagModel: Model<FlagDocument>,
    private readonly s3Service: S3Service,
  ) {}

  private readonly path = 'public/flags';
  private readonly logger = new Logger(FlagService.name);

  async getAll(query: IParsedQuery) {
    const { limit, page } = query;

    try {
      const flags = await this.flagModel
        .find()
        .skip(limit * page - limit)
        .limit(limit)
        .select(['-key']);

      const count = await this.flagModel.find().count();

      return { flags, count };
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  }

  async findById(id: string) {
    try {
      const flag = await this.flagModel.findById(new Types.ObjectId(id));
      if (!flag)
        throw new HttpException("Flag wasn't found", HttpStatus.NOT_FOUND);

      return flag;
    } catch (err) {
      throw err;
    }
  }

  async create(file: Express.Multer.File, createFlagDto: CreateFlagDto) {
    try {
      // load file in s3
      const { urlFile, key } = await this.s3Service.create(file, this.path);

      const newFlag = {
        name: createFlagDto.name,
        urlFlag: urlFile,
        key,
      };

      await this.flagModel.create(newFlag);
      return newFlag;
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  }

  async update(
    file: Express.Multer.File,
    updateFlagDto: UpdateFlagDto,
    id: string,
  ) {
    try {
      const flag = await this.findById(id);
      const newFlagData = {
        ...pick(flag, ['name', 'urlFlag', 'key']),
      };

      if (file) {
        await this.s3Service.delete(flag.key);
        const fileData = await this.s3Service.create(file, this.path);
        const updatedObj = { urlFlag: fileData.urlFile, key: fileData.key };
        Object.assign(newFlagData, updatedObj);
      }

      const isEmptyBody = isEmpty(updateFlagDto);
      if (!isEmptyBody) Object.assign(newFlagData, updateFlagDto);

      // https://mongoosejs.com/docs/tutorials/findoneandupdate.html
      const updatedFlag = await this.flagModel.findOneAndUpdate(
        { _id: flag._id },
        {
          $set: newFlagData,
        },
        {
          new: true,
        },
      );

      return updatedFlag;
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  }

  async delete(id: string) {
    try {
      const flag = await this.flagModel.findById(new Types.ObjectId(id));

      if (!flag)
        throw new HttpException("Flag wasn't found", HttpStatus.BAD_REQUEST);

      await this.s3Service.delete(flag.key);
      return await this.flagModel.findByIdAndRemove(new Types.ObjectId(id));
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  }
}
