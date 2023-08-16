import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsDefined,
  IsEnum,
  IsInt,
  IsMongoId,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { Types } from 'mongoose';

import { EPlayerPositionName } from '../constants/player-position-name.enum';
import { ERolePlayer } from '../constants/rolePlayer.enum';
import Trim from './../../../common/decorators/trim.decorator';
import { PlayerSkillsDto } from './player-skills.dto';

export class RealPlayerDbDto {
  @ApiProperty({ required: true, type: String })
  @IsMongoId()
  @IsString()
  @IsNotEmpty()
  _id: Types.ObjectId;

  @ApiProperty({ required: true, type: String })
  @IsString()
  @IsNotEmpty()
  @IsMongoId()
  @Trim()
  countryId: string | Types.ObjectId;

  @ApiProperty({ required: false, isArray: true, enum: EPlayerPositionName })
  @IsArray()
  @IsEnum(EPlayerPositionName, { each: true })
  @Transform(({ value }) => value.split(','))
  positions: EPlayerPositionName[];

  @ApiProperty({ required: true, type: String })
  @IsString()
  @IsOptional()
  @IsMongoId()
  @Trim()
  realTeamId: string | Types.ObjectId;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @Trim()
  name: string;

  @ApiProperty({ required: true, type: String })
  photo: string;

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

  @ApiProperty({ required: true, type: PlayerSkillsDto })
  @IsObject()
  @IsNotEmpty()
  @Type(() => PlayerSkillsDto)
  skills: PlayerSkillsDto;

  @ApiProperty({ required: true, type: Number })
  rating: number;
}
