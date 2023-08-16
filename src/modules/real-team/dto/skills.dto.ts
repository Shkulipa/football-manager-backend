import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, Max, Min } from 'class-validator';

export class SkillsDto {
  @ApiProperty({ type: Number })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Max(100)
  readonly att: number;

  @ApiProperty({ type: Number })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Max(100)
  readonly mid: number;

  @ApiProperty({ type: Number })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Max(100)
  readonly def: number;
}
