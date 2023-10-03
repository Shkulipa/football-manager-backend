import { Types } from 'mongoose';
import { EPlayerPositionName } from 'src/modules/real-player/constants/player-position-name.enum';
import { RealPlayerFullInfoDto } from 'src/modules/real-player/dto/real-player-full-info.dto';

export type TSquadId = Record<EPlayerPositionName, string | Types.ObjectId>;
export type TSquadRealTeamFullInfo = Record<EPlayerPositionName, RealPlayerFullInfoDto>;
