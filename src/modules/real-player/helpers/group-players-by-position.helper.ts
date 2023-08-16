import { EPlayerPositionName } from '../constants/player-position-name.enum';
import { PlayerGroupDto } from '../dto/player-group.dto';

export const attackers = (players: PlayerGroupDto[]): PlayerGroupDto[] =>
  players.filter((player) =>
    [
      EPlayerPositionName.LCF,
      EPlayerPositionName.ST,
      EPlayerPositionName.RCF,
      EPlayerPositionName.LWM,
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
      EPlayerPositionName.RWM,
    ].some((position) => player.positions.includes(position)),
  );

export const midfielders = (players: PlayerGroupDto[]): PlayerGroupDto[] =>
  players.filter((player) =>
    [
      EPlayerPositionName.LM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.CM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.RM,
    ].some((position) => player.positions.includes(position)),
  );

export const defenders = (players: PlayerGroupDto[]): PlayerGroupDto[] =>
  players.filter((player) =>
    [
      EPlayerPositionName.LWB,
      EPlayerPositionName.LDM,
      EPlayerPositionName.CDM,
      EPlayerPositionName.RDM,
      EPlayerPositionName.RWB,
      EPlayerPositionName.LB,
      EPlayerPositionName.LCB,
      EPlayerPositionName.CB,
      EPlayerPositionName.RCB,
      EPlayerPositionName.RB,
      EPlayerPositionName.GK,
    ].some((position) => player.positions.includes(position)),
  );
