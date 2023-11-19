import { Types } from 'mongoose';
import { RealPlayerFullInfoDto } from 'src/modules/real-player/dto/real-player-full-info.dto';

import { EPlayerPositionName } from './../../../services/repositories/real-player/constants/player-position-name.enum';

export type TSquadId = Record<EPlayerPositionName, string | Types.ObjectId>;
export type TSquadRealTeamFullInfo = Record<EPlayerPositionName, RealPlayerFullInfoDto>;
