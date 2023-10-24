import { PickType } from '@nestjs/swagger';
import { AuctionDbDto } from 'src/services/repositories/auction/dto/auction.db.dto';

export class BuyLotReqDto extends PickType(AuctionDbDto, ['playerId']) {}
