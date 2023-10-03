import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsDefined, IsMongoId, IsNotEmpty, IsString } from 'class-validator';
import Trim from 'src/common/decorators/trim.decorator';

import { RealTeamDbDto } from './real-team.db.dto';

export class CreateRealTeamReqDto extends PickType(RealTeamDbDto, ['main', 'bench']) {
  @ApiProperty({ required: true, type: String })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @Trim()
  readonly clubName: string;

  @ApiProperty({ required: true, type: String })
  @IsDefined()
  @IsMongoId()
  @IsNotEmpty()
  @IsString()
  @Trim()
  readonly leagueId: string;
}
