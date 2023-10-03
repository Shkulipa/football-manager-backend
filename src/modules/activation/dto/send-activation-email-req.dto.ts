import { PickType } from '@nestjs/swagger';
import { UsersDbDto } from 'src/modules/user/dto/user-db.dto';

export class SendActivationEmailReqDto extends PickType(UsersDbDto, ['email']) {}
