import { PickType } from '@nestjs/swagger';

import { CountryDbDto } from './country.db.dto';

export class CreateCountryReqDto extends PickType(CountryDbDto, ['name']) {}
