import * as Joi from 'joi';
import { ConfigModuleOptions } from '@nestjs/config/dist/interfaces/config-module-options.interface';

const ENV = process.env.NODE_ENV;

export const modeConfig: ConfigModuleOptions = {
  envFilePath: !ENV ? '.env' : `.env.${ENV}`,

  validationSchema: Joi.object({
    NODE_ENV: Joi.string().valid('development', 'production'),
    PORT: Joi.number().required(),
    MONGODB_URL: Joi.string().required(),
    MONGODB_DATABASE_NAME: Joi.string().required(),
  }),

  validationOptions: {
    abortEarly: true,
  },
};
