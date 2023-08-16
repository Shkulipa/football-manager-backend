import { PartialType } from '@nestjs/mapped-types';
import { IsOptional } from 'class-validator';

import { CreateRealTeamReqDto } from './create-real-team-req.dto';

export class UpdateRealTeamReqDto extends PartialType(CreateRealTeamReqDto) {
  @IsOptional()
  readonly clubName: string;

  @IsOptional()
  readonly leagueId: string;
}
