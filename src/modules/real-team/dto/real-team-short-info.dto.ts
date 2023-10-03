import { OmitType } from '@nestjs/swagger';

import { RealTeamFullInfoDto } from './real-team-full-info.dto';

export class RealTeamShortInfoDto extends OmitType(RealTeamFullInfoDto, ['main', 'bench']) {}
