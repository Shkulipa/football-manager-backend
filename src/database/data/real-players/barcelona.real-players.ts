import { EPlayerPositionName } from 'src/services/repositories/real-player/constants/player-position-name.enum';

import data from './../../constants/ids';
import { RealPlayerDto } from './../dto/real-player.dto';

const players: RealPlayerDto[] = [
  {
    _id: data.realPlayer.barcelona.p1,
    name: 'Marc-André ter Stegen',
    number: 59,
    countryId: data.countries.germany,
    age: 30,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 96,
      shooting: 99,
      saving: 13,
      tackling: 99,
      agility: 75,
      strength: 80,
      penalty_taking: 23,
      jumping: 73,
    },
  },
  {
    _id: data.realPlayer.barcelona.p2,
    name: 'Iñaki Peña',
    number: 53,
    countryId: data.countries.spain,
    age: 23,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 71,
      shooting: 72,
      saving: 15,
      tackling: 61,
      agility: 47,
      strength: 85,
      penalty_taking: 16,
      jumping: 60,
    },
  },
  {
    _id: data.realPlayer.barcelona.p3,
    name: 'Arnau Tenas',
    number: 79,
    countryId: data.countries.spain,
    age: 21,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 46,
      shooting: 74,
      saving: 21,
      tackling: 60,
      agility: 73,
      strength: 60,
      penalty_taking: 6,
      jumping: 47,
    },
  },
  {
    _id: data.realPlayer.barcelona.p4,
    name: 'Nil Ruiz',
    number: 55,
    countryId: data.countries.spain,
    age: 19,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 60,
      shooting: 64,
      saving: 25,
      tackling: 32,
      agility: 41,
      strength: 55,
      penalty_taking: 5,
      jumping: 36,
    },
  },
  {
    _id: data.realPlayer.barcelona.p5,
    name: 'Ander Astrálaga',
    number: 15,
    countryId: data.countries.spain,
    age: 18,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 56,
      shooting: 26,
      saving: 9,
      tackling: 64,
      agility: 55,
      strength: 35,
      penalty_taking: 19,
      jumping: 34,
    },
  },
  {
    _id: data.realPlayer.barcelona.p6,
    name: 'Arnau Rafús',
    number: 76,
    countryId: data.countries.spain,
    age: 19,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 41,
      shooting: 38,
      saving: 21,
      tackling: 45,
      agility: 29,
      strength: 48,
      penalty_taking: 17,
      jumping: 57,
    },
  },
  {
    _id: data.realPlayer.barcelona.p7,
    name: 'Alejandro Ramos',
    number: 67,
    countryId: data.countries.spain,
    age: 18,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 31,
      shooting: 44,
      saving: 8,
      tackling: 40,
      agility: 36,
      strength: 40,
      penalty_taking: 14,
      jumping: 49,
    },
  },
  {
    _id: data.realPlayer.barcelona.p8,
    name: 'Marcos Alonso',
    number: 37,
    countryId: data.countries.spain,
    age: 31,
    positions: [EPlayerPositionName.LWB, EPlayerPositionName.LB],
    skills: {
      passing: 76,
      shooting: 91,
      saving: 21,
      tackling: 57,
      agility: 55,
      strength: 89,
      penalty_taking: 18,
      jumping: 70,
    },
  },
  {
    _id: data.realPlayer.barcelona.p9,
    name: 'Gerard Gonzàlez',
    number: 66,
    countryId: data.countries.spain,
    age: 18,
    positions: [EPlayerPositionName.LB],
    skills: {
      passing: 50,
      shooting: 51,
      saving: 10,
      tackling: 34,
      agility: 35,
      strength: 36,
      penalty_taking: 19,
      jumping: 52,
    },
  },
  {
    _id: data.realPlayer.barcelona.p10,
    name: 'Román Vega',
    number: 9,
    countryId: data.countries.argentina,
    age: 18,
    positions: [EPlayerPositionName.LB, EPlayerPositionName.LWB],
    skills: {
      passing: 51,
      shooting: 45,
      saving: 6,
      tackling: 59,
      agility: 37,
      strength: 54,
      penalty_taking: 6,
      jumping: 42,
    },
  },
  {
    _id: data.realPlayer.barcelona.p11,
    name: 'Alejandro Balde',
    number: 88,
    countryId: data.countries.spain,
    age: 18,
    positions: [EPlayerPositionName.LB, EPlayerPositionName.LWM],
    skills: {
      passing: 91,
      shooting: 81,
      saving: 24,
      tackling: 61,
      agility: 63,
      strength: 79,
      penalty_taking: 10,
      jumping: 51,
    },
  },
  {
    _id: data.realPlayer.barcelona.p12,
    name: 'Jordi Alba',
    number: 12,
    countryId: data.countries.spain,
    age: 33,
    positions: [EPlayerPositionName.LB],
    skills: {
      passing: 68,
      shooting: 60,
      saving: 23,
      tackling: 81,
      agility: 94,
      strength: 86,
      penalty_taking: 20,
      jumping: 73,
    },
  },
  {
    _id: data.realPlayer.barcelona.p13,
    name: 'Alpha Dionkou',
    number: 40,
    countryId: data.countries.restWorld,
    age: 20,
    positions: [EPlayerPositionName.RB],
    skills: {
      passing: 69,
      shooting: 46,
      saving: 9,
      tackling: 60,
      agility: 37,
      strength: 60,
      penalty_taking: 24,
      jumping: 46,
    },
  },
  {
    _id: data.realPlayer.barcelona.p14,
    name: 'Sergi Rosanas',
    number: 87,
    countryId: data.countries.spain,
    age: 21,
    positions: [EPlayerPositionName.RB, EPlayerPositionName.RWB],
    skills: {
      passing: 48,
      shooting: 48,
      saving: 14,
      tackling: 30,
      agility: 67,
      strength: 66,
      penalty_taking: 18,
      jumping: 29,
    },
  },
  {
    _id: data.realPlayer.barcelona.p15,
    name: 'Pablo López',
    number: 18,
    countryId: data.countries.spain,
    age: 18,
    positions: [EPlayerPositionName.RB],
    skills: {
      passing: 18,
      shooting: 58,
      saving: 8,
      tackling: 36,
      agility: 40,
      strength: 58,
      penalty_taking: 6,
      jumping: 18,
    },
  },
  {
    _id: data.realPlayer.barcelona.p16,
    name: 'Álex Zalaya',
    number: 29,
    countryId: data.countries.spain,
    age: 24,
    positions: [
      EPlayerPositionName.CB,
      EPlayerPositionName.RCB,
      EPlayerPositionName.LCB,
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
    ],
    skills: {
      passing: 45,
      shooting: 43,
      saving: 14,
      tackling: 55,
      agility: 33,
      strength: 28,
      penalty_taking: 24,
      jumping: 60,
    },
  },
  {
    _id: data.realPlayer.barcelona.p17,
    name: 'Chadi Riad',
    number: 2,
    countryId: data.countries.restWorld,
    age: 19,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 35,
      shooting: 42,
      saving: 6,
      tackling: 47,
      agility: 58,
      strength: 65,
      penalty_taking: 18,
      jumping: 53,
    },
  },
  {
    _id: data.realPlayer.barcelona.p18,
    name: 'Julian Araujo',
    number: 30,
    countryId: data.countries.restWorld,
    age: 20,
    positions: [EPlayerPositionName.RB, EPlayerPositionName.RM],
    skills: {
      passing: 49,
      shooting: 69,
      saving: 14,
      tackling: 61,
      agility: 65,
      strength: 53,
      penalty_taking: 9,
      jumping: 57,
    },
  },
  {
    _id: data.realPlayer.barcelona.p19,
    name: 'Jules Koundé',
    number: 14,
    countryId: data.countries.france,
    age: 23,
    positions: [
      EPlayerPositionName.CB,
      EPlayerPositionName.RCB,
      EPlayerPositionName.LCB,
      EPlayerPositionName.RWB,
      EPlayerPositionName.RB,
    ],
    skills: {
      passing: 95,
      shooting: 67,
      saving: 8,
      tackling: 95,
      agility: 89,
      strength: 73,
      penalty_taking: 25,
      jumping: 67,
    },
  },
  {
    _id: data.realPlayer.barcelona.p20,
    name: 'Andreas Christensen',
    number: 57,
    countryId: data.countries.restWorld,
    age: 26,
    positions: [
      EPlayerPositionName.CB,
      EPlayerPositionName.RCB,
      EPlayerPositionName.LCB,
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.CDM,
      EPlayerPositionName.LDM,
      EPlayerPositionName.RDM,
    ],
    skills: {
      passing: 65,
      shooting: 79,
      saving: 20,
      tackling: 77,
      agility: 77,
      strength: 91,
      penalty_taking: 18,
      jumping: 79,
    },
  },
  {
    _id: data.realPlayer.barcelona.p21,
    name: 'Ronald Araujo',
    number: 74,
    countryId: data.countries.restWorld,
    age: 23,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 95,
      shooting: 90,
      saving: 12,
      tackling: 86,
      agility: 74,
      strength: 78,
      penalty_taking: 10,
      jumping: 69,
    },
  },
  {
    _id: data.realPlayer.barcelona.p22,
    name: 'Arnau Casas',
    number: 35,
    countryId: data.countries.spain,
    age: 18,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 45,
      shooting: 51,
      saving: 10,
      tackling: 31,
      agility: 37,
      strength: 65,
      penalty_taking: 24,
      jumping: 59,
    },
  },
  {
    _id: data.realPlayer.barcelona.p23,
    name: 'Eric García',
    number: 91,
    countryId: data.countries.spain,
    age: 21,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 60,
      shooting: 84,
      saving: 20,
      tackling: 72,
      agility: 80,
      strength: 64,
      penalty_taking: 5,
      jumping: 72,
    },
  },
  {
    _id: data.realPlayer.barcelona.p24,
    name: 'Pelayo',
    number: 36,
    countryId: data.countries.spain,
    age: 19,
    positions: [
      EPlayerPositionName.CB,
      EPlayerPositionName.RCB,
      EPlayerPositionName.LCB,
      EPlayerPositionName.CDM,
      EPlayerPositionName.LDM,
      EPlayerPositionName.RDM,
    ],
    skills: {
      passing: 50,
      shooting: 26,
      saving: 5,
      tackling: 40,
      agility: 49,
      strength: 64,
      penalty_taking: 13,
      jumping: 41,
    },
  },
  {
    _id: data.realPlayer.barcelona.p25,
    name: 'Diego Almeida',
    number: 85,
    countryId: data.countries.restWorld,
    age: 18,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 61,
      shooting: 55,
      saving: 20,
      tackling: 32,
      agility: 39,
      strength: 68,
      penalty_taking: 17,
      jumping: 45,
    },
  },
  {
    _id: data.realPlayer.barcelona.p26,
    name: 'Gerard Piqué',
    number: 99,
    countryId: data.countries.spain,
    age: 35,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 73,
      shooting: 91,
      saving: 13,
      tackling: 65,
      agility: 83,
      strength: 71,
      penalty_taking: 22,
      jumping: 85,
    },
  },
  {
    _id: data.realPlayer.barcelona.p27,
    name: 'Rubén Cantero',
    number: 96,
    countryId: data.countries.spain,
    age: 18,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 36,
      shooting: 44,
      saving: 8,
      tackling: 27,
      agility: 56,
      strength: 53,
      penalty_taking: 18,
      jumping: 24,
    },
  },
  {
    _id: data.realPlayer.barcelona.p28,
    name: 'Frenkie de Jong',
    number: 23,
    countryId: data.countries.restWorld,
    age: 25,
    positions: [
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.CDM,
      EPlayerPositionName.LDM,
      EPlayerPositionName.RDM,
      EPlayerPositionName.CB,
      EPlayerPositionName.RCB,
      EPlayerPositionName.LCB,
    ],
    skills: {
      passing: 68,
      shooting: 96,
      saving: 6,
      tackling: 99,
      agility: 65,
      strength: 93,
      penalty_taking: 14,
      jumping: 71,
    },
  },
  {
    _id: data.realPlayer.barcelona.p29,
    name: 'Marc Casadó',
    number: 72,
    countryId: data.countries.spain,
    age: 18,
    positions: [EPlayerPositionName.CDM, EPlayerPositionName.LDM, EPlayerPositionName.RDM],
    skills: {
      passing: 46,
      shooting: 56,
      saving: 17,
      tackling: 40,
      agility: 50,
      strength: 56,
      penalty_taking: 16,
      jumping: 40,
    },
  },
  {
    _id: data.realPlayer.barcelona.p30,
    name: 'Moha',
    number: 68,
    countryId: data.countries.spain,
    age: 22,
    positions: [
      EPlayerPositionName.CDM,
      EPlayerPositionName.LDM,
      EPlayerPositionName.RDM,
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
    ],
    skills: {
      passing: 51,
      shooting: 45,
      saving: 23,
      tackling: 42,
      agility: 54,
      strength: 65,
      penalty_taking: 18,
      jumping: 31,
    },
  },
  {
    _id: data.realPlayer.barcelona.p31,
    name: 'Sergio Busquets',
    number: 10,
    countryId: data.countries.spain,
    age: 33,
    positions: [EPlayerPositionName.CDM, EPlayerPositionName.LDM, EPlayerPositionName.RDM],
    skills: {
      passing: 67,
      shooting: 74,
      saving: 24,
      tackling: 83,
      agility: 91,
      strength: 75,
      penalty_taking: 12,
      jumping: 84,
    },
  },
  {
    _id: data.realPlayer.barcelona.p32,
    name: 'Franck Kessié',
    number: 89,
    countryId: data.countries.restWorld,
    age: 25,
    positions: [EPlayerPositionName.CM, EPlayerPositionName.LCM, EPlayerPositionName.RCM],
    skills: {
      passing: 82,
      shooting: 72,
      saving: 18,
      tackling: 73,
      agility: 61,
      strength: 93,
      penalty_taking: 10,
      jumping: 81,
    },
  },
  {
    _id: data.realPlayer.barcelona.p33,
    name: 'Álvaro Núñez',
    number: 60,
    countryId: data.countries.spain,
    age: 21,
    positions: [EPlayerPositionName.RB],
    skills: {
      passing: 53,
      shooting: 53,
      saving: 12,
      tackling: 57,
      agility: 71,
      strength: 57,
      penalty_taking: 16,
      jumping: 39,
    },
  },
  {
    _id: data.realPlayer.barcelona.p34,
    name: 'Sergi Roberto',
    number: 56,
    countryId: data.countries.spain,
    age: 30,
    positions: [
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.RM,
      EPlayerPositionName.CDM,
      EPlayerPositionName.LDM,
      EPlayerPositionName.RDM,
    ],
    skills: {
      passing: 92,
      shooting: 92,
      saving: 14,
      tackling: 74,
      agility: 72,
      strength: 54,
      penalty_taking: 21,
      jumping: 54,
    },
  },
  {
    _id: data.realPlayer.barcelona.p35,
    name: 'Àlex Carbonell',
    number: 22,
    countryId: data.countries.spain,
    age: 24,
    positions: [
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
    ],
    skills: {
      passing: 47,
      shooting: 39,
      saving: 15,
      tackling: 77,
      agility: 51,
      strength: 69,
      penalty_taking: 14,
      jumping: 65,
    },
  },
  {
    _id: data.realPlayer.barcelona.p36,
    name: 'Fabio Blanco',
    number: 86,
    countryId: data.countries.spain,
    age: 18,
    positions: [EPlayerPositionName.RWM],
    skills: {
      passing: 63,
      shooting: 47,
      saving: 20,
      tackling: 61,
      agility: 45,
      strength: 49,
      penalty_taking: 20,
      jumping: 65,
    },
  },
  {
    _id: data.realPlayer.barcelona.p37,
    name: 'Aleix Garrido',
    number: 46,
    countryId: data.countries.spain,
    age: 18,
    positions: [EPlayerPositionName.CM, EPlayerPositionName.LCM, EPlayerPositionName.RCM],
    skills: {
      passing: 44,
      shooting: 44,
      saving: 11,
      tackling: 52,
      agility: 52,
      strength: 54,
      penalty_taking: 5,
      jumping: 42,
    },
  },
  {
    _id: data.realPlayer.barcelona.p38,
    name: 'Txus Alba',
    number: 83,
    countryId: data.countries.spain,
    age: 19,
    positions: [EPlayerPositionName.CM, EPlayerPositionName.LCM, EPlayerPositionName.RCM],
    skills: {
      passing: 56,
      shooting: 40,
      saving: 22,
      tackling: 54,
      agility: 42,
      strength: 45,
      penalty_taking: 17,
      jumping: 51,
    },
  },
  {
    _id: data.realPlayer.barcelona.p39,
    name: 'Toni Caravaca',
    number: 70,
    countryId: data.countries.spain,
    age: 18,
    positions: [EPlayerPositionName.CM, EPlayerPositionName.LCM, EPlayerPositionName.RCM],
    skills: {
      passing: 22,
      shooting: 58,
      saving: 7,
      tackling: 24,
      agility: 56,
      strength: 56,
      penalty_taking: 6,
      jumping: 24,
    },
  },
  {
    _id: data.realPlayer.barcelona.p40,
    name: 'Pablo Torre',
    number: 32,
    countryId: data.countries.spain,
    age: 19,
    positions: [EPlayerPositionName.AML, EPlayerPositionName.AMC, EPlayerPositionName.AMR],
    skills: {
      passing: 48,
      shooting: 78,
      saving: 12,
      tackling: 47,
      agility: 79,
      strength: 47,
      penalty_taking: 14,
      jumping: 79,
    },
  },
  {
    _id: data.realPlayer.barcelona.p41,
    name: 'Antonio Aranda',
    number: 26,
    countryId: data.countries.spain,
    age: 21,
    positions: [EPlayerPositionName.AML, EPlayerPositionName.AMC, EPlayerPositionName.AMR, EPlayerPositionName.LM],
    skills: {
      passing: 77,
      shooting: 49,
      saving: 11,
      tackling: 39,
      agility: 67,
      strength: 64,
      penalty_taking: 9,
      jumping: 52,
    },
  },
  {
    _id: data.realPlayer.barcelona.p42,
    name: 'Ángel Alarcón',
    number: 80,
    countryId: data.countries.spain,
    age: 18,
    positions: [
      EPlayerPositionName.RWM,
      EPlayerPositionName.LWM,
      EPlayerPositionName.LCF,
      EPlayerPositionName.ST,
      EPlayerPositionName.RCF,
      EPlayerPositionName.RM,
      EPlayerPositionName.LM,
    ],
    skills: {
      passing: 47,
      shooting: 35,
      saving: 17,
      tackling: 65,
      agility: 53,
      strength: 54,
      penalty_taking: 8,
      jumping: 46,
    },
  },
  {
    _id: data.realPlayer.barcelona.p43,
    name: 'Ousmane Dembélé',
    number: 39,
    countryId: data.countries.france,
    age: 25,
    positions: [EPlayerPositionName.RWM, EPlayerPositionName.RM, EPlayerPositionName.LM],
    skills: {
      passing: 98,
      shooting: 64,
      saving: 20,
      tackling: 83,
      agility: 79,
      strength: 91,
      penalty_taking: 21,
      jumping: 71,
    },
  },
  {
    _id: data.realPlayer.barcelona.p44,
    name: 'Ansu Fati',
    number: 27,
    countryId: data.countries.spain,
    age: 19,
    positions: [EPlayerPositionName.LWM],
    skills: {
      passing: 78,
      shooting: 78,
      saving: 7,
      tackling: 61,
      agility: 72,
      strength: 89,
      penalty_taking: 14,
      jumping: 72,
    },
  },
  {
    _id: data.realPlayer.barcelona.p45,
    name: 'Derek Cuevas',
    number: 25,
    countryId: data.countries.spain,
    age: 18,
    positions: [
      EPlayerPositionName.LWM,
      EPlayerPositionName.LCF,
      EPlayerPositionName.ST,
      EPlayerPositionName.RCF,
      EPlayerPositionName.RWM,
    ],
    skills: {
      passing: 48,
      shooting: 28,
      saving: 17,
      tackling: 44,
      agility: 58,
      strength: 42,
      penalty_taking: 21,
      jumping: 38,
    },
  },
  {
    _id: data.realPlayer.barcelona.p46,
    name: 'Raphinha',
    number: 50,
    countryId: data.countries.brazil,
    age: 25,
    positions: [EPlayerPositionName.RWM],
    skills: {
      passing: 83,
      shooting: 73,
      saving: 12,
      tackling: 74,
      agility: 92,
      strength: 82,
      penalty_taking: 23,
      jumping: 64,
    },
  },
  {
    _id: data.realPlayer.barcelona.p47,
    name: 'Pedri',
    number: 75,
    countryId: data.countries.spain,
    age: 19,
    positions: [
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.RWM,
      EPlayerPositionName.LWM,
    ],
    skills: {
      passing: 80,
      shooting: 68,
      saving: 12,
      tackling: 82,
      agility: 94,
      strength: 80,
      penalty_taking: 19,
      jumping: 82,
    },
  },
  {
    _id: data.realPlayer.barcelona.p48,
    name: 'Ilias Akhomach',
    number: 19,
    countryId: data.countries.spain,
    age: 18,
    positions: [EPlayerPositionName.RWM, EPlayerPositionName.RM],
    skills: {
      passing: 49,
      shooting: 45,
      saving: 25,
      tackling: 71,
      agility: 60,
      strength: 56,
      penalty_taking: 19,
      jumping: 67,
    },
  },
  {
    _id: data.realPlayer.barcelona.p49,
    name: 'Hiroki Abe',
    number: 24,
    countryId: data.countries.restWorld,
    age: 23,
    positions: [EPlayerPositionName.LWM, EPlayerPositionName.RWM],
    skills: {
      passing: 43,
      shooting: 56,
      saving: 23,
      tackling: 57,
      agility: 44,
      strength: 57,
      penalty_taking: 20,
      jumping: 43,
    },
  },
  {
    _id: data.realPlayer.barcelona.p50,
    name: 'Ferran Torres',
    number: 28,
    countryId: data.countries.spain,
    age: 22,
    positions: [EPlayerPositionName.RWM, EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF],
    skills: {
      passing: 69,
      shooting: 85,
      saving: 22,
      tackling: 92,
      agility: 62,
      strength: 61,
      penalty_taking: 8,
      jumping: 93,
    },
  },
  {
    _id: data.realPlayer.barcelona.p51,
    name: 'Estanis Pedrola',
    number: 8,
    countryId: data.countries.spain,
    age: 18,
    positions: [EPlayerPositionName.LWM],
    skills: {
      passing: 46,
      shooting: 60,
      saving: 7,
      tackling: 46,
      agility: 60,
      strength: 43,
      penalty_taking: 8,
      jumping: 63,
    },
  },
  {
    _id: data.realPlayer.barcelona.p52,
    name: 'Juanda Fuentes',
    number: 42,
    countryId: data.countries.restWorld,
    age: 19,
    positions: [
      EPlayerPositionName.RWM,
      EPlayerPositionName.LCF,
      EPlayerPositionName.ST,
      EPlayerPositionName.RCF,
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
    ],
    skills: {
      passing: 54,
      shooting: 40,
      saving: 10,
      tackling: 30,
      agility: 56,
      strength: 42,
      penalty_taking: 24,
      jumping: 66,
    },
  },
  {
    _id: data.realPlayer.barcelona.p53,
    name: 'Fabián Luzzi',
    number: 54,
    countryId: data.countries.spain,
    age: 18,
    positions: [
      EPlayerPositionName.LCF,
      EPlayerPositionName.ST,
      EPlayerPositionName.RCF,
      EPlayerPositionName.RWM,
      EPlayerPositionName.LWM,
    ],
    skills: {
      passing: 47,
      shooting: 38,
      saving: 16,
      tackling: 43,
      agility: 47,
      strength: 43,
      penalty_taking: 22,
      jumping: 52,
    },
  },
  {
    _id: data.realPlayer.barcelona.p54,
    name: 'Lucas Román',
    number: 93,
    countryId: data.countries.argentina,
    age: 18,
    positions: [
      EPlayerPositionName.RWM,
      EPlayerPositionName.LCF,
      EPlayerPositionName.ST,
      EPlayerPositionName.RCF,
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
    ],
    skills: {
      passing: 47,
      shooting: 63,
      saving: 20,
      tackling: 53,
      agility: 35,
      strength: 57,
      penalty_taking: 9,
      jumping: 75,
    },
  },
  {
    _id: data.realPlayer.barcelona.p55,
    name: 'Luismi Cruz',
    number: 98,
    countryId: data.countries.spain,
    age: 21,
    positions: [
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
      EPlayerPositionName.LCF,
      EPlayerPositionName.ST,
      EPlayerPositionName.RCF,
      EPlayerPositionName.LWM,
    ],
    skills: {
      passing: 32,
      shooting: 68,
      saving: 14,
      tackling: 57,
      agility: 64,
      strength: 43,
      penalty_taking: 19,
      jumping: 36,
    },
  },
  {
    _id: data.realPlayer.barcelona.p56,
    name: 'Robert Lewandowski',
    number: 34,
    countryId: data.countries.poland,
    age: 33,
    positions: [EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF],
    skills: {
      passing: 99,
      shooting: 84,
      saving: 8,
      tackling: 99,
      agility: 99,
      strength: 84,
      penalty_taking: 8,
      jumping: 99,
    },
  },
  {
    _id: data.realPlayer.barcelona.p57,
    name: 'Roberto Fernández',
    number: 97,
    countryId: data.countries.spain,
    age: 20,
    positions: [EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF],
    skills: {
      passing: 72,
      shooting: 44,
      saving: 14,
      tackling: 51,
      agility: 65,
      strength: 62,
      penalty_taking: 19,
      jumping: 54,
    },
  },
];

export const realPlayersBarcelona = players.map((p) => ({ ...p, realTeamId: data.realTeams.barcelona }));
