import './../../../../env.setup';

import { MigrationInterface } from 'mongo-migrate-ts/dist/lib/MigrationInterface';
import { Db } from 'mongodb/mongodb';

import { ECollectionName } from './../../../common/constants/collection-name.enum';
import { ratingHelper } from './../../../modules/real-player/helpers/rating.helper';
import data from './../../constants/ids';
import { allRealPlayers } from './../../data/real-players/all.real-players';

const { AWS_BUCKET_NAME, AWS_BUCKET_REGION } = process.env;
const link = `https://${AWS_BUCKET_NAME}.s3.${AWS_BUCKET_REGION}.amazonaws.com/public/real-players/`;
const playersIds = Object.values(data.realPlayer);

export class RealPlayers implements MigrationInterface {
  public async up(db: Db) {
    const itemsRealTeams = allRealPlayers.map((realPlayer) => {
      const rating = ratingHelper(realPlayer.skills); // calculate rating is based on skills
      const updatedRealPlayer = {
        ...realPlayer,
        rating,
      };

      if (realPlayer.photo) updatedRealPlayer.photo = link + realPlayer.photo;

      return updatedRealPlayer;
    });
    await db.collection(ECollectionName.REAL_PLAYERS).insertMany(itemsRealTeams);
  }

  public async down(db: Db) {
    const arrObjRealPlayers = playersIds.map((realPlayerId) => ({ _id: realPlayerId }));
    await db.collection(ECollectionName.REAL_PLAYERS).deleteMany({ $or: arrObjRealPlayers });
  }
}
