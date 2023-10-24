import { Module } from '@nestjs/common/decorators/modules/module.decorator';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from 'src/services/jwt/jwt.module';
import { EmailModule } from 'src/services/mailer/email.module';
import { ActivationRepositoryModule } from 'src/services/repositories/activation/activation-repository.module';
import { UserRepositoryModule } from 'src/services/repositories/user/user-repository.module';

import { ActivationController } from './activation.controller';
import { ActivationService } from './activation.service';

@Module({
  imports: [ActivationRepositoryModule, UserRepositoryModule, JwtModule, EmailModule],
  controllers: [ActivationController],
  providers: [ActivationService, ConfigService],
  exports: [ActivationService],
})
export class ActivationModule {}
