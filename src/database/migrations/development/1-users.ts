import { MigrationInterface } from 'mongo-migrate-ts/dist/lib/MigrationInterface';
import { Db } from 'mongodb/mongodb';

import { ECollectionName } from './../../../common/constants/collection-name.enum';
import { EUserRoles } from './../../../common/constants/user-roles.enum';
import { usersData } from './../../../database/data/users.data';

const commonData = {
  isConfirmEmail: true,
  createdAt: new Date(),
  money: 10000,
  password: '$2b$10$GcjAf87930jVKT8n2CVcx.6ExY21VyD3Fo5V0t1ORIpgr.275gPPq', // pass was hashed(real pass: 123456A@a)
  roles: [],
  packs: {
    bronze: 1,
    silver: 1,
    gold: 1,
  },
};

export class Users implements MigrationInterface {
  public async up(db: Db) {
    await db.collection(ECollectionName.USERS).insertOne({
      _id: usersData[0]._id,
      email: usersData[0].email,
      username: 'admin',
      ...commonData,
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

    await db.collection(ECollectionName.USERS).insertOne({
      _id: usersData[1]._id,
      email: usersData[1].email,
      username: 'user1',
      ...commonData,
    });

    await db.collection(ECollectionName.USERS).insertOne({
      _id: usersData[2]._id,
      email: usersData[2].email,
      username: 'user2',
      ...commonData,
    });

    await db.collection(ECollectionName.USERS).insertOne({
      _id: usersData[3]._id,
      email: usersData[3].email,
      username: 'user3',
      ...commonData,
    });
  }

  public async down(db: Db) {
    const emails = usersData.map((u) => u.email);
    await db.collection('users').deleteMany({ email: { $in: emails } });
  }
}
