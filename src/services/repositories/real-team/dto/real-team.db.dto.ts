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
import { Types } from 'mongoose';
import { maxSizeBench } from 'src/common/constants/team';
import Trim from 'src/common/decorators/trim.decorator';
import { IsValidPlayerRole } from 'src/modules/real-team/decorators/player-role.decorator';
import { SkillsDto } from 'src/modules/real-team/dto/skills.dto';
import { TSquadId } from 'src/modules/real-team/interfaces/squad.interface';

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

  @ApiProperty({ required: true, type: String, maxLength: 50, minLength: 4 })
  @MaxLength(50)
  @MinLength(4)
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
  main?: TSquadId;

  @ApiProperty({ isArray: true, type: String })
  @IsOptional()
  @IsArray()
  @ArrayMaxSize(maxSizeBench)
  @Transform(({ value }) => JSON.parse(value))
  @IsMongoId({ each: true })
  bench?: (string | Types.ObjectId)[];
}
