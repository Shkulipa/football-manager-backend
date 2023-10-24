import { ApiProperty, PickType } from '@nestjs/swagger';
import { GetRealTeamResDto } from 'src/modules/real-team/dto/get-real-team-res.dto';
import { CountryDbDto } from 'src/services/repositories/country/dto/country.db.dto';
import { RealPlayerDbDto } from 'src/services/repositories/real-player/dto/real-player.db.dto';

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
