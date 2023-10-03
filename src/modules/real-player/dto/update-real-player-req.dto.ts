import { PartialType } from '@nestjs/mapped-types';

import { CreateRealPlayerReqDto } from './create-real-player-req.dto';

export class UpdateRealPlayerReqDto extends PartialType(CreateRealPlayerReqDto) {}
