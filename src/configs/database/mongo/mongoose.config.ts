import { ConfigModule } from '@nestjs/config/dist/config.module';
import { ConfigService } from '@nestjs/config/dist/config.service';
import { MongooseModuleAsyncOptions } from '@nestjs/mongoose/dist/interfaces/mongoose-options.interface';

const mongooseConfig: MongooseModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => {
    const MONGODB_URL = configService.get<string>('MONGODB_URL');
    const MONGODB_DATABASE_NAME = configService.get<string>(
      'MONGODB_DATABASE_NAME',
    );
    const uri = `${MONGODB_URL}/${MONGODB_DATABASE_NAME}`;

    return {
      uri,
    };
  },
  inject: [ConfigService],
};

export default mongooseConfig;
