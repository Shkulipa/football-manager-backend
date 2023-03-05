import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document, model } from 'mongoose';

export type PlayerPhotoDocument = HydratedDocument<PlayerPhoto>;

const collection = 'playersPhoto';

@Schema({
  versionKey: false,
  collection,
})
export class PlayerPhoto extends Document {
  @Prop({ required: true, unique: true, type: String })
  urlPhoto: string;
}

export const PlayerPhotoSchema = SchemaFactory.createForClass(PlayerPhoto);

export const PlayerPhotoModel = model(collection, PlayerPhotoSchema);
