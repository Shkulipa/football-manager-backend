import { PickType } from '@nestjs/swagger';
import { UsersDbDto } from 'src/services/repositories/user/dto/user-db.dto';

export class VerifyNewEmailDto extends PickType(UsersDbDto, ['_id', 'email']) {}
