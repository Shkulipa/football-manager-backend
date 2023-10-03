import { BullModuleOptions } from '@nestjs/bull';

import { EQueueNames } from '../../dto/queue-names';

export enum EProcessMail {
  SEND_EMAIL = 'send-email',
}

export const mailQueue: BullModuleOptions = {
  name: EQueueNames.MAIL,
};
