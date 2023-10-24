import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CountryRepository } from './country.repository';
import { Country, CountrySchema } from './entities/country.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Country.name, schema: CountrySchema }])],
  providers: [CountryRepository],
  exports: [CountryRepository],
})
export class CountryRepositoryModule {}
