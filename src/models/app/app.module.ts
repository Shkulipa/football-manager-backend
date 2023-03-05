import { ConfigModule } from '@nestjs/config';
import { UserModule } from 'src/models/user/user.module';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import mongooseConfig from 'src/configs/database/mongo/mongoose.config';
import { modeConfig } from 'src/configs/app/mode.config';
import { MongoConnection } from 'src/providers/database/mongo/mongoConnection';
import { MailerModule } from '@nestjs-modules/mailer';
import { mailerConfig } from 'src/configs/app/mailer.config';
import { RefreshTokenModule } from '../refreshToken/refreshToken.module';
import { Module } from '@nestjs/common/decorators/modules/module.decorator';
import { LeagueModule } from 'src/models/league/league.module';
import { CountryModule } from '../country/country.module';
import { RealTeamModule } from '../realTeam/realTeam.module';
import { PlayerModule } from '../player/player.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

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
