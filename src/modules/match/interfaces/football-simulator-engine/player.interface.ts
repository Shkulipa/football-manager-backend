import { EPlayerPositionName } from './../../../../services/repositories/real-player/constants/player-position-name.enum';
import { PlayerSkillsDto } from './../../../../services/repositories/real-player/dto/player-skills.dto';
import { IStats } from './stats.interface';

export interface IPlayer {
  _id: string;
  name: string;
  rating: number;
  position: string;
  skill: PlayerSkillsDto;
  currentPOS: number[];
  fitness: number;
  injured: boolean;
  playerID: number;
  originPOS: number[];
  intentPOS: number[];
  action: string;
  offside: boolean;
  hasBall: boolean;
  stats: IStats;
  photo?: string;
  age: number;
  number: number;
  positions: EPlayerPositionName;
  country: ICountry;
}

export interface ICountry {
  _id: string;
  name: string;
  flag: string;
}

export type IPlayerParse = Pick<
  IPlayer,
  | '_id'
  | 'name'
  | 'rating'
  | 'position'
  | 'skill'
  | 'currentPOS'
  | 'fitness'
  | 'injured'
  | 'country'
  | 'positions'
  | 'number'
  | 'age'
  | 'photo'
>;
