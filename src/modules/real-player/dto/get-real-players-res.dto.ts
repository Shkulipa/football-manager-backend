import { ApiProperty } from '@nestjs/swagger';
import { CommonCountItemsResDto } from 'src/common/dto/common-count-items-res.dto';

import { GetRealPlayerResDto } from './get-real-player-res.dto';

export class GetRealPlayersResDto extends CommonCountItemsResDto {
  @ApiProperty({ required: true, type: [GetRealPlayerResDto] })
  items: GetRealPlayerResDto[];
}
