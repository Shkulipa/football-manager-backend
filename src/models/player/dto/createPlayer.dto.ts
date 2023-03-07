import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsString,
  MaxLength,
  Validate,
  ValidateNested,
} from 'class-validator';

import { EPositionPlayer } from '../interfaces/positionPlayer.interfaces';
import { ERolePlayer } from '../interfaces/rolePlayer.interfaces';
import { ETypeCard } from '../interfaces/typeCard.interfaces';
import { Range } from './../validations/range.validation';
import { SkillDto } from './skill.dto';

export class CreatePlayerDto {
  @IsNotEmpty()
  @IsMongoId()
  readonly countryId: string;

  @IsString()
  @MaxLength(40)
  name: string;

  @IsNotEmpty()
  @Validate(Range, [1, 100])
  number: number;

  // https://stackoverflow.com/questions/60505649/forbid-specific-enum-value-for-dto-in-nestjs
  @IsEnum(EPositionPlayer)
  position: EPositionPlayer;

  @IsMongoId()
  realTeamId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  @Type(() => Number)
  currentPOS: [number, number];

  @IsEnum(ETypeCard)
  typeCard: ETypeCard;

  @IsEnum(ERolePlayer)
  role: ERolePlayer;

  @Type(() => SkillDto)
  skill: SkillDto;
}
