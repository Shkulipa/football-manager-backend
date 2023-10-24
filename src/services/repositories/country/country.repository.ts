import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isEmpty } from 'lodash';
import { Model } from 'mongoose';
import { toId } from 'src/common/helpers/transform.helper';
import { BaseMongoRepository } from 'src/database/base-repository/base-mongo.repository';
import { CreateCountryReqDto } from 'src/modules/country/dto/create-country-req.dto';
import { UpdateCountryReqDto } from 'src/modules/country/dto/update-country-req.dto';

import { Country, CountryDocument } from './entities/country.entity';

@Injectable()
export class CountryRepository extends BaseMongoRepository<CountryDocument> {
  protected readonly logger = new Logger(CountryRepository.name);

  constructor(
    @InjectModel(Country.name)
    private readonly countryModel: Model<CountryDocument>,
  ) {
    super(countryModel, 'Country');
  }

  async createCountry(urlFile: string, createCountryReqDto: CreateCountryReqDto) {
    const newCountryData = {
      name: createCountryReqDto.name,
      flag: urlFile,
    };
    const newCountry = await this.countryModel.create(newCountryData);

    const res = {
      _id: newCountry._id,
      ...newCountryData,
    };

    return res;
  }

  async updateCountry(id: string, updateCountryDto: UpdateCountryReqDto, newCountryData: CreateCountryReqDto) {
    const isEmptyBody = isEmpty(updateCountryDto);
    if (!isEmptyBody) Object.assign(newCountryData, updateCountryDto);

    // https://mongoosejs.com/docs/tutorials/findoneandupdate.html
    const updatedCountry = await this.findOneAndUpdate(
      { _id: toId(id) },
      {
        $set: newCountryData,
      },
      {
        new: true,
      },
    );

    return updatedCountry;
  }
}
