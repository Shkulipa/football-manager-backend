/**
 * S - can be 1 - won first team , 0 - won second team, 0.5 - draw
 */
export const getNewRatingElo = (ratingTeam1: number, ratingTeam2: number, S: number) => {
  const K = 32;

  const E_A = 1 / (1 + Math.pow(10, (ratingTeam2 - ratingTeam1) / 400));

  const ratingTeam1New = ratingTeam1 + K * (S - E_A);
  const ratingTeam2new = ratingTeam2 - (ratingTeam1New - ratingTeam1);

  return { ratingTeam1: +ratingTeam1New.toFixed(0), ratingTeam2: +ratingTeam2new.toFixed(0) };
};
