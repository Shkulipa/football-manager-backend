import { ApiProperty } from '@nestjs/swagger';
import { CommonCountItemsResDto } from 'src/common/dto/common-count-items-res.dto';
import { CountryDbDto } from 'src/services/repositories/country/dto/country.db.dto';

export class GetCountriesResDto extends CommonCountItemsResDto {
  @ApiProperty({ required: true, type: [CountryDbDto] })
  items: CountryDbDto[];
}
