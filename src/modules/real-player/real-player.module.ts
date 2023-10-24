import { Module } from '@nestjs/common';
import { JwtModule } from 'src/services/jwt/jwt.module';
import { CountryRepositoryModule } from 'src/services/repositories/country/country-repository.module';
import { RealPlayerRepositoryModule } from 'src/services/repositories/real-player/real-player-repository.module';
import { RealTeamRepositoryModule } from 'src/services/repositories/real-team/real-team-repository.module';
import { S3Module } from 'src/services/s3/s3.module';

import { UserModule } from '../user/user.module';
import { RealPlayerController } from './real-player.controller';
import { RealPlayerService } from './real-player.service';

@Module({
  imports: [
    RealPlayerRepositoryModule,
    RealTeamRepositoryModule,
    CountryRepositoryModule,
    S3Module,
    JwtModule,
    UserModule,
  ],
  controllers: [RealPlayerController],
  providers: [RealPlayerService],
  exports: [RealPlayerService],
})
export class RealPlayerModule {}
