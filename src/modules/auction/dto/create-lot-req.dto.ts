import { PickType } from '@nestjs/swagger';

import { AuctionDbDto } from './auction.db.dto';

export class CreateLotReqDto extends PickType(AuctionDbDto, ['playerId', 'price']) {}
