import { PickType } from '@nestjs/swagger';
import { UsersDbDto } from 'src/services/repositories/user/dto/user-db.dto';

export class IUserData extends PickType(UsersDbDto, ['_id', 'email', 'username', 'roles']) {}
