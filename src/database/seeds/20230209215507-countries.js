const { countryIdFirst, countryIdSecond } = require('./../constants/ids');

module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});

    await db.collection('countries').insertMany([
      {
        _id: countryIdFirst,
        country: 'england',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/250px-Flag_of_England.svg.png',
        key: `${countryIdFirst} not in backet of amazon`,
      },
      {
        _id: countryIdSecond,
        country: 'spain',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/250px-Flag_of_Spain.svg.png',
        key: `${countryIdSecond} not in backet of amazon`,
      },
    ]);
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
    
    await db.collection('countries').remove({ $or: [
      { _id: countryIdFirst },
      { _id: countryIdSecond }
    ]});
  },
};
