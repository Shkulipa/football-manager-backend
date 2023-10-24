import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ActivationRepository } from './activation.repository';
import { Activation, ActivationSchema } from './entity/activation.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Activation.name, schema: ActivationSchema }])],
  providers: [ActivationRepository],
  exports: [ActivationRepository],
})
export class ActivationRepositoryModule {}
