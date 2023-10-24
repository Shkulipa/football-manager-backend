import { Module } from '@nestjs/common';
import { JwtModule } from 'src/services/jwt/jwt.module';
import { RealPlayerRepositoryModule } from 'src/services/repositories/real-player/real-player-repository.module';
import { UserRepositoryModule } from 'src/services/repositories/user/user-repository.module';
import { UserTeamRepositoryModule } from 'src/services/repositories/user-team/user-team-repository.module';

import { UserModule } from '../user/user.module';
import { PacksController } from './packs.controller';
import { PacksService } from './packs.service';

@Module({
  imports: [UserModule, UserRepositoryModule, RealPlayerRepositoryModule, UserTeamRepositoryModule, JwtModule],
  controllers: [PacksController],
  providers: [PacksService],
  exports: [PacksService],
})
export class PacksModule {}
