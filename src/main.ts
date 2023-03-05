import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from 'src/models/app/app.module';
import { ConfigService } from '@nestjs/config/dist/config.service';
import { Logger } from '@nestjs/common/services/logger.service';
import { readFileSync } from 'fs';
import { join } from 'path';

async function bootstrap() {
  const logger = new Logger('Main(main.ts)');

  const packageJsonPath = join(__dirname, '..', 'package.json');
  const packageJson = JSON.parse(readFileSync(packageJsonPath).toString());
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Football manager API Doc')
    .setVersion(packageJson.version)
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT', in: 'header' },
      'JWT',
    )
    .build();

  app.use(cookieParser());
  app.setGlobalPrefix('api');
  app.setViewEngine('ejs');

  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  const clientPort = parseInt(configService.get('CLIENT_PORT'));
  const corsWebSites = String(configService.get('CORS_WEBSITES')) || '';
  app.enableCors({
    origin: [
      `http://localhost:${port}`,
      new RegExp(`/^http:\/\/192\.168\.1\.([1-9]|[1-9]\d):${clientPort}$/`),
      ...corsWebSites.split(','),
    ],
  });

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api', app, document);

  await app.listen(port);

  logger.log(`Server running on port ${port}`);
}
bootstrap();
