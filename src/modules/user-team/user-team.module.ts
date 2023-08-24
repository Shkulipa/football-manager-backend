import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from 'src/services/jwt/jwt.module';
import { S3Module } from 'src/services/s3/s3.module';

import { RealPlayerModule } from '../real-player/real-player.module';
import { UserModule } from '../user/user.module';
import { UserTeam, UserTeamSchema } from './entities/user-team.entity';
import { UserTeamController } from './user-team.controller';
import { UserTeamRepository } from './user-team.repository';
import { UserTeamService } from './user-team.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserTeam.name, schema: UserTeamSchema }]),
    JwtModule,
    S3Module,
    UserModule,
    RealPlayerModule,
  ],
  controllers: [UserTeamController],
  providers: [UserTeamService, UserTeamRepository],
  exports: [UserTeamService, UserTeamRepository],
})
export class UserTeamModule {}
