import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  ArrayMaxSize,
  IsArray,
  IsMongoId,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Document, Types } from 'mongoose';
import Trim from 'src/common/decorators/trim.decorator';
import { IsValidPlayerRole } from 'src/modules/real-team/decoratores/player-role.decorator';
import { SkillsDto } from 'src/modules/real-team/dto/skills.dto';
import { TSquad } from 'src/modules/real-team/interfaces/squad.interface';

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

  @ApiProperty({ required: true, type: String, maxLength: 50, minLength: 4 })
  @MaxLength(50)
  @MinLength(3)
  @IsString()
  @IsNotEmpty()
  @Trim()
  @Matches(/^[a-zA-Z0-9\s]*$/, { message: 'clubName should only contain letters or digits' })
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
  main?: TSquad;

  @ApiProperty({ isArray: true, type: String })
  @IsOptional()
  @IsArray()
  @ArrayMaxSize(7)
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
