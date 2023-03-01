import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Country } from 'src/models/country/entities/country.entity';

export type LeagueDocument = HydratedDocument<League>;

@Schema({
  versionKey: false,
  collection: 'leagues',
})
export class League {
  @Prop({ required: true, type: Types.ObjectId, ref: Country.name })
  countryId: string;

  @Prop({ required: true, unique: true, type: String })
  name: string;

  @Prop({ required: true, unique: true, type: String })
  logoLeague: string;

  // name of file from logoLeague, by this field we can delete the file in s3
  @Prop({ required: true, unique: true, type: String })
  key: string;
}

export const LeagueSchema = SchemaFactory.createForClass(League);
