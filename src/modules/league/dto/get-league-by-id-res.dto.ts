import { ApiProperty, PickType } from '@nestjs/swagger';
import { CountryDbDto } from 'src/modules/country/dto/country.db.dto';

import { LeagueDbDto } from './league.db.dto';

export class GetLeagueByIdResDto extends PickType(LeagueDbDto, ['_id', 'name', 'logoLeague']) {
  @ApiProperty({ required: true, type: CountryDbDto })
  country: CountryDbDto;
}
