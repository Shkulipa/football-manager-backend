import { ApiProperty } from '@nestjs/swagger';
import { IsEqual } from 'src/common/decorators/is-equal.decorator';
import Password from 'src/common/decorators/password.decorator';

export class UpdatePasswordReqDto {
  @ApiProperty({ required: true, type: String })
  @Password({ description: 'new password' })
  newPassword: string;

  @ApiProperty({ required: true, type: String })
  @Password({ description: 'confirm new password' })
  @IsEqual('newPassword', { message: 'New Passwords must match to field in Confirm Password' })
  confirmNewPassword: string;

  @ApiProperty({ required: true, type: String })
  @Password({ description: 'old password' })
  oldPassword: string;
}
