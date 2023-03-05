import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Country } from 'src/models/country/entities/country.entity';
import { League } from 'src/models/league/entities/league.entity';

export type RealTeamDocument = HydratedDocument<RealTeam>;

@Schema({
  versionKey: false,
  collection: 'realTeams',
})
export class RealTeam {
  @Prop({ required: true, type: Types.ObjectId, ref: Country.name })
  countryId: string;

  @Prop({ required: true, type: Types.ObjectId, ref: League.name })
  leagueId: string;

  @Prop({ required: true, unique: true, type: String })
  clubName: string;

  @Prop({ required: true, unique: true, type: String })
  logoClub: string;

  @Prop({
    type: {
      att: { required: true, type: Number, default: 0 },
      mid: { required: true, type: Number, default: 0 },
      def: { required: true, type: Number, default: 0 },
    },
  })
  skills: {
    att: number;
    mid: number;
    def: number;
  };
}

export const RealTeamSchema = SchemaFactory.createForClass(RealTeam);
