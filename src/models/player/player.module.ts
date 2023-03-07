import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { JwtModule } from '../jwt/jwt.module';
import { S3Module } from '../s3/s3.module';
import { UserModule } from '../user/user.module';
import { Player, PlayerSchema } from './entities/player.entity';
import { PlayerController } from './player.controller';
import { PlayerService } from './player.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Player.name, schema: PlayerSchema }]),
    S3Module,
    JwtModule,
    UserModule,
  ],
  controllers: [PlayerController],
  providers: [PlayerService],
})
export class PlayerModule {}
