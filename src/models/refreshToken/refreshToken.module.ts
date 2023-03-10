import { Module } from '@nestjs/common';
import { RefreshTokenController } from './refreshToken.controller';
import { JwtModule } from '../jwt/jwt.module';
import { RefreshTokenService } from './refreshToken.service';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../user/entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule,
  ],
  controllers: [RefreshTokenController],
  providers: [RefreshTokenService, ConfigService],
})
export class RefreshTokenModule {}
