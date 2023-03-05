import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength } from 'class-validator';

export class LoginUserDto {
  @ApiProperty({
    type: String,
    minLength: 4,
  })
  @IsNotEmpty()
  @MinLength(4)
  readonly username: string;

  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  readonly password: string;
}
