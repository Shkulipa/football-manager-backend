import { Module } from '@nestjs/common';
import { LeagueService } from './league.service';
import { LeagueController } from './league.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { S3Module } from '../s3/s3.module';
import { League, LeagueSchema } from './entities/league.entity';
import { Country, CountrySchema } from '../country/entities/country.entity';
import { CountryModule } from '../country/country.module';
import { JwtModule } from '../jwt/jwt.module';
import { UserModule } from '../user/user.module';

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
