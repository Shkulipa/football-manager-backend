const email = 'admin@gmail.com';

module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});

    await db.collection('users').insertOne({
      email,
      username: 'admin',
      isConfirmEmail: true,
      isBlock: false,
      createdAt: Date.now(),
      password: '$2b$10$LA2mUbUx7lIoJ7QVAHPoBeohF6yTPEeeJZa01AiaHtxrGH561xRXS', // pass was hashed(real pass: 12345678)
      roles: [
        'COUNTRY_CREATE', 
        'COUNTRY_DELETE', 
        'COUNTRY_UPDATE', 
        'LEAGUE_CREATE', 
        'LEAGUE_DELETE', 
        'LEAGUE_UPDATE',
        'REAL_TEAM_CREATE',
        'REAL_TEAM_UPDATE',
        'REAL_TEAM_DELETE',
        'PLAYER_CREATE',
        'PLAYER_UPDATE',
        'PLAYER_DELETE'
      ] // see roles here: src/common/interfaces/userRoles.interfaces.ts
    });
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});

    await db.collection('users').remove({ email });
  },
};