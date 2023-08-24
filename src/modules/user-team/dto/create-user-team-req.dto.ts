import { PickType } from '@nestjs/swagger';

import { UserTeamDbDto } from './user-team-db.dto';

export class CreateUserTeamReqDto extends PickType(UserTeamDbDto, ['clubName']) {}
