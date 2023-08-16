import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { ECollectionName } from 'src/common/constants/collection-name.enum';
import { League } from 'src/modules/league/entities/league.entity';

import { SkillsDto } from '../dto/skills.dto';
import { TSquad } from '../interfaces/squad.interface';

export type RealTeamDocument = HydratedDocument<RealTeam>;

@Schema({
  versionKey: false,
  collection: ECollectionName.REAL_TEAMS,
})
export class RealTeam {
  @Prop({ required: true, type: Types.ObjectId, ref: League.name })
  leagueId: Types.ObjectId;

  @Prop({ required: true, unique: true, type: String })
  clubName: string;

  @Prop({ required: true, unique: true, type: String })
  logoClub: string;

  @Prop({
    type: SkillsDto,
    required: true,
    default: { att: 0, mid: 0, def: 0 },
  })
  skills: SkillsDto;

  // Squads
  @Prop({ required: true, type: Object, default: {} })
  main: TSquad;

  @Prop({ required: true, type: [Types.ObjectId], default: [] })
  bench: Types.ObjectId[];
}

export const RealTeamSchema = SchemaFactory.createForClass(RealTeam);
