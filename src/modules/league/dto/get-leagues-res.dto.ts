import { ApiProperty } from '@nestjs/swagger';
import { CommonCountItemsResDto } from 'src/common/dto/common-count-items-res.dto';

import { GetLeagueByIdResDto } from './get-league-by-id-res.dto';

export class GetLeaguesResDto extends CommonCountItemsResDto {
  @ApiProperty({ required: true, type: [GetLeagueByIdResDto] })
  items: GetLeagueByIdResDto[];
}
