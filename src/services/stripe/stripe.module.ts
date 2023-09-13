import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserModule } from 'src/modules/user/user.module';

import { StripeService } from './stripe.service';

@Module({
  imports: [UserModule],
  providers: [StripeService, ConfigService],
  exports: [StripeService],
})
export class StripeModule {}
