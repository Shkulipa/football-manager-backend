import { ConfigModule } from '@nestjs/config/dist/config.module';
import { ConfigService } from '@nestjs/config/dist/config.service';
import { MongooseModuleAsyncOptions } from '@nestjs/mongoose/dist/interfaces/mongoose-options.interface';
import { EEnvVariables } from 'src/common/constants/env-variables.enum';

const mongooseConfig: MongooseModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => {
    const MONGODB_URL = configService.get<string>(EEnvVariables.MONGODB_URL);
    return {
      uri: MONGODB_URL,
    };
  },
  inject: [ConfigService],
};

export default mongooseConfig;
