import { Injectable } from '@nestjs/common';
import { isEmpty } from 'lodash';
import { QueryDto } from 'src/common/dto/query.dto';
import getKeyS3Helper from 'src/common/helpers/get-key-s3.helper';
import { toId } from 'src/common/helpers/transform.helper';
import { CountryRepository } from 'src/services/repositories/country/country.repository';
import { LeagueRepository } from 'src/services/repositories/league/league.repository';
import { RealPlayerRepository } from 'src/services/repositories/real-player/real-player.repository';
import { S3Service } from 'src/services/s3/s3.service';

import { CreateCountryReqDto } from './dto/create-country-req.dto';
import { UpdateCountryReqDto } from './dto/update-country-req.dto';

@Injectable()
export class CountryService {
  constructor(
    private readonly countryRepository: CountryRepository,
    private readonly leagueRepository: LeagueRepository,
    private readonly realPlayerRepository: RealPlayerRepository,
    private readonly s3Service: S3Service,
  ) {}

  private readonly path = 'public/countries';

  async getAll(query: QueryDto) {
    const { items, count } = await this.countryRepository.getItems(query);
    return { items, count };
  }

  async findById(id: string) {
    return await this.countryRepository.validation(id);
  }

  async create(file: Express.Multer.File, createCountryReqDto: CreateCountryReqDto) {
    // load file in s3
    const urlFile = await this.s3Service.create(file, this.path);
    await this.countryRepository.createCountry(urlFile, createCountryReqDto);

    return { success: true };
  }

  async update(file: Express.Multer.File, updateCountryDto: UpdateCountryReqDto, id: string) {
    const country = await this.findById(id);

    const newCountryData: CreateCountryReqDto = {
      name: country.name,
    };

    if (file) {
      const key = getKeyS3Helper(country.flag);
      await this.s3Service.delete(key);
      const flag = await this.s3Service.create(file, this.path);
      const updatedObj = { flag };
      Object.assign(newCountryData, updatedObj);
    }

    const isEmptyBody = isEmpty(updateCountryDto);
    if (!isEmptyBody) Object.assign(newCountryData, updateCountryDto);

    await this.countryRepository.updateCountry(id, updateCountryDto, newCountryData);

    return { success: true };
  }

  async delete(id: string) {
    const country = await this.findById(id);

    if (country.flag) {
      const key = getKeyS3Helper(country.flag);
      await this.s3Service.delete(key);
    }

    await this.countryRepository.findByIdAndRemove(id);

    const restWorld = await this.countryRepository.findOne({ country: { $regex: /^rest world$/i } });

    const countryId = restWorld ? restWorld._id : null;
    await this.realPlayerRepository.updateMany({ countryId: toId(id) }, { $set: { countryId } });
    await this.leagueRepository.updateMany({ countryId: toId(id) }, { $set: { countryId } });

    return { success: true };
  }
}
