import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CommonCountItemsResDto {
  @ApiProperty({ required: true, type: Number })
  @IsNumber()
  @IsNotEmpty()
  count: number;
}
