import { ApiProperty, PickType } from '@nestjs/swagger';
import { AuctionDbDto } from 'src/services/repositories/auction/dto/auction.db.dto';
import { RealPlayerDbDto } from 'src/services/repositories/real-player/dto/real-player.db.dto';

export class ILotPlayer extends PickType(RealPlayerDbDto, ['_id']) {
  @ApiProperty({ type: String })
  clubName: string;

  @ApiProperty({ type: String })
  logoClub: string;
}

export class ILot extends PickType(AuctionDbDto, ['_id', 'price']) {
  @ApiProperty({ type: ILotPlayer })
  player: ILotPlayer;

  @ApiProperty({ type: String })
  userId: string;

  @ApiProperty({ type: String })
  createdAt: string;
}
