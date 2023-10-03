import { PickType } from '@nestjs/swagger';
import { IUserData } from 'src/common/interfaces/user-data.interfaces';
import { UserTeamDbDto } from 'src/modules/user-team/dto/user-team-db.dto';

class Team extends PickType(UserTeamDbDto, ['_id', 'ratingElo', 'clubName', 'logoClub', 'skills', 'main', 'bench']) {}

export class UserPoll {
  socketId: string;
  user: IUserData;
  team: Team;
}
