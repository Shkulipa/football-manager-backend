import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

import { EQueueNames } from '../../dto/queue-names';
import { EProcessFile } from './file.constants';
import { IJobUploadFile } from './interfaces/file';

@Processor(EQueueNames.FILE)
export class FileConsumer {
  logger = new Logger(FileConsumer.name);

  @Process(EProcessFile.UPLOAD_FILE)
  async uploadFile(job: Job<IJobUploadFile>) {
    const { data } = job;

    try {
      const buffer = Buffer.from(data.file.buffer.data);

      const file: Express.Multer.File = {
        ...data.file,
        buffer,
      };

      // const fileData = await this.s3Service.create(file, data.path);
      // update country/league/real-team/real-player photo

      job.finished();
    } catch (err) {
      this.logger.error(err);
    }
  }
}
