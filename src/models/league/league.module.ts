import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CountryModule } from '../country/country.module';
import { Country, CountrySchema } from '../country/entities/country.entity';
import { JwtModule } from '../jwt/jwt.module';
import { S3Module } from '../s3/s3.module';
import { UserModule } from '../user/user.module';
import { League, LeagueSchema } from './entities/league.entity';
import { LeagueController } from './league.controller';
import { LeagueService } from './league.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: League.name, schema: LeagueSchema },
      { name: Country.name, schema: CountrySchema },
    ]),
    S3Module,
    CountryModule,
    JwtModule,
    UserModule,
  ],
  controllers: [LeagueController],
  providers: [LeagueService],
  exports: [LeagueService],
})
export class LeagueModule {}
