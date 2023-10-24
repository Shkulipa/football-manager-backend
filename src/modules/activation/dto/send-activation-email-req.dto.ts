import { PickType } from '@nestjs/swagger';
import { UsersDbDto } from 'src/services/repositories/user-team/dto/user-db.dto';

export class SendActivationEmailReqDto extends PickType(UsersDbDto, ['email']) {}
