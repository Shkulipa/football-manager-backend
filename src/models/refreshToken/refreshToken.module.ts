import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { JwtModule } from '../jwt/jwt.module';
import { User, UserSchema } from '../user/entities/user.entity';
import { RefreshTokenController } from './refreshToken.controller';
import { RefreshTokenService } from './refreshToken.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule,
  ],
  controllers: [RefreshTokenController],
  providers: [RefreshTokenService, ConfigService],
})
export class RefreshTokenModule {}
