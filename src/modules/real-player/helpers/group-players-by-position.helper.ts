import { PlayerGroupDto } from '../dto/player-group.dto';
import { positions } from './../../../modules/packs/constants/zone-positons';

export const attackers = (players: PlayerGroupDto[]): PlayerGroupDto[] =>
  players.filter((player) => positions.attackers.some((position) => player.positions.includes(position)));

export const midfielders = (players: PlayerGroupDto[]): PlayerGroupDto[] =>
  players.filter((player) => positions.midfielders.some((position) => player.positions.includes(position)));

export const defenders = (players: PlayerGroupDto[]): PlayerGroupDto[] =>
  players.filter((player) => positions.defenders.some((position) => player.positions.includes(position)));
