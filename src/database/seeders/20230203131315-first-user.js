module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});

    await db.collection('users').insertOne({
      email: 'firstuser@gmail.com',
      username: 'firstuser',
      isConfirmEmail: true,
      password: '$2b$10$LA2mUbUx7lIoJ7QVAHPoBeohF6yTPEeeJZa01AiaHtxrGH561xRXS', // pass is hashed(real pass: 12345678)
      token: null,
    });
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});

    await db.collection('users').remove({ email: 'firstuser@gmail.com' });
  },
};
