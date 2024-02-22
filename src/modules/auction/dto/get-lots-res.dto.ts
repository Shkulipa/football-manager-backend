import { ApiProperty } from '@nestjs/swagger';
import { CommonCountItemsResDto } from 'src/common/dto/common-count-items-res.dto';

import { ILot } from './lot.dto';

export class GetLotsResDto extends CommonCountItemsResDto {
  @ApiProperty({ required: true, type: [ILot] })
  items: ILot[];
}
