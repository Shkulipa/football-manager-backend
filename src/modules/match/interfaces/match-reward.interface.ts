import { UsersDbDto } from 'src/services/repositories/user/dto/user-db.dto';

export interface IPlayerRewardData extends Pick<UsersDbDto, '_id' | 'username'> {
  money: number;
  oldRating: number;
  newRating: number;
}

export interface IMatchReward {
  rewardPlayer1: IPlayerRewardData;
  rewardPlayer2: IPlayerRewardData;
}
