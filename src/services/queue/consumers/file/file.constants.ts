import { BullModuleOptions } from '@nestjs/bull';

import { EQueueNames } from '../../dto/queue-names';

export enum EProcessFile {
  UPLOAD_FILE = 'upload-file',
}

export const fileQueue: BullModuleOptions = {
  name: EQueueNames.FILE,
};
