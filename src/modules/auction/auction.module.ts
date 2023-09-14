import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from 'src/services/jwt/jwt.module';

import { RealPlayerModule } from '../real-player/real-player.module';
import { UserModule } from '../user/user.module';
import { UserTeamModule } from '../user-team/user-team.module';
import { AuctionController } from './auction.controller';
import { AuctionRepository } from './auction.repository';
import { AuctionService } from './auction.service';
import { Auction, AuctionSchema } from './entity/auction.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Auction.name, schema: AuctionSchema }]),
    UserModule,
    UserTeamModule,
    RealPlayerModule,
    JwtModule,
  ],
  controllers: [AuctionController],
  providers: [AuctionService, AuctionRepository],
  exports: [AuctionService, AuctionRepository],
})
export class AuctionModule {}
