import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from 'src/services/jwt/jwt.module';

import { ActivationModule } from '../activation/activation.module';
import { UserModule } from '../user/user.module';
import { EmailModule } from './../../services/mailer/email.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { RestorePassword, RestorePasswordSchema } from './entity/restore-password.entity';
import { RestorePasswordRepository } from './restore-password.repository';
import { FacebookStrategy } from './strategies/facebook.strategy';
import { GoogleStrategy } from './strategies/google.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: RestorePassword.name, schema: RestorePasswordSchema }]),
    ConfigModule,
    UserModule,
    ActivationModule,
    JwtModule,
    EmailModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, RestorePasswordRepository, FacebookStrategy, GoogleStrategy],
  exports: [AuthService, RestorePasswordRepository],
})
export class AuthModule {}
