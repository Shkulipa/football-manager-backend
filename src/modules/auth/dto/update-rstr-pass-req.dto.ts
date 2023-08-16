import { PickType } from '@nestjs/swagger';
import { IsEqual } from 'src/common/decorators/is-equal.decorator';
import Password from 'src/common/decorators/password.decorator';

import { RestorePasswordDbDto } from './restore-password-db.dto';

export class UpdateRstrPassReqDto extends PickType(RestorePasswordDbDto, ['activationId']) {
  @Password({ description: 'new password' })
  newPassword: string;

  @Password({ description: 'confirm password' })
  @IsEqual('newPassword', { message: 'New Password must match to field in Confirm Password' })
  confirmPassword: string;
}
