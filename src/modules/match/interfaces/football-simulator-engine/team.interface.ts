import { ReplacementsDto } from '../../dto/replacements.dto';
import { IBenchPlayer } from './bench.interface';
import { IPlayer } from './player.interface';

export interface ITeam {
  name: string;
  manager: string;
  players: IPlayer[];
  bench: IBenchPlayer[];
  rating: number;
  intent: string;
  teamID: number;
  logoClub: string;
  replacements: ReplacementsDto[];
}
