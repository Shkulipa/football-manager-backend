import { PickType } from '@nestjs/swagger';
import { RealPlayerDbDto } from 'src/services/repositories/real-player/dto/real-player.db.dto';

export class PlayerGroupDto extends PickType(RealPlayerDbDto, ['positions', 'skills']) {}
