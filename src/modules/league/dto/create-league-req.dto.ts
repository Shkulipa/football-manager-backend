import { PickType } from '@nestjs/swagger';

import { LeagueDbDto } from './league.db.dto';

export class CreateLeagueReqDto extends PickType(LeagueDbDto, ['name', 'countryId']) {}
