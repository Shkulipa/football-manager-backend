import { MigrationInterface } from 'mongo-migrate-ts/dist/lib/MigrationInterface';
import { Db } from 'mongodb/mongodb';
import { EUserRoles } from 'src/common/interfaces/userRoles.interfaces';

const email = 'admin@gmail.com';
export class test11677838512184 implements MigrationInterface {
  public async up(db: Db) {
    await db.collection('users').insertOne({
      email,
      username: 'admin',
      isConfirmEmail: true,
      isBlock: false,
      createdAt: Date.now(),
      password: '$2b$10$LA2mUbUx7lIoJ7QVAHPoBeohF6yTPEeeJZa01AiaHtxrGH561xRXS', // pass was hashed(real pass: 12345678)
      roles: [
        EUserRoles.COUNTRY_CREATE,
        EUserRoles.COUNTRY_DELETE,
        EUserRoles.COUNTRY_UPDATE,

        EUserRoles.LEAGUE_CREATE,
        EUserRoles.LEAGUE_DELETE,
        EUserRoles.LEAGUE_UPDATE,

        EUserRoles.REAL_TEAM_CREATE,
        EUserRoles.REAL_TEAM_UPDATE,
        EUserRoles.REAL_TEAM_DELETE,

        EUserRoles.PLAYER_CREATE,
        EUserRoles.PLAYER_UPDATE,
        EUserRoles.PLAYER_DELETE,
      ], // see roles here: src/common/interfaces/userRoles.interfaces.ts
    });
  }

  public async down(db: Db) {
    await db.collection('users').deleteMany({ email });
  }
}
