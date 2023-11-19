import './../../../../env.setup';

import { MigrationInterface } from 'mongo-migrate-ts/dist/lib/MigrationInterface';
import { Db } from 'mongodb/mongodb';

import { ECollectionName } from './../../../common/constants/collection-name.enum';
import data from './../../constants/ids';
import { realTeamsData } from './../../data/real-teams.data';

const { AWS_BUCKET_NAME, AWS_BUCKET_REGION } = process.env;
const link = `https://${AWS_BUCKET_NAME}.s3.${AWS_BUCKET_REGION}.amazonaws.com/public/real-teams/`;

export class RealTeams implements MigrationInterface {
  public async up(db: Db) {
    const itemsRealTeams = realTeamsData.map((realTeam) => ({ ...realTeam, logoClub: link + realTeam.logoClub }));
    await db.collection(ECollectionName.REAL_TEAMS).insertMany(itemsRealTeams);
  }

  public async down(db: Db) {
    const arrObjRealTeams = Object.values(data.realTeams).map((realTeamId) => ({ _id: realTeamId }));
    await db.collection(ECollectionName.REAL_TEAMS).deleteMany({ $or: arrObjRealTeams });
  }
}
