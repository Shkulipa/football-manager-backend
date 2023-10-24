import './../../../../env.setup';

import { MigrationInterface } from 'mongo-migrate-ts/dist/lib/MigrationInterface';
import { Db } from 'mongodb/mongodb';
import { EPlayerPositionName } from 'src/services/repositories/real-player/constants/player-position-name.enum';

import { ECollectionName } from './../../../common/constants/collection-name.enum';
import { usersData } from './../../../database/data/users.data';
import { userTeams } from './../../../database/data/users-team.data';
import data from './../../constants/ids';

const commonData = {
  ratingElo: 1500,
  logoClub: '',
  createdAt: new Date(),
  skills: {
    att: 64,
    mid: 65,
    def: 57,
  },
  main: {
    [EPlayerPositionName.GK]: data.realPlayer.realMadrid.p6,
    [EPlayerPositionName.RB]: data.realPlayer.chelsea.p5,
    [EPlayerPositionName.LCB]: data.realPlayer.bvb.p41,
    [EPlayerPositionName.RCB]: data.realPlayer.lille.p27,
    [EPlayerPositionName.LB]: data.realPlayer.barcelona.p14,
    [EPlayerPositionName.CDM]: data.realPlayer.manUnited.p16,
    [EPlayerPositionName.LCM]: data.realPlayer.inter.p18,
    [EPlayerPositionName.RCM]: data.realPlayer.manCity.p28,
    [EPlayerPositionName.RWM]: data.realPlayer.juventus.p48,
    [EPlayerPositionName.LWM]: data.realPlayer.atleticoMadrid.p15,
    [EPlayerPositionName.ST]: data.realPlayer.inter.p27,
  },
  bench: [
    data.realPlayer.chelsea.p43,
    data.realPlayer.juventus.p22,
    data.realPlayer.newcastleUnited.p17,
    data.realPlayer.rbLeipzig.p27,
    data.realPlayer.bvb.p20,
    data.realPlayer.barcelona.p20,
    data.realPlayer.rbLeipzig.p26,
  ],
  reserve: [
    data.realPlayer.parisSaintGermain.p7,
    data.realPlayer.napoli.p31,
    data.realPlayer.napoli.p10,
    data.realPlayer.tottenham.p31,
    data.realPlayer.manUnited.p12,
  ],
};

export class UserTeams implements MigrationInterface {
  public async up(db: Db) {
    await db.collection(ECollectionName.USERS_TEAM).insertOne({
      ...commonData,
      _id: userTeams[0],
      userId: usersData[0]._id,
      clubName: 'clubName admin',
    });
    await db.collection(ECollectionName.USERS_TEAM).insertOne({
      ...commonData,
      _id: userTeams[1],
      userId: usersData[1]._id,
      clubName: 'clubName user-1',
    });
    await db.collection(ECollectionName.USERS_TEAM).insertOne({
      ...commonData,
      _id: userTeams[2],
      userId: usersData[2]._id,
      clubName: 'clubName user-2',
    });
    await db.collection(ECollectionName.USERS_TEAM).insertOne({
      ...commonData,
      _id: userTeams[3],
      userId: usersData[3]._id,
      clubName: 'clubName user-3',
    });
  }

  public async down(db: Db) {
    await db.collection(ECollectionName.USERS_TEAM).deleteMany({ $or: userTeams });
  }
}
