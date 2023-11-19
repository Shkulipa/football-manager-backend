import { positions } from 'src/modules/packs/constants/zone-positons';

import { PlayerGroupDto } from '../dto/player-group.dto';

export const attackers = (players: PlayerGroupDto[]): PlayerGroupDto[] =>
  players.filter((player) => positions.attackers.some((position) => player.positions.includes(position)));

export const midfielders = (players: PlayerGroupDto[]): PlayerGroupDto[] =>
  players.filter((player) => positions.midfielders.some((position) => player.positions.includes(position)));

export const defenders = (players: PlayerGroupDto[]): PlayerGroupDto[] =>
  players.filter((player) => positions.defenders.some((position) => player.positions.includes(position)));
