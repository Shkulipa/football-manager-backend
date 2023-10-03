import { ConfigModule, ConfigService } from '@nestjs/config';
import { StripeAsyncOptions } from 'nestjs-stripe';
import { EEnvVariables } from 'src/common/constants/env-variables.enum';

export const stripeOptions: StripeAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => {
    const apiKey = configService.get<string>(EEnvVariables.STRIPE_API_KEY);
    return {
      apiKey,
      apiVersion: '2023-08-16',
    };
  },
  inject: [ConfigService],
};
