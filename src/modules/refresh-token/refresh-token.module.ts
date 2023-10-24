import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from 'src/common/decorators/user.decorator';
import { JwtModule } from 'src/services/jwt/jwt.module';
import { UserSchema } from 'src/services/repositories/user/entities/user.entity';

import { RefreshTokenController } from './refresh-token.controller';
import { RefreshTokenService } from './refresh-token.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), JwtModule],
  controllers: [RefreshTokenController],
  providers: [RefreshTokenService, ConfigService],
})
export class RefreshTokenModule {}
