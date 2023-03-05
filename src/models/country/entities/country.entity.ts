import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CountryDocument = HydratedDocument<Country>;

@Schema({
  versionKey: false,
  collection: 'countries',
})
export class Country {
  @Prop({ required: true, unique: true, type: String })
  country: string;

  @Prop({ required: true, unique: true, type: String })
  flag: string;
}

export const CountrySchema = SchemaFactory.createForClass(Country);
