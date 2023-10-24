import { ApiProperty, IntersectionType, OmitType, PickType } from '@nestjs/swagger';
import { CountryDbDto } from 'src/services/repositories/country/dto/country.db.dto';
import { LeagueDbDto } from 'src/services/repositories/league/dto/league.db.dto';

import { RealTeamShortInfoDto } from './real-team-short-info.dto';

class Team extends OmitType(RealTeamShortInfoDto, ['league']) {}

class LeagueDto extends IntersectionType(PickType(LeagueDbDto, ['_id', 'logoLeague', 'name'])) {
  @ApiProperty({ type: [Team] })
  teams: Team[];
}

/**
 * @info
 * need delete declaration from tsconfig.json
 * https://stackoverflow.com/questions/54525342/error-ts2742-the-inferred-type-of-username-cannot-be-named-without-a-referenc
 */
export class RealTeamShortResDto extends IntersectionType(CountryDbDto) {
  @ApiProperty({ type: [LeagueDto] })
  leagues: LeagueDto;
}
