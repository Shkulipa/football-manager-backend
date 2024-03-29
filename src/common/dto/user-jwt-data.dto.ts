import { PickType } from '@nestjs/swagger';
import { UsersDbDto } from 'src/services/repositories/user/dto/user-db.dto';

export class UserJtwDataDto extends PickType(UsersDbDto, ['_id', 'email', 'username', 'roles']) {}
