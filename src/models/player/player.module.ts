import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerController } from './player.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '../jwt/jwt.module';
import { S3Module } from '../s3/s3.module';
import { Player, PlayerSchema } from './entities/player.entity';
import { PlayerPhoto, PlayerPhotoSchema } from './entities/playerPhoto.entity';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Player.name, schema: PlayerSchema },
      { name: PlayerPhoto.name, schema: PlayerPhotoSchema },
    ]),
    S3Module,
    JwtModule,
    UserModule,
  ],
  controllers: [PlayerController],
  providers: [PlayerService],
})
export class PlayerModule {}
