import { Module } from '@nestjs/common';
import { JwtModule } from 'src/services/jwt/jwt.module';

import { RealPlayerModule } from '../real-player/real-player.module';
import { UserTeamModule } from '../user-team/user-team.module';
import { UserModule } from './../user/user.module';
import { PacksController } from './packs.controller';
import { PacksService } from './packs.service';

@Module({
  imports: [UserModule, RealPlayerModule, UserTeamModule, JwtModule],
  controllers: [PacksController],
  providers: [PacksService],
  exports: [PacksService],
})
export class PacksModule {}
