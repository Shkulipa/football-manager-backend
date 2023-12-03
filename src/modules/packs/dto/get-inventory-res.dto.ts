import { IntersectionType, PickType } from '@nestjs/swagger';
import { UsersDbDto } from 'src/services/repositories/user/dto/user-db.dto';

import { PacksDto } from './packs.dto';

export class GetInventoryResDto extends IntersectionType(PickType(UsersDbDto, ['money'])) {
  packs: PacksDto;
}
