import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsEnum,
  IsInt,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';
import { Document, Types } from 'mongoose';
import { EUserRoles } from 'src/common/constants/user-roles.enum';
import Password from 'src/common/decorators/password.decorator';
import Trim from 'src/common/decorators/trim.decorator';

export class UsersDbDto extends Document {
  @ApiProperty({ required: true, type: String })
  @IsMongoId()
  @IsString()
  @IsNotEmpty()
  _id: string | Types.ObjectId;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsNotEmpty()
  @IsEmail()
  @Trim()
  email: string;

  @ApiProperty({
    required: true,
    type: String,
    minLength: 4,
  })
  @IsNotEmpty()
  @IsString()
  @Trim()
  @MinLength(4)
  @Matches(/^[a-zA-Z0-9]*$/, { message: 'Username should only contain letters or digits' })
  username: string;

  @ApiProperty({ required: true, type: Boolean })
  @IsNotEmpty()
  @IsBoolean()
  isConfirmEmail: boolean;

  @ApiProperty({ required: true, type: String })
  @Password({ description: 'password' })
  password: string;

  @ApiProperty({ required: true, enum: [EUserRoles], enumName: 'EUserRoles' })
  @IsArray()
  @IsEnum(EUserRoles, { each: true })
  roles: EUserRoles[];

  @ApiProperty({ type: String })
  @IsOptional()
  @IsString()
  refreshToken?: string;

  @ApiProperty({ type: Number })
  @IsInt()
  ratingElo: number;

  @ApiProperty({ type: Number })
  @IsInt()
  money: number;

  @ApiProperty({ required: true, type: String })
  @IsString()
  @IsNotEmpty()
  createdAt: Date;

  @ApiProperty({ required: true, type: String })
  @IsString()
  @IsNotEmpty()
  updatedAt: Date;
}
