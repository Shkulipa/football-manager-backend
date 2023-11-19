import { PickType } from '@nestjs/swagger';
import { UsersDbDto } from 'src/services/repositories/user-team/dto/user-db.dto';

export class CreateUserDto extends PickType(UsersDbDto, ['email', 'username', 'password']) {}
