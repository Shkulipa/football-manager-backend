import { PlayerSkillsDto } from 'src/services/repositories/real-player/dto/player-skills.dto';

import { maxRatingPlayer } from '../constants/common-player-values';

export const ratingHelper = (skills: PlayerSkillsDto) => {
  const values = Object.values(skills);
  const sum = values.reduce((acc, curr) => acc + Number(curr), 0);
  const average = sum / values.length;
  const rating = (average * maxRatingPlayer) / 100;
  const fixedRating = rating.toFixed(0);

  return +fixedRating;
};
