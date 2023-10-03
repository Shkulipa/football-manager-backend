import { PickType } from '@nestjs/swagger';

import { AuctionDbDto } from './auction.db.dto';

export class DeleteLotReqDto extends PickType(AuctionDbDto, ['playerId']) {}
