import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { ECollectionName } from 'src/common/constants/collection-name.enum';
import { Country } from 'src/services/repositories/country/entities/country.entity';

export type LeagueDocument = HydratedDocument<League>;

@Schema({
  versionKey: false,
  collection: ECollectionName.LEAGUES,
})
export class League {
  @Prop({ required: true, type: Types.ObjectId, ref: Country.name })
  countryId: Types.ObjectId;

  @Prop({ required: true, unique: true, type: String })
  name: string;

  @Prop({ required: true, unique: true, type: String })
  logoLeague: string;
}

export const LeagueSchema = SchemaFactory.createForClass(League);
