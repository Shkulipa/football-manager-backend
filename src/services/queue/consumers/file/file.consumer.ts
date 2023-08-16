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

      // /** create record about file */
      // const newFile = {
      //   companyId: new Types.ObjectId(companyId),
      //   uploaderId: new Types.ObjectId(user._id),
      //   uploadSource: EUploadSource.DIRECT,
      //   fileName: fileData.filename,
      //   pathIdentifier: fileData.key,
      //   hash: fileData.hash,
      //   category,
      // };

      // const resFile = await this.filesRepository.create(newFile);

      // if (user.role === EUserRoles.CO_USER)
      //   await this.logsRepository.addLog(user, companyId, resFile._id.toString(), ELogsActions.IMPORT_FILE);

      job.finished();
    } catch (err) {
      this.logger.error(err);
    }
  }
}
