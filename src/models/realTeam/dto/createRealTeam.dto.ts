import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class CreateRealTeamDto {
  @IsNotEmpty()
  @IsString()
  readonly clubName: string;

  @IsMongoId()
  readonly leagueId: string;
}
