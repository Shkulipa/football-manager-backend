import { PickType } from '@nestjs/swagger';
import { IsEqual } from 'src/common/decorators/is-equal.decorator';
import Password from 'src/common/decorators/password.decorator';
import { UsersDbDto } from 'src/modules/user/dto/user-db.dto';

export class CreateUserDto extends PickType(UsersDbDto, ['email', 'username', 'password']) {
  @Password({ description: 'confirm password' })
  @IsEqual('password', { message: 'Passwords must match to field in Confirm Password' })
  readonly confirmPassword: string;
}
