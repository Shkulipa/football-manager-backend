import { IStats } from '../interfaces/football-simulator-engine/stats.interface';

export const defaultStats: IStats = {
  goals: 0,
  shots: {
    total: 0,
    on: 0,
    off: 0,
  },
  cards: {
    yellow: 0,
    red: 0,
  },
  passes: {
    total: 0,
    on: 0,
    off: 0,
  },
  tackles: {
    total: 0,
    on: 0,
    off: 0,
    fouls: 0,
  },
};
