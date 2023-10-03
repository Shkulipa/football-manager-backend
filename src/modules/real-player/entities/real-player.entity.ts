import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Types } from 'mongoose';
import { ECollectionName } from 'src/common/constants/collection-name.enum';
import { Country } from 'src/modules/country/entities/country.entity';
import { RealTeam } from 'src/modules/real-team/entities/real-team.entity';

import { maxAgePlayer, maxRatingPlayer, minAgePlayer, minRatingPlayer } from '../constants/common-player-values';
import { EPlayerPositionName } from '../constants/player-position-name.enum';
import { PlayerSkillsDto } from '../dto/player-skills.dto';

export type RealPlayerDocument = HydratedDocument<RealPlayer>;

@Schema({
  versionKey: false,
  collection: ECollectionName.REAL_PLAYERS,
})
export class RealPlayer extends Document {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: Number })
  number: number;

  @Prop({ required: true, type: Array, enum: EPlayerPositionName })
  positions: EPlayerPositionName[];

  @Prop({ required: true, type: Types.ObjectId, ref: Country.name })
  countryId: Types.ObjectId;

  @Prop({ required: true, type: Types.ObjectId, ref: RealTeam.name })
  realTeamId: Types.ObjectId;

  @Prop({ type: Types.ObjectId })
  photo: string;

  @Prop({ required: true, type: Number, min: minAgePlayer, max: maxAgePlayer })
  age: number;

  @Prop({
    required: true,
    type: PlayerSkillsDto,
  })
  skills: PlayerSkillsDto;

  @Prop({
    required: true,
    type: Number,
    min: minRatingPlayer,
    max: maxRatingPlayer,
  })
  rating: number;
}

export const PlayerSchema = SchemaFactory.createForClass(RealPlayer);
