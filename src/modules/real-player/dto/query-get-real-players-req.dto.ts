import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsArray, IsEnum, IsInt, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';
import { IsCheckGreaterThan } from 'src/common/decorators/is-check-greater-than.decorator';
import Trim from 'src/common/decorators/trim.decorator';
import { QueryDto } from 'src/common/dto/query.dto';
import { commonArrayNullIdValidator } from 'src/common/validators/common-array-null-id.validator';

import { maxSkillPlayer, minSkillPlayer } from '../constants/common-player-values';
import { EPlayerPositionName } from './../../../services/repositories/real-player/constants/player-position-name.enum';

export class QueryGetRealPlayersReqDto extends QueryDto {
  @ApiProperty({ type: String })
  @IsOptional()
  @IsString()
  @Trim()
  search: string;

  @ApiProperty({ required: false, isArray: true, enum: EPlayerPositionName })
  @IsArray()
  @IsOptional()
  @IsEnum(EPlayerPositionName, { each: true })
  @Transform(({ value }) => value.split(','))
  positions: EPlayerPositionName[];

  @ApiProperty({ required: false, isArray: true })
  @IsArray()
  @IsOptional()
  @Transform(commonArrayNullIdValidator)
  country: string[];

  @ApiProperty({ required: false, isArray: true })
  @IsOptional()
  @Transform(commonArrayNullIdValidator)
  team: string[];

  @ApiProperty({ required: true, type: Number })
  @IsOptional()
  @IsInt()
  @Min(14)
  @Max(60)
  @Type(() => Number)
  @IsCheckGreaterThan('ageFrom', 'ageTo')
  ageFrom: number;

  @ApiProperty({ required: true, type: Number })
  @IsOptional()
  @IsInt()
  @Min(14)
  @Max(60)
  @Type(() => Number)
  ageTo: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @IsOptional()
  @Min(0)
  @Max(5)
  @Type(() => Number)
  @IsCheckGreaterThan('ratingFrom', 'ratingTo')
  ratingFrom: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @IsOptional()
  @Min(0)
  @Max(5)
  @Type(() => Number)
  ratingTo: number;

  // skills
  // agility
  @ComposeSkillDecorators()
  @IsCheckGreaterThan('agilityFrom', 'agilityTo')
  agilityFrom: number;
  @ComposeSkillDecorators()
  agilityTo: number;

  // jumping
  @ComposeSkillDecorators()
  @IsCheckGreaterThan('jumpingFrom', 'jumpingTo')
  jumpingFrom: number;
  @ComposeSkillDecorators()
  jumpingTo: number;

  // passing
  @ComposeSkillDecorators()
  @IsCheckGreaterThan('passingFrom', 'passingTo')
  passingFrom: number;
  @ComposeSkillDecorators()
  passingTo: number;

  // penalty_taking
  @ComposeSkillDecorators()
  @IsCheckGreaterThan('penalty_takingFrom', 'penalty_takingTo')
  penaltyTakingFrom: number;
  @ComposeSkillDecorators()
  penaltyTakingTo: number;

  // saving
  @ComposeSkillDecorators()
  @IsCheckGreaterThan('savingFrom', 'psavingTo')
  savingFrom: number;
  @ComposeSkillDecorators()
  savingTo: number;

  // shooting
  @ComposeSkillDecorators()
  @IsCheckGreaterThan('shootingFrom', 'shootingTo')
  shootingFrom: number;
  @ComposeSkillDecorators()
  shootingTo: number;

  // tackling
  @ComposeSkillDecorators()
  @IsCheckGreaterThan('tacklingFrom', 'tacklingTo')
  tacklingFrom: number;
  @ComposeSkillDecorators()
  tacklingTo: number;

  // strength
  @ComposeSkillDecorators()
  @IsCheckGreaterThan('strengthFrom', 'strengthTo')
  strengthFrom: number;
  @ComposeSkillDecorators()
  strengthTo: number;
}

function ComposeSkillDecorators() {
  const decorators = [
    ApiProperty({ type: Number }),
    IsNumber(),
    IsOptional(),
    Min(minSkillPlayer),
    Max(maxSkillPlayer),
    Type(() => Number),
  ];
  return applyDecorators(...decorators);
}
