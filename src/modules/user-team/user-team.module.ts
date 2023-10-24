import { Module } from '@nestjs/common';
import { JwtModule } from 'src/services/jwt/jwt.module';
import { RealPlayerRepositoryModule } from 'src/services/repositories/real-player/real-player-repository.module';
import { UserTeamRepositoryModule } from 'src/services/repositories/user-team/user-team-repository.module';
import { S3Module } from 'src/services/s3/s3.module';

import { UserModule } from '../user/user.module';
import { UserTeamController } from './user-team.controller';
import { UserTeamService } from './user-team.service';

@Module({
  imports: [RealPlayerRepositoryModule, UserTeamRepositoryModule, UserModule, JwtModule, S3Module],
  controllers: [UserTeamController],
  providers: [UserTeamService],
  exports: [UserTeamService],
})
export class UserTeamModule {}
