import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsInt } from 'class-validator';

export class PacksDto {
  @ApiProperty({ required: true, type: Number })
  @IsDefined()
  @IsInt()
  bronze: number;

  @ApiProperty({ required: true, type: Number })
  @IsDefined()
  @IsInt()
  silver: number;

  @ApiProperty({ required: true, type: Number })
  @IsDefined()
  @IsInt()
  gold: number;
}
