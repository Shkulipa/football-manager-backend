import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from 'src/models/app/app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.use(cookieParser());
  app.setGlobalPrefix('api');
  app.setViewEngine('ejs');

  const port = app.get(ConfigService).get('PORT');
  await app.listen(port);
}
bootstrap();
