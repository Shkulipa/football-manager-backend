import { ApiProperty, PickType } from '@nestjs/swagger';
import { CountryDbDto } from 'src/modules/country/dto/country.db.dto';

import { RealPlayerDbDto } from './real-player.db.dto';

export class RealPlayerFullInfoDto extends PickType(RealPlayerDbDto, [
  '_id',
  'name',
  'number',
  'age',
  'positions',
  'skills',
  'rating',
]) {
  @ApiProperty({ required: true, type: CountryDbDto })
  county: CountryDbDto;
}
