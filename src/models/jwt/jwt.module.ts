import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '../jwt/jwt.service';

@Module({
  providers: [JwtService, ConfigService],
  exports: [JwtService],
})
export class JwtModule {}
