import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';
import { Types } from 'mongoose';
import Trim from 'src/common/decorators/trim.decorator';

export class CountryDbDto {
  @ApiProperty({ required: true, type: String })
  @IsMongoId()
  @IsString()
  @IsNotEmpty()
  _id: Types.ObjectId;

  @ApiProperty({ required: true, type: String })
  @IsString()
  @IsNotEmpty()
  @Trim()
  name: string;

  @ApiProperty({ required: true, type: String })
  @IsString()
  @IsNotEmpty()
  flag: string;
}
