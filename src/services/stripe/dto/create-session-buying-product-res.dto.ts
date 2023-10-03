import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import Trim from 'src/common/decorators/trim.decorator';

export class CreateSessionBuyingProductResDto {
  @ApiProperty({ required: true, type: String })
  @IsString()
  @IsNotEmpty()
  @Trim()
  url: string;
}
