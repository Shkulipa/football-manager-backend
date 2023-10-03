import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from 'src/services/jwt/jwt.module';
import { Redis } from 'src/services/redis/redis.config';

import { UserModule } from '../user/user.module';
import { UserTeamModule } from '../user-team/user-team.module';
import { MatchController } from './match.controller';
import { MatchGateway } from './match.gateway';
import { MatchRepository } from './match.repository';
import { MatchService } from './match.service';

@Module({
  imports: [Redis, ConfigModule, UserModule, JwtModule, UserTeamModule],
  controllers: [MatchController],
  providers: [MatchGateway, MatchRepository, MatchService],
  exports: [MatchRepository, MatchService],
})
export class MatchModule {}
