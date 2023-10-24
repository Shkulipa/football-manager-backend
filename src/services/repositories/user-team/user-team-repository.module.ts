import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserTeam, UserTeamSchema } from './entities/user-team.entity';
import { UserTeamRepository } from './user-team.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: UserTeam.name, schema: UserTeamSchema }])],
  providers: [UserTeamRepository],
  exports: [UserTeamRepository],
})
export class UserTeamRepositoryModule {}
