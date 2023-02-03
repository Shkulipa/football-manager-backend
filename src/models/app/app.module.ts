import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from 'src/models/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import mongooseConfig from 'src/configs/database/mongo/mongoose.config';
import { modeConfig } from 'src/configs/app/mode.config';
import { MongoConnection } from 'src/providers/database/mongo/mongoConnection';

@Module({
  imports: [
    ConfigModule.forRoot(modeConfig),
    MongooseModule.forRootAsync(mongooseConfig),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, MongoConnection],
})
export class AppModule {}
