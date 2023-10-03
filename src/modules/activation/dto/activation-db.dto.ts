import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';
import { Document, Types } from 'mongoose';
import Trim from 'src/common/decorators/trim.decorator';

export class ActivationDbDto extends Document {
  @ApiProperty({ required: true, type: String })
  @IsMongoId()
  @IsString()
  @IsNotEmpty()
  _id: string | Types.ObjectId;

  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  @Trim()
  activationId: string;

  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  token: string;

  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  userId: string | Types.ObjectId;
}
