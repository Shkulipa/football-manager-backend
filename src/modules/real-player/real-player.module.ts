import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from 'src/services/jwt/jwt.module';
import { S3Module } from 'src/services/s3/s3.module';

import { CountryModule } from '../country/country.module';
import { RealTeamModule } from '../real-team/real-team.module';
import { UserModule } from '../user/user.module';
import { PlayerSchema, RealPlayer } from './entities/real-player.entity';
import { RealPlayerController } from './real-player.controller';
import { RealPlayerRepository } from './real-player.repository';
import { RealPlayerService } from './real-player.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: RealPlayer.name, schema: PlayerSchema }]),
    S3Module,
    JwtModule,
    UserModule,
    forwardRef(() => CountryModule),
    forwardRef(() => RealTeamModule),
  ],
  controllers: [RealPlayerController],
  providers: [RealPlayerService, RealPlayerRepository],
  exports: [RealPlayerService, RealPlayerRepository],
})
export class RealPlayerModule {}
