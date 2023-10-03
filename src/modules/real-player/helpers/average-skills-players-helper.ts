import { EPlayerPositionName } from '../constants/player-position-name.enum';
import { PlayerGroupDto } from '../dto/player-group.dto';

const averageSkillPlayerHelper = (players: PlayerGroupDto[]) => {
  const averageVal =
    players.reduce((sumSkills, p) => {
      const skills = { ...p.skills };

      if (!p.positions.includes(EPlayerPositionName.GK)) {
        delete skills.penalty_taking;
        delete skills.saving;
      }

      const skillsValues = Object.values(p.skills);
      const countSkillPlayer = skillsValues.reduce((s, v) => s + v, 0) / skillsValues.length;
      return sumSkills + countSkillPlayer;
    }, 0) / players.length;

  return +Math.round(averageVal).toFixed(0);
};

export default averageSkillPlayerHelper;
