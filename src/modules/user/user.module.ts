import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EmailModule } from 'src/services/mailer/email.module';
import { ActivationRepositoryModule } from 'src/services/repositories/activation/activation-repository.module';
import { UserRepositoryModule } from 'src/services/repositories/user/user-repository.module';

import { ActivationModule } from '../activation/activation.module';
import { JwtModule } from './../../services/jwt/jwt.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [UserRepositoryModule, JwtModule, EmailModule, ActivationModule, ActivationRepositoryModule],
  controllers: [UserController],
  providers: [UserService, ConfigService],
  exports: [UserService],
})
export class UserModule {}
