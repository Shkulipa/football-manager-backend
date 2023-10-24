import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model, Types } from 'mongoose';
import { ECollectionName } from 'src/common/constants/collection-name.enum';
import { SkillsDto } from 'src/modules/real-team/dto/skills.dto';
import { TSquadId } from 'src/modules/real-team/interfaces/squad.interface';
import { UserTeamDbDto } from 'src/modules/user-team/dto/user-team-db.dto';

import { User } from '../../user/entities/user.entity';

export type UserTeamDocument = HydratedDocument<UserTeam>;
export type UserTeamModel = Model<UserTeamDbDto>;

@Schema({
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: false },
  collection: ECollectionName.USERS_TEAM,
})
export class UserTeam {
  @Prop({ required: true, type: Types.ObjectId, ref: User.name })
  userId: Types.ObjectId;

  @Prop({ required: true, unique: true, type: String })
  clubName: string;

  @Prop({ type: String, default: '' })
  logoClub: string;

  @Prop({ required: true, type: Number, default: 1500 })
  ratingElo: number;

  @Prop({
    type: SkillsDto,
    required: true,
    default: { att: 0, mid: 0, def: 0 },
  })
  skills: SkillsDto;

  // Squads
  @Prop({ required: true, type: Object, default: {} })
  main: TSquadId;

  @Prop({ required: true, type: [Types.ObjectId], default: [] })
  bench: Types.ObjectId[];

  @Prop({ required: true, type: [Types.ObjectId], default: [] })
  reserve: Types.ObjectId[];
}

export const UserTeamSchema = SchemaFactory.createForClass(UserTeam);
