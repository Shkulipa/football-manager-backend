import './../../../../env.setup';

import { MigrationInterface } from 'mongo-migrate-ts/dist/lib/MigrationInterface';
import { Db } from 'mongodb/mongodb';

import { ECollectionName } from './../../../common/constants/collection-name.enum';
import data from './../../constants/ids';
import { leaguesData } from './../../data/leagues.data';

const { AWS_BUCKET_NAME, AWS_BUCKET_REGION } = process.env;
const link = `https://${AWS_BUCKET_NAME}.s3.${AWS_BUCKET_REGION}.amazonaws.com/public/leagues/`;

export class Leagues implements MigrationInterface {
  public async up(db: Db) {
    const itemsLeagues = leaguesData.map((league) => ({ ...league, logoLeague: link + league.logoLeague }));
    await db.collection(ECollectionName.LEAGUES).insertMany(itemsLeagues);
  }

  public async down(db: Db) {
    const arrObjLeagues = Object.values(data.leagues).map((leagueId) => ({ _id: leagueId }));
    await db.collection(ECollectionName.LEAGUES).deleteMany({ $or: arrObjLeagues });
  }
}
