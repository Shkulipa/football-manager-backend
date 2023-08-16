import data from '../constants/ids';

export const leaguesData = [
  {
    _id: data.leagues.bundesliga,
    countryId: data.countries.germany,
    name: 'Bundesliga',
    logoLeague: 'bundesliga.png',
  },
  {
    _id: data.leagues.spainLaLiga,
    countryId: data.countries.spain,
    name: 'La Liga',
    logoLeague: 'la-liga.png',
  },
  {
    _id: data.leagues.frenchLigue1,
    countryId: data.countries.france,
    name: 'Ligue 1',
    logoLeague: 'liga-1-french.png',
  },
  {
    _id: data.leagues.englandPremierLeague,
    countryId: data.countries.england,
    name: 'Premier League',
    logoLeague: 'premier-league-england.png',
  },
  {
    _id: data.leagues.italySeriaA,
    countryId: data.countries.italy,
    name: 'Seria A',
    logoLeague: 'seria-a.png',
  },
];
