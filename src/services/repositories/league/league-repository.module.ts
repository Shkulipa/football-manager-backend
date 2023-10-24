import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { League, LeagueSchema } from './entities/league.entity';
import { LeagueRepository } from './league.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: League.name, schema: LeagueSchema }])],
  providers: [LeagueRepository],
  exports: [LeagueRepository],
})
export class LeagueRepositoryModule {}
