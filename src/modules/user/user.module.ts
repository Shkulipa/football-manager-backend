import { forwardRef, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { EmailModule } from 'src/services/mailer/email.module';

import { ActivationModule } from '../activation/activation.module';
import { JwtModule } from './../../services/jwt/jwt.module';
import { User, UserSchema } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule,
    EmailModule,
    forwardRef(() => ActivationModule),
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository, ConfigService],
  exports: [UserService, UserRepository],
})
export class UserModule {}
