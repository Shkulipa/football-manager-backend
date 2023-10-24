import { Module } from '@nestjs/common';
import { JwtModule } from 'src/services/jwt/jwt.module';
import { LeagueRepositoryModule } from 'src/services/repositories/league/league-repository.module';
import { RealPlayerRepositoryModule } from 'src/services/repositories/real-player/real-player-repository.module';
import { RealTeamRepositoryModule } from 'src/services/repositories/real-team/real-team-repository.module';
import { S3Module } from 'src/services/s3/s3.module';

import { UserModule } from '../user/user.module';
import { RealTeamController } from './real-team.controller';
import { RealTeamService } from './real-team.service';

@Module({
  imports: [
    RealPlayerRepositoryModule,
    RealTeamRepositoryModule,
    LeagueRepositoryModule,
    S3Module,
    JwtModule,
    UserModule,
  ],
  controllers: [RealTeamController],
  providers: [RealTeamService],
  exports: [RealTeamService],
})
export class RealTeamModule {}
