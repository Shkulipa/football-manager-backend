import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';
import { ECollectionName } from 'src/common/constants/collection-name.enum';
import { EUserRoles } from 'src/common/constants/user-roles.enum';
import { hashPasswordHelper } from 'src/common/helpers/hash-password.helper';

import { UsersDbDto } from '../dto/user-db.dto';

const arrayRoles: EUserRoles[] = [...Object.keys(EUserRoles).map((key) => EUserRoles[key])];

export type UserDocument = HydratedDocument<User>;
export type UserModel = Model<UsersDbDto>;

@Schema({
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: false },
  collection: ECollectionName.USERS,
})
export class User {
  @Prop({ required: true, unique: true, type: String })
  email: string;

  @Prop({ required: true, unique: true, type: String })
  username: string;

  @Prop({ required: true, type: Boolean, default: false })
  isConfirmEmail: boolean;

  @Prop({ required: true, type: String })
  password: string;

  @Prop({ required: true, type: Array, enum: [...arrayRoles], default: [] })
  roles: EUserRoles[];

  @Prop({ type: String })
  refreshToken: string;

  @Prop({ required: true, type: Number, default: 10000 })
  money: number;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', async function (next: any) {
  if (!this.isModified('password')) return next();
  this.password = await hashPasswordHelper(this.password);
  next();
});
