import { PickType } from '@nestjs/swagger';
import { AuctionDbDto } from 'src/services/repositories/auction/dto/auction.db.dto';

export class DeleteLotReqDto extends PickType(AuctionDbDto, ['playerId']) {}
