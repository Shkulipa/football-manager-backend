import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FlagDocument = HydratedDocument<Flag>;

@Schema({
  versionKey: false,
})
export class Flag {
  @Prop({ required: true, unique: true, type: String })
  name: string;

  @Prop({ required: true, unique: true, type: String })
  urlFlag: string;

  // name of file from urlFlag, by this field we can delete the file in s3
  @Prop({ required: true, unique: true, type: String })
  key: string;
}

export const FlagSchema = SchemaFactory.createForClass(Flag);
