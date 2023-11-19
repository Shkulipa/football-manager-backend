import { ApiProperty, PickType } from '@nestjs/swagger';
import { CountryDbDto } from 'src/services/repositories/country/dto/country.db.dto';
import { RealPlayerDbDto } from 'src/services/repositories/real-player/dto/real-player.db.dto';

export class RealPlayerFullInfoDto extends PickType(RealPlayerDbDto, [
  '_id',
  'name',
  'number',
  'age',
  'positions',
  'skills',
  'rating',
  'photo',
]) {
  @ApiProperty({ required: true, type: CountryDbDto })
  county: CountryDbDto;
}
