import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/models/app/app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const port = app.get(ConfigService).get('PORT');
  await app.listen(port);
}
bootstrap();
