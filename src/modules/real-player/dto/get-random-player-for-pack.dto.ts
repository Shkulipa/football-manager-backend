import { ApiProperty, PickType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { RealPlayerDbDto } from 'src/services/repositories/real-player/dto/real-player.db.dto';
import { UsersDbDto } from 'src/services/repositories/user-team/dto/user-db.dto';

export class GetRandomPlayerForPackDto extends PickType(UsersDbDto, ['money']) {
  @ApiProperty({ isArray: true, type: RealPlayerDbDto })
  @IsArray()
  @Type(() => RealPlayerDbDto)
  @ValidateNested({ each: true })
  players: RealPlayerDbDto[];
}
