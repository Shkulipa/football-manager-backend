import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';
import { Types } from 'mongoose';

export class AuctionDbDto {
  @ApiProperty({ required: true, type: String })
  @IsMongoId()
  @IsString()
  @IsNotEmpty()
  _id: Types.ObjectId;

  @ApiProperty({ required: true, type: String })
  @IsMongoId()
  @IsString()
  @IsNotEmpty()
  playerId: string | Types.ObjectId;

  @ApiProperty({ required: true, type: Number })
  @IsNumber()
  @Min(10)
  @IsNotEmpty()
  price: number;
}
