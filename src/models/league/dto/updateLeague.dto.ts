import { IsMongoId, IsOptional, IsString, Validate } from 'class-validator';

export class UpdateLeagueDto {
  @IsOptional()
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsMongoId()
  readonly countryId: string;
}
