import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { AuthService } from 'src/modules/auth/auth.service';

import { ActivationService } from './../../modules/activation/activation.service';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(private readonly activationService: ActivationService, private readonly authService: AuthService) {}

  @Cron(CronExpression.EVERY_4_HOURS)
  async regularDataCleanup() {
    const beginTime = Number(new Date());
    const countActivations = await this.activationService.regularDataCleanup();
    const countRestorePassword = await this.authService.regularDataCleanup();

    const count = countActivations + countRestorePassword;

    this.logger.log(`DATA CLEANUP FINISHED, task time: ${Number(new Date()) - beginTime} ms, total deleted: ${count}`);
  }
}
