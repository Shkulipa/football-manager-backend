import { IsNotEmpty } from 'class-validator';

export class CreateFlagDto {
  @IsNotEmpty()
  readonly name: string;
}
