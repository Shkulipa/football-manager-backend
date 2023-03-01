import { Module } from '@nestjs/common';
import { RealTeamService } from './realTeam.service';
import { RealTeamController } from './realTeam.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { S3Module } from '../s3/s3.module';
import { RealTeam, RealTeamSchema } from './entities/realTeam.entity';
import { League, LeagueSchema } from '../league/entities/league.entity';
import { LeagueModule } from '../league/league.module';
import { JwtModule } from '../jwt/jwt.module';
import { UserModule } from '../user/user.module';

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
