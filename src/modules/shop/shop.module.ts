import { Module } from '@nestjs/common';
import { JwtModule } from 'src/services/jwt/jwt.module';
import { StripeModule } from 'src/services/stripe/stripe.module';

import { UserModule } from '../user/user.module';
import { ShopController } from './shop.controller';

@Module({
  imports: [StripeModule, JwtModule, UserModule],
  controllers: [ShopController],
})
export class ShopModule {}
