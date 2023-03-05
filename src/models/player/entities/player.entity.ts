import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Types } from 'mongoose';
import { Country } from 'src/models/country/entities/country.entity';
import { RealTeam } from 'src/models/realTeam/entities/realTeam.entity';
import { EPositionPlayer } from '../interfaces/positionPlayer.interfaces';
import { ERolePlayer } from '../interfaces/rolePlayer.interfaces';
import { ETypeCard } from '../interfaces/typeCard.interfaces';
import { PlayerPhoto, PlayerPhotoModel } from './playerPhoto.entity';

export type PlayerDocument = HydratedDocument<Player>;

@Schema({
  versionKey: false,
  collection: 'players',
})
export class Player extends Document {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: Number })
  number: number;

  @Prop({ required: true, enum: EPositionPlayer })
  position: EPositionPlayer;

  @Prop({ required: true, type: Types.ObjectId, ref: Country.name })
  countryId: string;

  @Prop({ required: true, type: Types.ObjectId, ref: RealTeam.name })
  realTeamId: string;

  @Prop({ required: true, type: Types.ObjectId, ref: PlayerPhoto.name })
  photoId: string;

  @Prop({ required: true, type: [Number, Number], default: [0, 0] })
  currentPOS: [number, number];

  @Prop({ required: true, enum: ETypeCard, default: ETypeCard.ORDINARY })
  typeCard: ETypeCard;

  @Prop({ required: true, enum: ERolePlayer })
  role: ERolePlayer;

  @Prop({
    type: {
      passing: { required: true, type: Number, default: 1 },
      shooting: { required: true, type: Number, default: 1 },
      saving: { required: true, type: Number, default: 1 },
      tackling: { required: true, type: Number, default: 1 },
      agility: { required: true, type: Number, default: 1 },
      strength: { required: true, type: Number, default: 1 },
      penalty_taking: { required: true, type: Number, default: 1 },
      jumping: { required: true, type: Number, default: 1 },
    },
  })
  skill: {
    att: number;
    mid: number;
    def: number;
  };
}

export const PlayerSchema = SchemaFactory.createForClass(Player);

PlayerSchema.post('findOneAndDelete', async function (doc) {
  await PlayerPhotoModel.deleteMany({ _id: doc.photoId });
});
