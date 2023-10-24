import { PickType } from '@nestjs/swagger';
import { UsersDbDto } from 'src/services/repositories/user-team/dto/user-db.dto';

export class LoginDto extends PickType(UsersDbDto, ['_id', 'username', 'email', 'roles']) {}
