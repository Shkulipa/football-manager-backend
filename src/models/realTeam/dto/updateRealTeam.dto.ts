import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString, Validate } from 'class-validator';
import { IsObjectIdValidation } from 'src/common/validations/isObjectId.validation';
import { CreateRealTeamDto } from './createRealTeam.dto';

export class UpdateRealTeamDto extends PartialType(CreateRealTeamDto) {
  @IsOptional()
  @IsString()
  readonly clubName: string;

  @IsOptional()
  @IsString()
  @Validate(IsObjectIdValidation)
  readonly leagueId: string;
}
