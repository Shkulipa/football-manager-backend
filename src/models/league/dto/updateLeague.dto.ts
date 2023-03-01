import { IsOptional, IsString, Validate } from 'class-validator';
import { IsObjectIdValidation } from 'src/common/validations/isObjectId.validation';

export class UpdateLeagueDto {
  @IsOptional()
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsString()
  @Validate(IsObjectIdValidation)
  readonly countryId: string;
}
