import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  ArrayMaxSize,
  IsArray,
  IsMongoId,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Document, Types } from 'mongoose';
import { maxSizeBench } from 'src/common/constants/team';
import Trim from 'src/common/decorators/trim.decorator';
import { IsValidPlayerRole } from 'src/modules/real-team/decorators/player-role.decorator';
import { SkillsDto } from 'src/modules/real-team/dto/skills.dto';
import { TSquadId } from 'src/modules/real-team/interfaces/squad.interface';

export class UserTeamDbDto extends Document {
  @ApiProperty({ required: true, type: String })
  @IsMongoId()
  @IsString()
  @IsNotEmpty()
  _id: string | Types.ObjectId;

  @ApiProperty({ required: true, type: String })
  @IsMongoId()
  @IsString()
  @IsNotEmpty()
  userId: string | Types.ObjectId;

  @ApiProperty({ required: true, type: String })
  @IsString()
  @IsNotEmpty()
  logoClub: string;

  @ApiProperty({ required: true, type: Number })
  @IsNumber()
  @IsNotEmpty()
  ratingElo: number;

  @ApiProperty({ required: true, type: String, maxLength: 50, minLength: 4 })
  @MaxLength(50)
  @MinLength(3)
  @IsString()
  @IsNotEmpty()
  @Trim()
  @Matches(/^[a-zA-Z0-9\s]*$/, { message: 'clubName should only contain letters, digits, or spaces' })
  clubName: string;

  @ApiProperty({ required: true, type: SkillsDto })
  @Type(() => SkillsDto)
  @IsNotEmptyObject()
  @ValidateNested({ each: true })
  skills: SkillsDto;

  // squads
  @ApiProperty({ type: Object })
  @IsOptional()
  @Transform(({ value }) => JSON.parse(value))
  @IsObject()
  @IsValidPlayerRole()
  main?: TSquadId;

  @ApiProperty({ isArray: true, type: String })
  @IsOptional()
  @IsArray()
  @ArrayMaxSize(maxSizeBench)
  @Transform(({ value }) => JSON.parse(value))
  @IsMongoId({ each: true })
  bench?: (string | Types.ObjectId)[];

  @ApiProperty({ isArray: true, type: String })
  @IsOptional()
  @IsArray()
  @Transform(({ value }) => JSON.parse(value))
  @IsMongoId({ each: true })
  reserve?: (string | Types.ObjectId)[];

  @ApiProperty({ required: true, type: String })
  @IsString()
  @IsNotEmpty()
  createdAt: Date;
}
