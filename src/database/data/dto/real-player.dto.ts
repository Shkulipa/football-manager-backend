import { PickType } from '@nestjs/swagger';
import { Types } from 'mongoose';

import { RealPlayerDbDto } from './../../../modules/real-player/dto/real-player.db.dto';

export class RealPlayerDto extends PickType(RealPlayerDbDto, [
  '_id',
  'name',
  'number',
  'countryId',
  'age',
  'positions',
  'skills',
]) {
  photo?: string;
  realTeamId?: Types.ObjectId;
}
