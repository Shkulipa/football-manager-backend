import { PickType } from '@nestjs/swagger';
import { UsersDbDto } from 'src/modules/user/dto/user-db.dto';

export class CommonDecodedTokenJwtDto extends PickType(UsersDbDto, ['_id']) {}
