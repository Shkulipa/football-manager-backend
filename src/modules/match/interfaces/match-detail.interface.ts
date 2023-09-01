import { UserPoll } from 'src/modules/search-opponent/dto/user-poll.dto';

export enum EStatusMatch {
  PREPARE = 'PREPARE',
  IN_PROCESS = 'IN_PROCESS',
  FINISHED = 'FINISHED',
}

export interface IPlayerData extends Pick<UserPoll, 'team' | 'user'> {
  isReady: boolean;
}

export interface IMatchDetail {
  player1: IPlayerData;
  player2: IPlayerData;
  status: EStatusMatch;
}
