import { PartialType } from '@nestjs/swagger';

import { CreateLeagueReqDto } from './create-league-req.dto';

export class UpdateLeagueReqDto extends PartialType(CreateLeagueReqDto) {}
