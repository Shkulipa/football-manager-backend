import { PickType } from '@nestjs/swagger';

import { RealPlayerDbDto } from './real-player.db.dto';

export class PlayerGroupDto extends PickType(RealPlayerDbDto, ['positions', 'skills']) {}
