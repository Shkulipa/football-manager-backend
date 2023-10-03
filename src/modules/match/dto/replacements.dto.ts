import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsString } from 'class-validator';

export class ReplacementsDto {
  @ApiProperty({ required: true, type: String })
  @IsString()
  @IsMongoId()
  on: string;

  @ApiProperty({ required: true, type: String })
  @IsString()
  @IsMongoId()
  off: string;
}
