import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Country } from 'src/models/country/entities/country.entity';
import { ETypeCard } from 'src/common/interfaces/typeCard.interfaces';
import { EPositionPlayer } from 'src/common/interfaces/positionPlayer.interfaces';
import { ERolePlayer } from 'src/common/interfaces/rolePlayer.interfaces';
import { RealTeam } from 'src/models/realTeam/entities/realTeam.entity';

export type PlayerDocument = HydratedDocument<Player>;

@Schema({
  versionKey: false,
  collection: 'players',
})
export class Player {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: Number })
  number: number;

  @Prop({ required: true, type: EPositionPlayer })
  position: EPositionPlayer;

  @Prop({ required: true, type: Types.ObjectId, ref: Country.name })
  countryId: string;

  @Prop({ required: true, type: Types.ObjectId, ref: RealTeam.name })
  realTeamId: string;

  @Prop({ required: true, unique: true, type: String })
  urlPhoto: string;

  // name of file from Photo, by this field we can delete the file in s3
  @Prop({ required: true, unique: true, type: String })
  key: string;

  @Prop({ required: true, type: [Number, Number], default: [0, 0] })
  currentPOS: [number, number];

  @Prop({ required: true, type: ETypeCard, default: ETypeCard.ORDINARY })
  typeCard: ETypeCard;

  @Prop({ required: true, type: ERolePlayer })
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
