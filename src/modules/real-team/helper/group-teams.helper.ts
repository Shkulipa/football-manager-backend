import { GetLeagueByIdResDto } from 'src/modules/league/dto/get-league-by-id-res.dto';

import { RealTeamShortInfoDto } from '../dto/real-team-short-info.dto';

export const groupTeamsHelper = (teams: RealTeamShortInfoDto[]) => {
  const result = {};

  // Loop through the teams data
  teams.forEach((item: RealTeamShortInfoDto) => {
    // Get information about the country
    const country = item.league.country.name;

    // Get information about the league
    const league = item.league.name;

    // Get information about the team
    const team = {
      _id: item._id,
      clubName: item.clubName,
      logoClub: item.logoClub,
      skills: item.skills,
    };

    // If country doesn't exist in the result, create it
    if (!result[country]) {
      result[country] = {
        _id: item.league.country._id,
        flag: item.league.country.flag,
        name: country, // country name
        leagues: [], // empty array for holding leagues
      };
    }

    // Check if the league already exists for this country
    const existingLeague = result[country].leagues.find((l: GetLeagueByIdResDto) => l.name === league);

    if (existingLeague) {
      // If the league exists, add the team to it
      existingLeague.teams.push(team);
    } else {
      // If the league doesn't exist, create it
      result[country].leagues.push({
        _id: item.league._id,
        logoLeague: item.league.logoLeague,
        name: league,
        teams: [team],
      });
    }
  });

  // Convert the object to an array
  const groupedTeams = Object.values(result);

  return groupedTeams;
};
