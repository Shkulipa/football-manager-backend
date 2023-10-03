import { ApiProperty, IntersectionType, PickType } from '@nestjs/swagger';
import { RealPlayerFullInfoDto } from 'src/modules/real-player/dto/real-player-full-info.dto';
import { RealTeamFullInfoDto } from 'src/modules/real-team/dto/real-team-full-info.dto';
import { UsersDbDto } from 'src/modules/user/dto/user-db.dto';

import { UserTeamDbDto } from './user-team-db.dto';

class SquadDto extends PickType(RealTeamFullInfoDto, ['skills', 'main', 'bench']) {
  @ApiProperty({ required: true, type: [RealPlayerFullInfoDto] })
  reserve: RealPlayerFullInfoDto[];
}

class UserTeamDto extends PickType(UserTeamDbDto, ['_id', 'clubName', 'ratingElo', 'logoClub']) {}

class UserDto extends PickType(UsersDbDto, ['_id', 'username']) {}

/**
 * @info
 * need delete declaration from tsconfig.json
 * https://stackoverflow.com/questions/54525342/error-ts2742-the-inferred-type-of-username-cannot-be-named-without-a-referenc
 */
export class GetUserTeamResDto extends IntersectionType(SquadDto, UserTeamDto, UserDto) {
  @ApiProperty({ type: UserDto })
  user: UserDto;
}
