import './../../../../env.setup';

import { MigrationInterface } from 'mongo-migrate-ts/dist/lib/MigrationInterface';
import { Db } from 'mongodb/mongodb';

import { ECollectionName } from './../../../common/constants/collection-name.enum';
import data from './../../constants/ids';
import { countriesData } from './../../data/countries.data';

const { AWS_BUCKET_NAME, AWS_BUCKET_REGION } = process.env;
const link = `https://${AWS_BUCKET_NAME}.s3.${AWS_BUCKET_REGION}.amazonaws.com/public/countries/`;

export class Countries implements MigrationInterface {
  public async up(db: Db) {
    const itemsCountries = countriesData.map((country) => ({ ...country, flag: link + country.flag }));
    await db.collection(ECollectionName.COUNTRIES).insertMany(itemsCountries);
  }

  public async down(db: Db) {
    const arrObjCountries = Object.values(data.countries).map((countryId) => ({ _id: countryId }));
    await db.collection(ECollectionName.COUNTRIES).deleteMany({ $or: arrObjCountries });
  }
}
