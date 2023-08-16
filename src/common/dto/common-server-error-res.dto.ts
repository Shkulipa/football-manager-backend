import { ApiProperty } from '@nestjs/swagger';

export class CommonServerErrorResDto {
  @ApiProperty({
    required: true,
    type: String,
    description: 'statusCode',
  })
  statusCode: string;

  @ApiProperty({
    required: true,
    type: String,
    description: 'message',
  })
  message: string;

  @ApiProperty({
    required: true,
    type: String,
    description: 'error',
  })
  error: string;
}
