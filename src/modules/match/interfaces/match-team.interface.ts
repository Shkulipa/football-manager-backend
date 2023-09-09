import { IPlayerMatch } from './player-match.interface';

export interface IMatchTeam {
  name: string;
  manager: string;
  rating: number;
  players: IPlayerMatch[];
}
