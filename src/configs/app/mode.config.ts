import { ConfigModuleOptions } from '@nestjs/config/dist/interfaces/config-module-options.interface';
import * as Joi from 'joi';

import { EMode } from './../../common/constants/mode.enum';

const ENV = process.env.NODE_ENV;

export const modeConfig: ConfigModuleOptions = {
  envFilePath: !ENV ? '.env' : `.env.${ENV}`,

  validationSchema: Joi.object({
    NODE_ENV: Joi.string().valid(EMode.PRODUCTION, EMode.DEVELOPMENT, EMode.STAGING),
    PORT: Joi.number().required(),
    CLIENT_URL: Joi.string().required(),

    MONGODB_URL: Joi.string().required(),

    SMTP_HOST: Joi.string().required(),
    SMTP_PORT: Joi.number().required(),
    SMTP_USER: Joi.string().required(),
    SMTP_PASS: Joi.string().required(),

    SECRET_ACCESS: Joi.string().required(),
    SECRET_REFRESH: Joi.string().required(),
    SECRET_PASS_RESTORE: Joi.string().required(),
    SECRET_EMAIL_ACTIVATION: Joi.string().required(),
  }),

  validationOptions: {
    abortEarly: true,
  },
};
