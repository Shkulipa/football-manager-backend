import { Types } from 'mongoose';
import { EPlayerPositionName } from 'src/modules/real-player/constants/player-position-name.enum';

export type TSquad = Record<EPlayerPositionName, string | Types.ObjectId>;
