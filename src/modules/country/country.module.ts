import { forwardRef } from '@nestjs/common';
import { Module } from '@nestjs/common/decorators/modules/module.decorator';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { JwtModule } from 'src/services/jwt/jwt.module';
import { S3Module } from 'src/services/s3/s3.module';

import { LeagueModule } from '../league/league.module';
import { RealPlayerModule } from '../real-player/real-player.module';
import { UserModule } from '../user/user.module';
import { CountryController } from './country.controller';
import { CountryRepository } from './country.repository';
import { CountryService } from './country.service';
import { Country, CountrySchema } from './entities/country.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Country.name, schema: CountrySchema }]),
    S3Module,
    JwtModule,
    UserModule,
    forwardRef(() => LeagueModule),
    forwardRef(() => RealPlayerModule),
  ],
  controllers: [CountryController],
  providers: [CountryService, CountryRepository],
  exports: [CountryService, CountryRepository],
})
export class CountryModule {}
