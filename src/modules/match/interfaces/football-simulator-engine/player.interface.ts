import { PlayerSkillsDto } from 'src/modules/real-player/dto/player-skills.dto';

import { IStats } from './stats.interface';

export interface IPlayer {
  realPlayerId: string;
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
}

export type IPlayerParse = Pick<
  IPlayer,
  'realPlayerId' | 'name' | 'rating' | 'position' | 'skill' | 'currentPOS' | 'fitness' | 'injured'
>;
