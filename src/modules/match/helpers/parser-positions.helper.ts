import { EPlayerPositionName } from 'src/modules/real-player/constants/player-position-name.enum';

/**
 * @info
 * becuase in engine there aren't positions like LCB or smth like that
 */
export const parserPositionsHelper = (position: string) => {
  // attack
  if (position === EPlayerPositionName.LCF || position === EPlayerPositionName.RCF) return EPlayerPositionName.CM;

  // middle
  if (
    position === EPlayerPositionName.AML ||
    position === EPlayerPositionName.AMC ||
    position === EPlayerPositionName.AMR
  )
    return EPlayerPositionName.CM;
  if (position === EPlayerPositionName.RWM) return EPlayerPositionName.RM;
  if (position === EPlayerPositionName.LWM) return EPlayerPositionName.LM;
  if (position === EPlayerPositionName.LCM || EPlayerPositionName.RCM) return EPlayerPositionName.CM;

  // defense
  if (position === EPlayerPositionName.LCB || position === EPlayerPositionName.RCB) return EPlayerPositionName.CB;
  if (position === EPlayerPositionName.LWB) return EPlayerPositionName.LB;
  if (position === EPlayerPositionName.RWB) return EPlayerPositionName.RB;
  if (
    position === EPlayerPositionName.LDM ||
    position === EPlayerPositionName.CDM ||
    position === EPlayerPositionName.RDM
  )
    return EPlayerPositionName.CB;

  return position;
};
