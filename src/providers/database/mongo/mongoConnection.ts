import { BadRequestException, Logger, Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { connect, set } from 'mongoose';

export const MongoConnection: Provider = {
  provide: 'MONGO_CONNECTION',
  useFactory: async (configService: ConfigService) => {
    const MONGODB_URL = configService.get<string>('MONGODB_URL');
    const MONGODB_DATABASE_NAME = configService.get<string>(
      'MONGODB_DATABASE_NAME',
    );
    const uri = `${MONGODB_URL}/${MONGODB_DATABASE_NAME}`;
    const logger = new Logger('MongoConnection');

    try {
      set('strictQuery', false);
      await connect(uri, { serverSelectionTimeoutMS: 2500 });
      logger.log('✅ MongoDB success connected!');
    } catch (err) {
      throw new BadRequestException("❌ Clound't connect to DB", err);
    }
  },
  inject: [ConfigService],
};
