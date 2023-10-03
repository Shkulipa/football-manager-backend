import { Module } from '@nestjs/common';
import { JwtModule } from 'src/services/jwt/jwt.module';

import { UserModule } from '../user/user.module';
import { ChatsGateway } from './chats.gateway';

@Module({
  imports: [UserModule, JwtModule],
  providers: [ChatsGateway],
})
export class ChatsModule {}
