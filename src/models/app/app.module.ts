import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from 'src/models/user/user.module';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import mongooseConfig from 'src/configs/database/mongo/mongoose.config';
import { modeConfig } from 'src/configs/app/mode.config';
import { MongoConnection } from 'src/providers/database/mongo/mongoConnection';
import { MailerModule } from '@nestjs-modules/mailer';
import { mailerConfig } from 'src/configs/app/mailer.config';
import { RefreshTokenModule } from '../refreshToken/refreshToken.module';
import { FlagModule } from '../flag/flag.module';
import { AuthMiddleware } from 'src/common/middlewares/auth.middleware';
import { Module } from '@nestjs/common/decorators/modules/module.decorator';
import { MiddlewareConsumer } from '@nestjs/common/interfaces/middleware/middleware-consumer.interface';
import { RequestMethod } from '@nestjs/common/enums/request-method.enum';

@Module({
  imports: [
    ConfigModule.forRoot(modeConfig),
    MongooseModule.forRootAsync(mongooseConfig),
    MailerModule.forRootAsync(mailerConfig),
    FlagModule,
    UserModule,
    RefreshTokenModule,
  ],
  controllers: [AppController],
  providers: [AppService, MongoConnection],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
