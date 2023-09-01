import { Module } from '@nestjs/common';
import { JwtModule } from 'src/services/jwt/jwt.module';

import { MatchModule } from '../match/match.module';
import { UserModule } from '../user/user.module';
import { UserTeamModule } from '../user-team/user-team.module';
import { SearchOpponentGateway } from './search-opponent.gateway';

@Module({
  imports: [JwtModule, UserModule, UserTeamModule, MatchModule],
  providers: [SearchOpponentGateway],
})
export class SearchOpponentModule {}
