import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { ISendMailOptions, MailerService } from '@nestjs-modules/mailer';
import { Job } from 'bull';

import { EQueueNames } from './../../dto/queue-names';
import { EProcessMail } from './mail.constants';

@Processor(EQueueNames.MAIL)
export class MailConsumer {
  logger = new Logger(MailConsumer.name);
  constructor(private readonly mailerService: MailerService) {}

  /** email send */
  @Process(EProcessMail.SEND_EMAIL)
  async activateEmail(job: Job<ISendMailOptions>) {
    const sendEmailOptions = job.data;

    try {
      await this.mailerService.sendMail(sendEmailOptions);
      job.finished();
    } catch (err) {
      this.logger.error(err);
    }
  }
}
