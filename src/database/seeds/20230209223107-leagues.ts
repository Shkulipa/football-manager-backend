import {
  countryIdFirst,
  countryIdSecond,
  leagueIdFirst,
  leagueIdSecond,
} from './../constants/ids';

import { Db } from 'mongodb/mongodb';
import { MigrationInterface } from 'mongo-migrate-ts/dist/lib/MigrationInterface';

export class test11677838512184 implements MigrationInterface {
  public async up(db: Db) {
    await db.collection('leagues').insertMany([
      {
        _id: leagueIdFirst,
        countryId: countryIdFirst,
        name: 'Premier League',
        logoLeague:
          'https://download.logo.wine/logo/Premier_League/Premier_League-Logo.wine.png',
        key: `${leagueIdFirst} not in backet of amazon`,
      },
      {
        _id: leagueIdSecond,
        countryId: countryIdSecond,
        name: 'LaLiga',
        logoLeague:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/LaLiga.svg/799px-LaLiga.svg.png',
        key: `${leagueIdSecond} not in backet of amazon`,
      },
    ]);
  }

  public async down(db: Db) {
    await db
      .collection('leagues')
      .deleteMany({ $or: [{ _id: leagueIdFirst }, { _id: leagueIdSecond }] });
  }
}
