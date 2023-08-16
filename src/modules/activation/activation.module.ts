import { forwardRef } from '@nestjs/common';
import { Module } from '@nestjs/common/decorators/modules/module.decorator';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { JwtModule } from 'src/services/jwt/jwt.module';
import { EmailModule } from 'src/services/mailer/email.module';

import { UserModule } from '../user/user.module';
import { ActivationController } from './activation.controller';
import { ActivationRepository } from './activation.repository';
import { ActivationService } from './activation.service';
import { Activation, ActivationSchema } from './entity/activation.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Activation.name, schema: ActivationSchema }]),
    forwardRef(() => UserModule),
    JwtModule,
    EmailModule,
  ],
  controllers: [ActivationController],
  providers: [ActivationService, ActivationRepository, ConfigService],
  exports: [ActivationRepository, ActivationService],
})
export class ActivationModule {}
