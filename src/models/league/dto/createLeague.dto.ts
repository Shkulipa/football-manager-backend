import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class CreateLeagueDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsMongoId()
  readonly countryId: string;
}
