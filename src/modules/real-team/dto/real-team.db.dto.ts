import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsMongoId,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Types } from 'mongoose';
import Trim from 'src/common/decorators/trim.decorator';

import { IsValidPlayerRole } from '../decoratores/player-role.decorator';
import { TSquad } from '../interfaces/squad.interface';
import { SkillsDto } from './skills.dto';

export class RealTeamDbDto {
  @ApiProperty({ required: true, type: String })
  @IsMongoId()
  @IsString()
  @IsNotEmpty()
  _id: Types.ObjectId;

  @ApiProperty({ required: true, type: String })
  @IsString()
  @IsNotEmpty()
  leagueId: string | Types.ObjectId;

  @ApiProperty({ required: true, type: String })
  @IsString()
  @IsNotEmpty()
  logoClub: string;

  @ApiProperty({ required: true, type: String })
  @IsString()
  @IsNotEmpty()
  @Trim()
  clubName: string;

  @ApiProperty({ required: true, type: SkillsDto })
  @Type(() => SkillsDto)
  @IsNotEmptyObject()
  @ValidateNested({ each: true })
  skills: SkillsDto;

  // squads
  @ApiProperty({ required: true, type: Object })
  @IsOptional()
  @Transform(({ value }) => JSON.parse(value))
  @IsObject()
  @IsValidPlayerRole()
  main?: TSquad;

  @ApiProperty({ required: true, isArray: true, type: String })
  @IsOptional()
  @IsArray()
  @Transform(({ value }) => JSON.parse(value))
  @IsMongoId({ each: true })
  bench?: (string | Types.ObjectId)[];
}
