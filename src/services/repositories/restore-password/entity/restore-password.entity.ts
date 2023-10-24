import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { ECollectionName } from 'src/common/constants/collection-name.enum';

import { User } from '../../user/entities/user.entity';

export type RestorePasswordDocument = HydratedDocument<RestorePassword>;

@Schema({
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: false },
  collection: ECollectionName.RESTORE_PASSWORD,
})
export class RestorePassword {
  @Prop({ required: true, unique: true, type: String })
  activationId: string;

  @Prop({ required: true, type: String })
  token: string;

  @Prop({ required: true, type: Types.ObjectId, ref: User.name })
  userId: string;
}

export const RestorePasswordSchema = SchemaFactory.createForClass(RestorePassword);
