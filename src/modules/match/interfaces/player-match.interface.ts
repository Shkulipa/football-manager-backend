import { PlayerSkillsDto } from 'src/modules/real-player/dto/player-skills.dto';

export interface IPlayerMatch {
  name: string;
  position: string;
  rating: string;
  skill: PlayerSkillsDto;
  currentPOS: [number, number];
  fitness: number;
  injured: boolean;
}
