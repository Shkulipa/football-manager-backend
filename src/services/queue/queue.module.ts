import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';

import { fileQueue } from './consumers/file/file.constants';
import { FileConsumer } from './consumers/file/file.consumer';
import { mailQueue } from './consumers/mail/mail.constants';
import { MailConsumer } from './consumers/mail/mail.consumer';
import bullOptions from './options/bull.options';
import { QueueService } from './queue.service';

@Module({
  imports: [
    BullModule.forRootAsync(bullOptions),
    BullModule.registerQueue(mailQueue),
    BullModule.registerQueue(fileQueue),
  ],
  providers: [QueueService, MailConsumer, FileConsumer],
  exports: [QueueService],
})
export class QueueModule {}
