import { MigrationInterface } from 'mongo-migrate-ts/dist/lib/MigrationInterface';
import { Db } from 'mongodb/mongodb';

import { EUserRoles } from './../../../common/constants/user-roles.enum';

const email = 'admin@gmail.com';
export class firstUser implements MigrationInterface {
  public async up(db: Db) {
    await db.collection('users').insertOne({
      email,
      username: 'admin',
      isConfirmEmail: true,
      createdAt: new Date(),
      money: 10000,
      password: '$2b$10$GcjAf87930jVKT8n2CVcx.6ExY21VyD3Fo5V0t1ORIpgr.275gPPq', // pass was hashed(real pass: 123456A@a)
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
        EUserRoles.REAL_PLAYER_CREATE,
        EUserRoles.REAL_PLAYER_UPDATE,
        EUserRoles.REAL_PLAYER_DELETE,
      ],
    });
  }

  public async down(db: Db) {
    await db.collection('users').deleteMany({ email });
  }
}
