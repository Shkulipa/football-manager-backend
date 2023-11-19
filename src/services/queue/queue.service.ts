import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { ISendMailOptions } from '@nestjs-modules/mailer';
import { Queue } from 'bull';

import { EQueueNames } from './../../services/queue/dto/queue-names';
import { EProcessFile } from './consumers/file/file.constants';
import { IUploadFileDataDto } from './consumers/file/interfaces/file';
import { EProcessMail } from './consumers/mail/mail.constants';

@Injectable()
export class QueueService {
  constructor(
    @InjectQueue(EQueueNames.MAIL) private readonly mailQueue: Queue,
    @InjectQueue(EQueueNames.FILE) private readonly fileQueue: Queue,
  ) {}

  /** send email queue */
  async sendEmail(mailOptions: ISendMailOptions) {
    return await this.mailQueue.add(EProcessMail.SEND_EMAIL, mailOptions);
  }

  /** files queue */
  async uploadFile(uploadFileDataDto: IUploadFileDataDto) {
    return await this.fileQueue.add(EProcessFile.UPLOAD_FILE, uploadFileDataDto);
  }
}
