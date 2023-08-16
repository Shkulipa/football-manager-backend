import { EPlayerPositionName } from './player-position-name.enum';

type TPlayerPositions = {
  [key in EPlayerPositionName]: [number, number];
};

export const playerPositions: TPlayerPositions = {
  // offensive
  LCF: [455, 435],
  ST: [325, 435],
  RCF: [195, 435],

  // midfield
  LWM: [585, 350],
  AML: [455, 350],
  AMC: [325, 350],
  AMR: [195, 350],
  RWM: [65, 350],

  LM: [585, 265],
  LCM: [455, 265],
  CM: [325, 265],
  RCM: [195, 265],
  RM: [65, 265],

  // defensive
  LWB: [585, 165],
  LDM: [455, 165],
  CDM: [325, 165],
  RDM: [195, 165],
  RWB: [65, 165],

  LB: [585, 85],
  LCB: [455, 85],
  CB: [325, 85],
  RCB: [195, 85],
  RB: [65, 85],

  // GK
  GK: [0, 0],
};
