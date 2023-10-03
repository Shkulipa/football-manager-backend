import { PickType } from '@nestjs/swagger';

import { UsersDbDto } from './user-db.dto';

export class LoginDto extends PickType(UsersDbDto, ['_id', 'username', 'email', 'roles']) {}
