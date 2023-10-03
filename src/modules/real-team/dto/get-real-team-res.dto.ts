import { ApiProperty, PickType } from '@nestjs/swagger';
import { GetLeagueByIdResDto } from 'src/modules/league/dto/get-league-by-id-res.dto';

import { RealTeamDbDto } from './real-team.db.dto';

export class GetRealTeamResDto extends PickType(RealTeamDbDto, ['_id', 'skills', 'clubName', 'logoClub']) {
  @ApiProperty({ required: true, type: GetLeagueByIdResDto })
  league: GetLeagueByIdResDto;
}
