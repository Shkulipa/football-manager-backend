import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { RestorePassword, RestorePasswordSchema } from './entity/restore-password.entity';
import { RestorePasswordRepository } from './restore-password.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: RestorePassword.name, schema: RestorePasswordSchema }])],
  providers: [RestorePasswordRepository],
  exports: [RestorePasswordRepository],
})
export class RestorePasswordRepositoryModule {}
