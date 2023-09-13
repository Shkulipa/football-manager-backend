import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';

import { EPacksTypes } from '../constants/packs-type.enum';

export class OpenPacksReqDto {
  @ApiProperty({ required: true, enum: EPacksTypes, enumName: 'EPacksTypes' })
  @IsEnum(EPacksTypes)
  pack: EPacksTypes;
}
