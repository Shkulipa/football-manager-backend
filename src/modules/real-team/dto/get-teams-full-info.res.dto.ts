import { ApiProperty } from '@nestjs/swagger';
import { CommonCountItemsResDto } from 'src/common/dto/common-count-items-res.dto';

import { RealTeamFullInfoDto } from './real-team-full-info.dto';

export class GetRealTeamsFullResDto extends CommonCountItemsResDto {
  @ApiProperty({ required: true, type: [RealTeamFullInfoDto] })
  items: RealTeamFullInfoDto[];
}
