import { Module } from '@nestjs/common/decorators/modules/module.decorator';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { mailerConfig } from 'src/configs/app/mailer.config';
import { modeConfig } from 'src/configs/app/mode.config';
import mongooseConfig from 'src/configs/database/mongo/mongoose.config';
import { LeagueModule } from 'src/models/league/league.module';
import { UserModule } from 'src/models/user/user.module';
import { MongoConnection } from 'src/providers/database/mongo/mongoConnection';

import { CountryModule } from '../country/country.module';
import { PlayerModule } from '../player/player.module';
import { RealTeamModule } from '../realTeam/realTeam.module';
import { RefreshTokenModule } from '../refreshToken/refreshToken.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(modeConfig),
    MongooseModule.forRootAsync(mongooseConfig),
    MailerModule.forRootAsync(mailerConfig),
    CountryModule,
    LeagueModule,
    RealTeamModule,
    UserModule,
    RefreshTokenModule,
    PlayerModule,
  ],
  controllers: [AppController],
  providers: [AppService, MongoConnection],
})
export class AppModule {}
