import { ApiProperty, PickType } from '@nestjs/swagger';
import { CountryDbDto } from 'src/modules/country/dto/country.db.dto';
import { GetRealTeamResDto } from 'src/modules/real-team/dto/get-real-team-res.dto';

import { RealPlayerDbDto } from './real-player.db.dto';

export class GetRealPlayerResDto extends PickType(RealPlayerDbDto, [
  '_id',
  'name',
  'number',
  'photo',
  'rating',
  'skills',
  'age',
]) {
  @ApiProperty({ required: true, type: CountryDbDto })
  country: CountryDbDto;

  @ApiProperty({ required: true, type: PickType(GetRealTeamResDto, ['_id', 'clubName', 'logoClub']) })
  realTeam: GetRealTeamResDto;
}
