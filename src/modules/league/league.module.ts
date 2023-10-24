import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from 'src/services/jwt/jwt.module';
import { CountryRepositoryModule } from 'src/services/repositories/country/country-repository.module';
import { LeagueRepositoryModule } from 'src/services/repositories/league/league-repository.module';
import { RealTeamRepositoryModule } from 'src/services/repositories/real-team/real-team-repository.module';
import { S3Module } from 'src/services/s3/s3.module';

import { UserModule } from '../user/user.module';
import { LeagueController } from './league.controller';
import { LeagueService } from './league.service';

@Module({
  imports: [LeagueRepositoryModule, RealTeamRepositoryModule, CountryRepositoryModule, S3Module, JwtModule, UserModule],
  controllers: [LeagueController],
  providers: [LeagueService],
  exports: [LeagueService],
})
export class LeagueModule {}
