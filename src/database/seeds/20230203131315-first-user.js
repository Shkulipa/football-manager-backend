const email = 'firstuser@gmail.com';

module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});

    await db.collection('users').insertOne({
      email,
      username: 'firstuser',
      isConfirmEmail: true,
      password: '$2b$10$LA2mUbUx7lIoJ7QVAHPoBeohF6yTPEeeJZa01AiaHtxrGH561xRXS', // pass was hashed(real pass: 12345678)
      roles: ['ADD_TEAM', 'DELETE_TEAM'] // see roles here: src/common/interfaces/userRoles.interfaces.ts
    });
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});

    await db.collection('users').remove({ email });
  },
};
