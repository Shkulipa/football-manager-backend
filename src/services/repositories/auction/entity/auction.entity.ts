import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { ECollectionName } from 'src/common/constants/collection-name.enum';
import { RealPlayer } from 'src/services/repositories/real-player/entities/real-player.entity';
import { User } from 'src/services/repositories/user/entities/user.entity';

export type AuctionDocument = HydratedDocument<Auction>;

@Schema({
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: false },
  collection: ECollectionName.AUCTION,
})
export class Auction {
  @Prop({ required: true, type: Types.ObjectId, ref: User.name })
  userId: string | Types.ObjectId;

  @Prop({ required: true, type: Types.ObjectId, ref: RealPlayer.name })
  playerId: string | Types.ObjectId;

  @Prop({ required: true, type: Number, min: 10 })
  price: number;
}

export const AuctionSchema = SchemaFactory.createForClass(Auction);
