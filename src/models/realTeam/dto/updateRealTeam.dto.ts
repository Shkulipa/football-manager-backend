import { PartialType } from '@nestjs/mapped-types';
import { IsMongoId, IsOptional, IsString } from 'class-validator';
import { CreateRealTeamDto } from './createRealTeam.dto';

export class UpdateRealTeamDto extends PartialType(CreateRealTeamDto) {
  @IsOptional()
  @IsString()
  readonly clubName: string;

  @IsMongoId()
  readonly leagueId: string;
}
