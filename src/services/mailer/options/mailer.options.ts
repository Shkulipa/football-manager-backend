import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailerOptions } from '@nestjs-modules/mailer';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { MailerAsyncOptions } from '@nestjs-modules/mailer/dist/interfaces/mailer-async-options.interface';
import { path } from 'app-root-path';
import { EEnvVariables } from 'src/common/constants/env-variables.enum';

export const mailerOptions: MailerAsyncOptions = {
  imports: [ConfigModule],
  useFactory: (configService: ConfigService): MailerOptions | Promise<MailerOptions> => {
    const SMTP_HOST = configService.get<string>(EEnvVariables.SMTP_HOST);
    const SMTP_PORT = configService.get<number>(EEnvVariables.SMTP_PORT);
    const SMTP_USER = configService.get<string>(EEnvVariables.SMTP_USER);
    const SMTP_PASS = configService.get<string>(EEnvVariables.SMTP_PASS);

    return {
      transport: {
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: false,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      },
      template: {
        dir: path + '/dist/services/mailer/templates',
        adapter: new EjsAdapter(),
      },
    };
  },
  inject: [ConfigService],
};
