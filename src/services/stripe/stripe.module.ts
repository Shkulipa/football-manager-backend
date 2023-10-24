import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { UserRepositoryModule } from '../repositories/user/user-repository.module';
import { StripeService } from './stripe.service';

@Module({
  imports: [UserRepositoryModule],
  providers: [StripeService, ConfigService],
  exports: [StripeService],
})
export class StripeModule {}
