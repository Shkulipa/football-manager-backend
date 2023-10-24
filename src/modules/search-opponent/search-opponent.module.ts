import { Module } from '@nestjs/common';
import { JwtModule } from 'src/services/jwt/jwt.module';
import { UserTeamRepositoryModule } from 'src/services/repositories/user-team/user-team-repository.module';

import { MatchModule } from '../match/match.module';
import { UserModule } from '../user/user.module';
import { SearchOpponentGateway } from './search-opponent.gateway';

@Module({
  imports: [JwtModule, UserModule, UserTeamRepositoryModule, MatchModule],
  providers: [SearchOpponentGateway],
})
export class SearchOpponentModule {}
