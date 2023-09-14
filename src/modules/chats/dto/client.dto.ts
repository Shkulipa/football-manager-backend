import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { IUserData } from 'src/common/interfaces/user-data.interfaces';

export class ClientDto extends PickType(IUserData, ['_id', 'username']) {
  @ApiProperty({ required: true, type: String })
  @IsString()
  @IsNotEmpty()
  socketId: string;
}
