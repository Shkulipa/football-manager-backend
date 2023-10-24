import { PickType } from '@nestjs/swagger';
import { CountryDbDto } from 'src/services/repositories/country/dto/country.db.dto';

export class CreateCountryReqDto extends PickType(CountryDbDto, ['name']) {}
