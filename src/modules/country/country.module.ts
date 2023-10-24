import { Module } from '@nestjs/common/decorators/modules/module.decorator';
import { JwtModule } from 'src/services/jwt/jwt.module';
import { CountryRepositoryModule } from 'src/services/repositories/country/country-repository.module';
import { LeagueRepositoryModule } from 'src/services/repositories/league/league-repository.module';
import { RealPlayerRepositoryModule } from 'src/services/repositories/real-player/real-player-repository.module';
import { S3Module } from 'src/services/s3/s3.module';

import { UserModule } from '../user/user.module';
import { CountryController } from './country.controller';
import { CountryService } from './country.service';

@Module({
  imports: [
    RealPlayerRepositoryModule,
    CountryRepositoryModule,
    LeagueRepositoryModule,
    UserModule,
    JwtModule,
    S3Module,
  ],
  controllers: [CountryController],
  providers: [CountryService],
  exports: [CountryService],
})
export class CountryModule {}
