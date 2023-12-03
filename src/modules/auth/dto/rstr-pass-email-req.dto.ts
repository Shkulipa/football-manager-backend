import { PickType } from '@nestjs/swagger';
import { UsersDbDto } from 'src/services/repositories/user/dto/user-db.dto';

export class RstrPassEmailReqDto extends PickType(UsersDbDto, ['email']) {}
