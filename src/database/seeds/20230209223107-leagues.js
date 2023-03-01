const { countryIdFirst, countryIdSecond, leagueIdFirst, leagueIdSecond } = require('./../constants/ids');

module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
  
    await db.collection('leagues').insertMany([
      {
        _id: leagueIdFirst,
        countryId: countryIdFirst,
        name: 'Premier League',
        logoLeague: 'https://download.logo.wine/logo/Premier_League/Premier_League-Logo.wine.png',
        key: `${leagueIdFirst} not in backet of amazon`,
      },
      {
        _id: leagueIdSecond,
        countryId: countryIdSecond,
        name: 'LaLiga',
        logoLeague: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/LaLiga.svg/799px-LaLiga.svg.png',
        key: `${leagueIdSecond} not in backet of amazon`,
      },
    ]);
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  
    await db.collection('leagues').remove({ $or: [
      { _id: leagueIdFirst },
      { _id: leagueIdSecond }
    ]});
  }
};
