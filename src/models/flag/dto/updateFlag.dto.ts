import { IsOptional } from 'class-validator';

export class UpdateFlagDto {
  @IsOptional()
  readonly name: string;
}
