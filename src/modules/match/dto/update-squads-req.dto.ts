import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ArrayMaxSize, IsArray, IsObject, MaxLength, ValidateNested } from 'class-validator';
import { IsValidPlayerRole } from 'src/modules/real-team/decorators/player-role.decorator';
import { TSquad } from 'src/modules/real-team/interfaces/squad.interface';

import { ReplacementsDto } from './replacements.dto';

export class UpdateSquadsReqDto {
  @ApiProperty({ required: true, type: Object })
  @IsObject()
  @IsValidPlayerRole()
  main: TSquad;

  @ApiProperty({ isArray: true, type: ReplacementsDto })
  @IsArray()
  @ArrayMaxSize(3)
  @Type(() => ReplacementsDto)
  @ValidateNested({ each: true })
  replacements: ReplacementsDto[];
}