import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  readonly confirmPassword: string;
}
