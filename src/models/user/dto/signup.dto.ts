import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';
import { EUserRoles } from 'src/common/interfaces/userRoles.interfaces';

export class SignupDto {
  @ApiProperty({
    type: String,
  })
  email: string;

  @ApiProperty({
    type: String,
  })
  username: string;

  @ApiProperty({
    type: Boolean,
  })
  isConfirmEmail: boolean;

  @ApiProperty({
    enum: [EUserRoles],
  })
  roles: EUserRoles[];

  @ApiProperty({
    type: String,
  })
  _id: Types.ObjectId;
}
