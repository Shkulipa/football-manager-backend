import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ISendMailOptions } from '@nestjs-modules/mailer';

import { QueueService } from '../queue/queue.service';
import { EEnvVariables } from './../../common/constants/env-variables.enum';
import { EMode } from './../../common/constants/mode.enum';
import { EMailTemplatesType } from './dto/mail-template.enum';

const name = 'Football Manager';

@Injectable()
export class EmailService {
  logger = new Logger(EmailService.name);

  constructor(private readonly queueService: QueueService, private readonly configService: ConfigService) {}

  private getSubject(mailType: EMailTemplatesType): string {
    let subject = '';
    switch (mailType) {
      case EMailTemplatesType.ACTIVATION:
        subject = 'Confirmation email';
        break;
      case EMailTemplatesType.RESTORE_PASSWORD:
        subject = 'Restore password';
        break;

      default:
        break;
    }
    return subject;
  }

  sendEmail(to: string, username: string, mailType: EMailTemplatesType, link?: string, newEmail?: string) {
    const mode = this.configService.get(EEnvVariables.NODE_ENV);
    const address = this.configService.get(EEnvVariables.SMTP_USER);

    // if (mode === EMode.DEVELOPMENT) {
    //   this.logger.log(`LINK: ${link}`);
    //   return;
    // }

    const sendEmailOptions: ISendMailOptions = {
      to,
      from: {
        name,
        address,
      },
      subject: this.getSubject(mailType),
      template: mailType,
      context: {
        email: to,
        username,
        ...(newEmail ? { newEmail } : {}),
        ...(link ? { link } : {}),
      },
    };

    this.queueService.sendEmail(sendEmailOptions);
  }
}
