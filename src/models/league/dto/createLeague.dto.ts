import { IsNotEmpty, IsString, Validate } from 'class-validator';
import { IsObjectIdValidation } from 'src/common/validations/isObjectId.validation';

export class CreateLeagueDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @Validate(IsObjectIdValidation)
  readonly countryId: string;
}
