import { RequestMethod } from '@nestjs/common/enums/request-method.enum';
import { Logger } from '@nestjs/common/services/logger.service';
import { ConfigService } from '@nestjs/config/dist/config.service';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { AppModule } from 'src/models/app/app.module';

async function bootstrap() {
  const logger = new Logger('Main(main.ts)');

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Football manager API Doc')
    .setVersion('0.0.1') // from package.json
    .setLicense('MIT', 'https://github.com/Shkulipa/football-manager-backend') // from package.json
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT', in: 'header' },
      'JWT',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  app.use(cookieParser());
  app.setGlobalPrefix('api', {
    exclude: [{ path: '', method: RequestMethod.GET }],
  });
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

  await app.listen(port);

  logger.log(`Server running on port ${port}`);
}
bootstrap();
