import { IsNotEmpty, IsString, Validate } from 'class-validator';
import { IsObjectIdValidation } from 'src/common/validations/isObjectId.validation';

export class CreateRealTeamDto {
  @IsNotEmpty()
  @IsString()
  readonly clubName: string;

  @IsNotEmpty()
  @IsString()
  @Validate(IsObjectIdValidation)
  readonly leagueId: string;
}
