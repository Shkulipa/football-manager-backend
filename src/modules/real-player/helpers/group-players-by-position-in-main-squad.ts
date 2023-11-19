import { RealPlayerFullInfoDto } from '../dto/real-player-full-info.dto';
import { positions } from './../../../modules/packs/constants/zone-positons';
import { TSquadRealTeamFullInfo } from './../../../modules/real-team/interfaces/squad.interface';
import { EPlayerPositionName } from './../../../services/repositories/real-player/constants/player-position-name.enum';
import { averageSkillsPlayersFromMainSquad } from './average-skills-players-from-main-squad';

export type TPlayerPositionMain = [EPlayerPositionName, RealPlayerFullInfoDto];

export const groupPlayersByPositionInMainSquad = (mainSquad: TSquadRealTeamFullInfo) => {
  const main = Object.entries(mainSquad);

  const squad: Record<string, TPlayerPositionMain[]> = {
    attackers: [],
    midfielders: [],
    defenders: [],
  };

  main.forEach(([position, player]) => {
    const pos = position as EPlayerPositionName;
    if (positions.attackers.includes(pos)) {
      squad.attackers.push([pos, player]);
    }
    if (positions.midfielders.includes(pos)) {
      squad.midfielders.push([pos, player]);
    }
    if (positions.defenders.includes(pos)) {
      squad.defenders.push([pos, player]);
    }
  });

  const att = averageSkillsPlayersFromMainSquad(squad.attackers);
  const mid = averageSkillsPlayersFromMainSquad(squad.midfielders);
  const def = averageSkillsPlayersFromMainSquad(squad.defenders);

  return {
    att,
    mid,
    def,
  };
};
