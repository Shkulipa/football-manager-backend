import { RealPlayerDto } from './../dto/real-player.dto';
import { realPlayersArsenal } from './arsenal.real-players';
import { realPlayerAtleticoMadrid } from './atletico-madrid.real-players';
import { realPlayersBarcelona } from './barcelona.real-players';
import { realPlayersBvb } from './bvb.real-players';
import { realPlayersChelsea } from './chelsea.real-players';
import { realPlayerFCBayern } from './fc-bayern.real-players';
import { realPlayerInter } from './inter.real-players';
import { realPlayerJuventus } from './juventus.real-players';
import { realPlayerLazio } from './lazio.real-players';
import { realPlayerLille } from './lille.real-players';
import { realPlayersLiverpool } from './liverpool.real-players';
import { realPlayersManCity } from './man-city.players';
import { realPlayersManUnited } from './man-united.real-players';
import { realPlayersMilan } from './milan.real-players';
import { realPlayersNapoli } from './napoli.real-players';
import { realPlayersNewcastleUnited } from './newcastle-united.real-players';
import { realPlayersParisSaintGermain } from './paris-saint-germain.real-players';
import { realPlayerRbLeipzig } from './rb-leipzig.real-players';
import { realPlayersRealMadrid } from './real-madrid.real-players';
import { realPlayersTottenham } from './tottenham.real-players';

export const allRealPlayers: RealPlayerDto[] = [
  ...realPlayersRealMadrid,
  ...realPlayerFCBayern,
  ...realPlayersManCity,
  ...realPlayersLiverpool,
  ...realPlayersBarcelona,
  ...realPlayersParisSaintGermain,
  ...realPlayersChelsea,
  ...realPlayersBvb,
  ...realPlayersMilan,
  ...realPlayersNapoli,
  ...realPlayersManUnited,
  ...realPlayersArsenal,
  ...realPlayersNewcastleUnited,
  ...realPlayersTottenham,
  ...realPlayerRbLeipzig,
  ...realPlayerLille,
  ...realPlayerLazio,
  ...realPlayerJuventus,
  ...realPlayerInter,
  ...realPlayerAtleticoMadrid,
];
