import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from 'src/services/jwt/jwt.module';
import { S3Module } from 'src/services/s3/s3.module';

import { LeagueModule } from '../league/league.module';
import { RealPlayerModule } from '../real-player/real-player.module';
import { UserModule } from '../user/user.module';
import { RealTeam, RealTeamSchema } from './entities/real-team.entity';
import { RealTeamController } from './real-team.controller';
import { RealTeamRepository } from './real-team.repository';
import { RealTeamService } from './real-team.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: RealTeam.name, schema: RealTeamSchema }]),
    S3Module,
    forwardRef(() => LeagueModule),
    JwtModule,
    UserModule,
    forwardRef(() => RealPlayerModule),
  ],
  controllers: [RealTeamController],
  providers: [RealTeamService, RealTeamRepository],
  exports: [RealTeamService, RealTeamRepository],
})
export class RealTeamModule {}
