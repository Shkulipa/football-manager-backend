import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId } from 'class-validator';

export class CommonPathReqDto {
  /** id */
  @ApiProperty({ required: true, type: String })
  @IsMongoId()
  id: string;
}
