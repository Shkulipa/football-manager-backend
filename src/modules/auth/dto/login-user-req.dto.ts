import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsString, Matches } from 'class-validator';

import { CreateUserDto } from './create-user.dto';

export class LoginUserReqDto extends PickType(CreateUserDto, ['password']) {
  @ApiProperty({ required: true, type: String })
  @IsString()
  @Matches(/^[a-zA-Z0-9@.]*$/, { message: 'Username should only contain letters or digits' })
  username: string;
}
