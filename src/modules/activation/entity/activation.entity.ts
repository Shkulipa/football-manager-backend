import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { ECollectionName } from 'src/common/constants/collection-name.enum';
import { User } from 'src/modules/user/entities/user.entity';

export type ActivationDocument = HydratedDocument<Activation>;

@Schema({
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: false },
  collection: ECollectionName.ACTIVATIONS,
})
export class Activation {
  @Prop({ required: true, unique: true, type: String })
  activationId: string;

  @Prop({ required: true, type: String })
  token: string;

  @Prop({ required: true, type: Types.ObjectId, ref: User.name })
  userId: string;
}

export const ActivationSchema = SchemaFactory.createForClass(Activation);
