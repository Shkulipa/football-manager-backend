import { IPlayer } from './player.interface';

export type IBenchPlayer = Pick<
  IPlayer,
  '_id' | 'age' | 'country' | 'injured' | 'fitness' | 'positions' | 'skill' | 'rating' | 'number' | 'name'
>;
