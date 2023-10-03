import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from 'src/services/jwt/jwt.module';
import { S3Module } from 'src/services/s3/s3.module';

import { CountryModule } from '../country/country.module';
import { Country, CountrySchema } from '../country/entities/country.entity';
import { RealTeamModule } from '../real-team/real-team.module';
import { UserModule } from '../user/user.module';
import { League, LeagueSchema } from './entities/league.entity';
import { LeagueController } from './league.controller';
import { LeagueRepository } from './league.repository';
import { LeagueService } from './league.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: League.name, schema: LeagueSchema },
      { name: Country.name, schema: CountrySchema },
    ]),
    S3Module,
    JwtModule,
    UserModule,
    forwardRef(() => CountryModule),
    forwardRef(() => RealTeamModule),
  ],
  controllers: [LeagueController],
  providers: [LeagueService, LeagueRepository],
  exports: [LeagueService, LeagueRepository],
})
export class LeagueModule {}
