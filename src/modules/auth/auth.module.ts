import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from 'src/services/jwt/jwt.module';
import { ActivationRepositoryModule } from 'src/services/repositories/activation/activation-repository.module';
import { RestorePasswordRepositoryModule } from 'src/services/repositories/restore-password/restore-password-repository.module';
import { UserRepositoryModule } from 'src/services/repositories/user/user-repository.module';

import { EmailModule } from './../../services/mailer/email.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { FacebookStrategy } from './strategies/facebook.strategy';
import { GoogleStrategy } from './strategies/google.strategy';

@Module({
  imports: [
    ConfigModule,
    UserRepositoryModule,
    ActivationRepositoryModule,
    RestorePasswordRepositoryModule,
    JwtModule,
    EmailModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, FacebookStrategy, GoogleStrategy],
  exports: [AuthService],
})
export class AuthModule {}
