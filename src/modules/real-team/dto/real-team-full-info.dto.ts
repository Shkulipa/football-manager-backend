import { ApiProperty, PickType } from '@nestjs/swagger';
import { GetLeagueByIdResDto } from 'src/modules/league/dto/get-league-by-id-res.dto';
import { RealPlayerFullInfoDto } from 'src/modules/real-player/dto/real-player-full-info.dto';

import { TSquadRealTeamFullInfo } from '../interfaces/squad.interface';
import { PropertiesMainSquadDto } from './properties-main-squad.dto';
import { RealTeamDbDto } from './real-team.db.dto';

export class RealTeamFullInfoDto extends PickType(RealTeamDbDto, ['_id', 'skills', 'clubName', 'logoClub']) {
  @ApiProperty({ required: true, type: GetLeagueByIdResDto })
  league: GetLeagueByIdResDto;

  @ApiProperty({ required: true, type: PropertiesMainSquadDto })
  main: TSquadRealTeamFullInfo;

  @ApiProperty({ required: true, type: [RealPlayerFullInfoDto] })
  bench: RealPlayerFullInfoDto[];
}
