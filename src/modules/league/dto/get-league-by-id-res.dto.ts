import { ApiProperty, PickType } from '@nestjs/swagger';
import { CountryDbDto } from 'src/services/repositories/country/dto/country.db.dto';
import { LeagueDbDto } from 'src/services/repositories/league/dto/league.db.dto';

export class GetLeagueByIdResDto extends PickType(LeagueDbDto, ['_id', 'name', 'logoLeague']) {
  @ApiProperty({ required: true, type: CountryDbDto })
  country: CountryDbDto;
}
