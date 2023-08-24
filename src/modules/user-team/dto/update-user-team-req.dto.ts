import { PartialType, PickType } from '@nestjs/swagger';

import { UserTeamDbDto } from './user-team-db.dto';

export class UpdateUserTeamReqDto extends PartialType(
  PickType(UserTeamDbDto, ['clubName', 'main', 'bench', 'reserve']),
) {}
