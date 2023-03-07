import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { JwtModule } from '../jwt/jwt.module';
import { League, LeagueSchema } from '../league/entities/league.entity';
import { LeagueModule } from '../league/league.module';
import { S3Module } from '../s3/s3.module';
import { UserModule } from '../user/user.module';
import { RealTeam, RealTeamSchema } from './entities/realTeam.entity';
import { RealTeamController } from './realTeam.controller';
import { RealTeamService } from './realTeam.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: League.name, schema: LeagueSchema },
      { name: RealTeam.name, schema: RealTeamSchema },
    ]),
    S3Module,
    LeagueModule,
    JwtModule,
    UserModule,
  ],
  controllers: [RealTeamController],
  providers: [RealTeamService],
})
export class RealTeamModule {}
