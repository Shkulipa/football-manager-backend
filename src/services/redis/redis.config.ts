import { Logger } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EEnvVariables } from 'src/common/constants/env-variables.enum';

import { RedisModule } from './redis.module';

export const Redis = RedisModule.registerAsync({
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => {
    const logger = new Logger('RedisModule');

    return {
      connectionOptions: {
        host: configService.get(EEnvVariables.REDIS_HOST),
        port: configService.get(EEnvVariables.REDIS_PORT),
        username: configService.get(EEnvVariables.REDIS_USERNAME) || '',
        password: configService.get(EEnvVariables.REDIS_PASSWORD) || '',
      },
      onClientReady: (client) => {
        logger.log('Redis client ready');

        client.on('error', (err) => {
          logger.error('Redis Client Error: ', err);
        });

        client.on('connect', () => {
          logger.log(`Connected to redis on ${client.options.host}:${client.options.port}`);
        });
      },
    };
  },
  inject: [ConfigService],
});
