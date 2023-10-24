import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { RealPlayerRepositoryModule } from '../real-player/real-player-repository.module';
import { AuctionRepository } from './auction.repository';
import { Auction, AuctionSchema } from './entity/auction.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Auction.name, schema: AuctionSchema }]), RealPlayerRepositoryModule],
  providers: [AuctionRepository],
  exports: [AuctionRepository],
})
export class AuctionRepositoryModule {}
