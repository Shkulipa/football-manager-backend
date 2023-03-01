const mongoose = require('mongoose');

const countryIdFirst = new mongoose.Types.ObjectId('63e56b51b553d3f83169be98');
const countryIdSecond = new mongoose.Types.ObjectId('63e57293e31310c7c39965cb');

const leagueIdFirst = new mongoose.Types.ObjectId('63e5746cb4b2884f942bdcb1');
const leagueIdSecond = new mongoose.Types.ObjectId('63e5746cb4b2884f942bdcb2');

module.exports = {
  countryIdFirst,
  countryIdSecond,
  leagueIdFirst,
  leagueIdSecond,
};
