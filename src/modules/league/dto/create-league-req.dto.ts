import { PickType } from '@nestjs/swagger';
import { LeagueDbDto } from 'src/services/repositories/league/dto/league.db.dto';

export class CreateLeagueReqDto extends PickType(LeagueDbDto, ['name', 'countryId']) {}
