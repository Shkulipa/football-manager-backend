import { Logger, RequestMethod, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config/dist/config.service';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { AppModule } from 'src/modules/app/app.module';

import { EEnvVariables } from './common/constants/env-variables.enum';
import { EMode } from './common/constants/mode.enum';
import { AllExceptionFilter } from './common/exceptions/all-exception-filter.decorator';
import swaggerConfig from './configs/app/swagger.config';

async function bootstrap() {
  const logger = new Logger('Main(main.ts)');

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalFilters(new AllExceptionFilter());
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  const configService = app.get(ConfigService);
  const mode = configService.get(EEnvVariables.NODE_ENV);

  /** swagger */
  if (mode === EMode.DEVELOPMENT || mode === EMode.STAGING) {
    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('/api/docs', app, document);
  }

  /** cookie */
  app.use(cookieParser());

  /** prefix in url */
  app.setGlobalPrefix('api', {
    exclude: [{ path: '', method: RequestMethod.GET }],
  });

  /** ejs for emails */
  app.setViewEngine('ejs');

  /** cors */
  const port = configService.get(EEnvVariables.PORT);
  const clientPort = parseInt(port);
  const corsWebSites = String(configService.get(EEnvVariables.CORS_WEBSITES)) || '';

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
