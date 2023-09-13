import { ApiProperty, PickType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { UsersDbDto } from 'src/modules/user/dto/user-db.dto';

import { RealPlayerDbDto } from './real-player.db.dto';

export class GetRandomPlayerForPackDto extends PickType(UsersDbDto, ['money']) {
  @ApiProperty({ isArray: true, type: RealPlayerDbDto })
  @IsArray()
  @Type(() => RealPlayerDbDto)
  @ValidateNested({ each: true })
  players: RealPlayerDbDto[];
}
