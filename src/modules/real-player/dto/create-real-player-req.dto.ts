import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsDefined,
  IsEnum,
  IsInt,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';
import Trim from 'src/common/decorators/trim.decorator';

import { ERolePlayer } from '../constants/rolePlayer.enum';
import { EPlayerPositionName } from './../../../services/repositories/real-player/constants/player-position-name.enum';
import { PlayerSkillsDto } from './../../../services/repositories/real-player/dto/player-skills.dto';

export class CreateRealPlayerReqDto extends PlayerSkillsDto {
  @ApiProperty({ required: true, type: String })
  @IsDefined()
  @IsNotEmpty()
  @IsMongoId()
  countryId: string;

  @ApiProperty({ required: true, type: String })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @Trim()
  name: string;

  @ApiProperty({ required: false, isArray: true, enum: EPlayerPositionName })
  @IsArray()
  @IsEnum(EPlayerPositionName, { each: true })
  @Transform(({ value }) => value.split(','))
  positions: EPlayerPositionName[];

  @ApiProperty({ required: true, type: Number })
  @IsDefined()
  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  @Max(99)
  @Min(1)
  number: number;

  @ApiProperty({ required: true, type: Number })
  @IsDefined()
  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  @Max(50)
  @Min(14)
  age: number;

  @ApiProperty({ type: String })
  @IsOptional()
  @IsMongoId()
  realTeamId: string;

  @ApiProperty({ required: false, isArray: true, enum: ERolePlayer })
  @IsOptional()
  @IsEnum(ERolePlayer)
  role: ERolePlayer;
}
