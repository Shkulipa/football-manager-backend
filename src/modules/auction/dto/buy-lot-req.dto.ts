import { PickType } from '@nestjs/swagger';

import { AuctionDbDto } from './auction.db.dto';

export class BuyLotReqDto extends PickType(AuctionDbDto, ['playerId']) {}
