import { ApiProperty } from '@nestjs/swagger';
import { CommonCountItemsResDto } from 'src/common/dto/common-count-items-res.dto';

import { GetRealTeamResDto } from './get-real-team-res.dto';

export class GetRealTeamsResDto extends CommonCountItemsResDto {
  @ApiProperty({ required: true, type: [GetRealTeamResDto] })
  items: GetRealTeamResDto[];
}
