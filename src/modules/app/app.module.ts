import { Module } from '@nestjs/common/decorators/modules/module.decorator';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { ScheduleModule } from '@nestjs/schedule';
import { MailerModule } from '@nestjs-modules/mailer';
import { LoggerModule } from 'nestjs-pino';
import { modeConfig } from 'src/configs/app/mode.config';
import mongooseConfig from 'src/configs/database/mongo/mongoose.config';
import { loggerAsyncOptions } from 'src/logger/logger-options';
import { LeagueModule } from 'src/modules/league/league.module';
import { UserModule } from 'src/modules/user/user.module';
import { MongoConnection } from 'src/services/database/mongo/mongoConnection';
import { mailerOptions } from 'src/services/mailer/options/mailer.options';
import { QueueModule } from 'src/services/queue/queue.module';
import { TasksModule } from 'src/services/tasks/tasks.module';

import { ActivationModule } from '../activation/activation.module';
import { AuthModule } from '../auth/auth.module';
import { CountryModule } from '../country/country.module';
import { HealthCheckModule } from '../healthCheck/healthCheck.module';
import { RealPlayerModule } from '../real-player/real-player.module';
import { RealTeamModule } from '../real-team/real-team.module';
import { RefreshTokenModule } from '../refresh-token/refresh-token.module';
import { UserTeamModule } from '../user-team/user-team.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot(modeConfig),
    LoggerModule.forRootAsync(loggerAsyncOptions),
    MongooseModule.forRootAsync(mongooseConfig),
    MailerModule.forRootAsync(mailerOptions),
    TasksModule,
    HealthCheckModule,
    AuthModule,
    CountryModule,
    LeagueModule,
    RealTeamModule,
    UserModule,
    ActivationModule,
    RefreshTokenModule,
    RealPlayerModule,
    QueueModule,
    UserTeamModule,
  ],
  controllers: [AppController],
  providers: [AppService, MongoConnection],
})
export class AppModule {}
