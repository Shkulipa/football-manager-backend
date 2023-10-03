import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDefined, IsInt, IsNotEmpty, Max, Min } from 'class-validator';

import { maxSkillPlayer, minSkillPlayer } from '../constants/common-player-values';

export class PlayerSkillsDto {
  @ApiProperty({ type: Number })
  @IsDefined()
  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  @Max(maxSkillPlayer)
  @Min(minSkillPlayer)
  passing: number;

  @ApiProperty({ type: Number })
  @IsDefined()
  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  @Max(maxSkillPlayer)
  @Min(minSkillPlayer)
  shooting: number;

  @ApiProperty({ type: Number })
  @IsDefined()
  @IsInt()
  @Type(() => Number)
  @Max(maxSkillPlayer)
  @Min(minSkillPlayer)
  saving: number;

  @ApiProperty({ type: Number })
  @IsDefined()
  @IsInt()
  @Type(() => Number)
  @Max(maxSkillPlayer)
  @Min(minSkillPlayer)
  tackling: number;

  @ApiProperty({ type: Number })
  @IsDefined()
  @IsInt()
  @Type(() => Number)
  @Max(maxSkillPlayer)
  @Min(minSkillPlayer)
  agility: number;

  @ApiProperty({ type: Number })
  @IsDefined()
  @IsInt()
  @Type(() => Number)
  @Max(maxSkillPlayer)
  @Min(minSkillPlayer)
  strength: number;

  @ApiProperty({ type: Number })
  @IsDefined()
  @IsInt()
  @Type(() => Number)
  @Max(maxSkillPlayer)
  @Min(minSkillPlayer)
  penalty_taking: number;

  @ApiProperty({ type: Number })
  @IsDefined()
  @IsInt()
  @Type(() => Number)
  @Max(maxSkillPlayer)
  @Min(minSkillPlayer)
  jumping: number;
}
