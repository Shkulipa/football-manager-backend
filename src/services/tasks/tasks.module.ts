import { Module } from '@nestjs/common';
import { ActivationModule } from 'src/modules/activation/activation.module';
import { AuthModule } from 'src/modules/auth/auth.module';

import { TasksService } from './tasks.service';

@Module({
  imports: [ActivationModule, AuthModule],
  providers: [TasksService],
})
export class TasksModule {}
