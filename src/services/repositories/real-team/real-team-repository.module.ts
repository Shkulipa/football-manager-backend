import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { RealPlayerRepositoryModule } from '../real-player/real-player-repository.module';
import { RealTeam, RealTeamSchema } from './entities/real-team.entity';
import { RealTeamRepository } from './real-team.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: RealTeam.name, schema: RealTeamSchema }]), RealPlayerRepositoryModule],
  providers: [RealTeamRepository],
  exports: [RealTeamRepository],
})
export class RealTeamRepositoryModule {}
