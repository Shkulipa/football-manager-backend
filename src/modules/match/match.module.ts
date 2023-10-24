import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from 'src/services/jwt/jwt.module';
import { Redis } from 'src/services/redis/redis.config';
import { UserRepositoryModule } from 'src/services/repositories/user/user-repository.module';
import { UserTeamRepositoryModule } from 'src/services/repositories/user-team/user-team-repository.module';

import { UserModule } from '../user/user.module';
import { MatchController } from './match.controller';
import { MatchGateway } from './match.gateway';
import { MatchRepository } from './match.repository';
import { MatchService } from './match.service';

@Module({
  imports: [Redis, ConfigModule, UserModule, UserRepositoryModule, JwtModule, UserTeamRepositoryModule],
  controllers: [MatchController],
  providers: [MatchGateway, MatchRepository, MatchService],
  exports: [MatchRepository, MatchService],
})
export class MatchModule {}
