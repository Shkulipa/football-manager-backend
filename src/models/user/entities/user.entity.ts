import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { hash } from 'bcrypt';

export type UserDocument = HydratedDocument<User>;

@Schema({
  versionKey: false,
})
export class User {
  @Prop({ required: true, unique: true, type: String })
  email: string;

  @Prop({ required: true, type: Boolean, default: false })
  isConfirmEmail: boolean;

  @Prop({ required: true, unique: true, type: String })
  username: string;

  @Prop({ required: true, type: String })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', async function (next: any) {
  if (!this.isModified('password')) return next();
  this.password = await hash(this.password, 10);
  next();
});
