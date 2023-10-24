import { Module } from '@nestjs/common';
import { JwtModule } from 'src/services/jwt/jwt.module';
import { AuctionRepositoryModule } from 'src/services/repositories/auction/auction-repository.module';
import { RealPlayerRepositoryModule } from 'src/services/repositories/real-player/real-player-repository.module';
import { UserRepositoryModule } from 'src/services/repositories/user/user-repository.module';
import { UserTeamRepositoryModule } from 'src/services/repositories/user-team/user-team-repository.module';

import { UserModule } from '../user/user.module';
import { AuctionController } from './auction.controller';
import { AuctionService } from './auction.service';

@Module({
  imports: [
    RealPlayerRepositoryModule,
    UserTeamRepositoryModule,
    AuctionRepositoryModule,
    UserRepositoryModule,
    UserModule,
    JwtModule,
  ],
  controllers: [AuctionController],
  providers: [AuctionService],
  exports: [AuctionService],
})
export class AuctionModule {}
