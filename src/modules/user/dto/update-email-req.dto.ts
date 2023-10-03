import { PickType } from '@nestjs/swagger';
import { CreateUserDto } from 'src/modules/auth/dto/create-user.dto';

export class UpdateEmailReqDto extends PickType(CreateUserDto, ['email']) {}
