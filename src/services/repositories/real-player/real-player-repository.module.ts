import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { RealPlayer, RealPlayerSchema } from './entities/real-player.entity';
import { RealPlayerRepository } from './real-player.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: RealPlayer.name, schema: RealPlayerSchema }])],
  providers: [RealPlayerRepository],
  exports: [RealPlayerRepository],
})
export class RealPlayerRepositoryModule {}
