import { MigrationInterface } from 'mongo-migrate-ts/dist/lib/MigrationInterface';
import { Db } from 'mongodb/mongodb';

import { countryIdFirst, countryIdSecond } from '../constants/ids';

export class test11677838512184 implements MigrationInterface {
  public async up(db: Db) {
    await db.collection('countries').insertMany([
      {
        _id: countryIdFirst,
        country: 'england',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/250px-Flag_of_England.svg.png',
        key: `${countryIdFirst} not in backet of amazon`,
      },
      {
        _id: countryIdSecond,
        country: 'spain',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/250px-Flag_of_Spain.svg.png',
        key: `${countryIdSecond} not in backet of amazon`,
      },
    ]);
  }

  public async down(db: Db) {
    await db
      .collection('countries')
      .deleteMany({ $or: [{ _id: countryIdFirst }, { _id: countryIdSecond }] });
  }
}
