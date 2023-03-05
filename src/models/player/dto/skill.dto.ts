import { IsNumber, Max, Min } from 'class-validator';

const max = 100;
const min = 1;

export class SkillDto {
  @IsNumber()
  @Max(max)
  @Min(min)
  passing: number;

  @IsNumber()
  @Max(max)
  @Min(min)
  shooting: number;

  @IsNumber()
  @Max(max)
  @Min(min)
  saving: number;

  @IsNumber()
  @Max(max)
  @Min(min)
  tackling: number;

  @IsNumber()
  @Max(max)
  @Min(min)
  agility: number;

  @IsNumber()
  @Max(max)
  @Min(min)
  strength: number;

  @IsNumber()
  @Max(max)
  @Min(min)
  penalty_taking: number;

  @IsNumber()
  @Max(max)
  @Min(min)
  jumping: number;
}
