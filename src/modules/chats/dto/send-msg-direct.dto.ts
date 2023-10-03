import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class SendMsgDirectReqDto {
  @ApiProperty({ required: true, type: String })
  @IsString()
  @IsNotEmpty()
  userSocketId: string;

  @ApiProperty({ required: true, type: String })
  @IsString()
  @IsNotEmpty()
  @MaxLength(250)
  msg: string;
}
