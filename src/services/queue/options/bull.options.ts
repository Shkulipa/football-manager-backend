import { SharedBullAsyncConfiguration } from '@nestjs/bull';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EEnvVariables } from 'src/common/constants/env-variables.enum';

const bullOptions: SharedBullAsyncConfiguration = {
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => {
    const REDIS_HOST = configService.get<string>(EEnvVariables.REDIS_HOST);
    const REDIS_PORT = configService.get<number>(EEnvVariables.REDIS_PORT);
    const REDIS_USERNAME = configService.get<string>(EEnvVariables.REDIS_USERNAME);
    const REDIS_PASSWORD = configService.get<string>(EEnvVariables.REDIS_PASSWORD);

    return {
      redis: {
        host: REDIS_HOST,
        port: REDIS_PORT,
        ...(REDIS_USERNAME ? { username: REDIS_USERNAME } : {}),
        ...(REDIS_PASSWORD ? { password: REDIS_PASSWORD } : {}),
      },
      defaultJobOptions: {
        removeOnComplete: 4,
        removeOnFail: 4,
      },
    };
  },
  inject: [ConfigService],
};

export default bullOptions;
