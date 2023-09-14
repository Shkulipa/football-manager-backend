import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class SendMsgChatReqDto {
  @ApiProperty({ required: true, type: String })
  @IsString()
  @IsNotEmpty()
  chatId: string;

  @ApiProperty({ required: true, type: String })
  @IsString()
  @IsNotEmpty()
  @MaxLength(250)
  msg: string;
}
