import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { QueueModule } from '../queue/queue.module';
import { EmailService } from './email.service';

@Module({
  imports: [QueueModule],
  providers: [EmailService, ConfigService],
  exports: [EmailService],
})
export class EmailModule {}
