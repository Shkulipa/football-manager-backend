import { PickType } from '@nestjs/swagger';

import { CreateCountryReqDto } from './create-country-req.dto';

export class UpdateCountryReqDto extends PickType(CreateCountryReqDto, ['country']) {}
