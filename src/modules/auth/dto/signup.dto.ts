import { PickType } from '@nestjs/swagger';
import { UsersDbDto } from 'src/services/repositories/user-team/dto/user-db.dto';

export class SignupResDto extends PickType(UsersDbDto, ['_id', 'email', 'username', 'isConfirmEmail', 'roles']) {}
