import { PickType } from '@nestjs/swagger';
import Token from 'src/common/decorators/token.decorator';
import { UsersDbDto } from 'src/services/repositories/user/dto/user-db.dto';
export class AuthLoginResDto extends PickType(UsersDbDto, ['_id', 'email', 'username', 'roles']) {
  @Token()
  accessToken: string;

  @Token()
  refreshToken: string;
}
