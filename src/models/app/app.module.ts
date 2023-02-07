import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from 'src/models/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import mongooseConfig from 'src/configs/database/mongo/mongoose.config';
import { modeConfig } from 'src/configs/app/mode.config';
import { MongoConnection } from 'src/providers/database/mongo/mongoConnection';
import { MailerModule } from '@nestjs-modules/mailer';
import { mailerConfig } from 'src/configs/app/mailer.config';
import { RefreshTokenModule } from '../refreshToken/refreshToken.module';

@Module({
  imports: [
    ConfigModule.forRoot(modeConfig),
    MongooseModule.forRootAsync(mongooseConfig),
    MailerModule.forRootAsync(mailerConfig),
    UserModule,
    RefreshTokenModule,
  ],
  controllers: [AppController],
  providers: [AppService, MongoConnection],
})
export class AppModule {}
