import { ApiProperty, PickType } from '@nestjs/swagger';

import { UserTeamDbDto } from './user-team-db.dto';

export class ITeam extends PickType(UserTeamDbDto, ['_id', 'clubName', 'logoClub', 'ratingElo']) {
  @ApiProperty({ required: true, type: Number })
  rank: number;
}

export class GetRating {
  @ApiProperty({ required: true, type: ITeam })
  items: ITeam[];

  @ApiProperty({ required: true, type: Number })
  count: number;
}

export class IGetUsersTeamsByRatingResDto {
  @ApiProperty({ required: true, type: GetRating })
  rating: GetRating;

  @ApiProperty({ required: true, type: ITeam })
  userTeam: ITeam;
}
