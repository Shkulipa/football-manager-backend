import { EPlayerPositionName } from './../../../modules/real-player/constants/player-position-name.enum';
import data from './../../constants/ids';
import { RealPlayerDto } from './../dto/real-player.dto';

const players: RealPlayerDto[] = [
  {
    _id: data.realPlayer.napoli.p1,
    name: 'Alex Meret',
    number: 41,
    countryId: data.countries.italy,
    age: 25,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 84,
      shooting: 79,
      saving: 10,
      tackling: 64,
      agility: 83,
      strength: 65,
      penalty_taking: 11,
      jumping: 69,
    },
  },
  {
    _id: data.realPlayer.napoli.p2,
    name: 'Pierluigi Gollini',
    number: 90,
    countryId: data.countries.italy,
    age: 27,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 65,
      shooting: 67,
      saving: 17,
      tackling: 58,
      agility: 74,
      strength: 63,
      penalty_taking: 7,
      jumping: 69,
    },
  },
  {
    _id: data.realPlayer.napoli.p3,
    name: 'Davide Marfella',
    number: 95,
    countryId: data.countries.italy,
    age: 22,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 57,
      shooting: 56,
      saving: 9,
      tackling: 35,
      agility: 36,
      strength: 45,
      penalty_taking: 16,
      jumping: 47,
    },
  },
  {
    _id: data.realPlayer.napoli.p4,
    name: 'Hubert Idasiak',
    number: 5,
    countryId: data.countries.poland,
    age: 20,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 50,
      shooting: 38,
      saving: 14,
      tackling: 50,
      agility: 38,
      strength: 30,
      penalty_taking: 8,
      jumping: 58,
    },
  },
  {
    _id: data.realPlayer.napoli.p5,
    name: 'Mário Rui',
    number: 92,
    countryId: data.countries.restWorld,
    age: 31,
    positions: [EPlayerPositionName.LB, EPlayerPositionName.LM],
    skills: {
      passing: 66,
      shooting: 75,
      saving: 23,
      tackling: 84,
      agility: 75,
      strength: 60,
      penalty_taking: 12,
      jumping: 90,
    },
  },
  {
    _id: data.realPlayer.napoli.p6,
    name: 'Mathías Olivera',
    number: 92,
    countryId: data.countries.restWorld,
    age: 24,
    positions: [EPlayerPositionName.LB, EPlayerPositionName.LM, EPlayerPositionName.LWB],
    skills: {
      passing: 85,
      shooting: 55,
      saving: 21,
      tackling: 65,
      agility: 88,
      strength: 52,
      penalty_taking: 23,
      jumping: 75,
    },
  },
  {
    _id: data.realPlayer.napoli.p7,
    name: 'Nosa Obaretin',
    number: 85,
    countryId: data.countries.italy,
    age: 19,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 18,
      shooting: 48,
      saving: 13,
      tackling: 58,
      agility: 32,
      strength: 28,
      penalty_taking: 21,
      jumping: 44,
    },
  },
  {
    _id: data.realPlayer.napoli.p8,
    name: 'Juan Jesus',
    number: 32,
    countryId: data.countries.brazil,
    age: 31,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB, EPlayerPositionName.LB],
    skills: {
      passing: 83,
      shooting: 55,
      saving: 22,
      tackling: 86,
      agility: 59,
      strength: 79,
      penalty_taking: 10,
      jumping: 52,
    },
  },
  {
    _id: data.realPlayer.napoli.p9,
    name: 'Karim Zedadka',
    number: 25,
    countryId: data.countries.france,
    age: 22,
    positions: [EPlayerPositionName.LM, EPlayerPositionName.LWM, EPlayerPositionName.LWB, EPlayerPositionName.LB],
    skills: {
      passing: 60,
      shooting: 47,
      saving: 9,
      tackling: 42,
      agility: 42,
      strength: 60,
      penalty_taking: 22,
      jumping: 55,
    },
  },
  {
    _id: data.realPlayer.napoli.p10,
    name: 'Amir Rrahmani',
    number: 70,
    countryId: data.countries.france,
    age: 28,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 81,
      shooting: 94,
      saving: 23,
      tackling: 56,
      agility: 82,
      strength: 68,
      penalty_taking: 13,
      jumping: 69,
    },
  },
  {
    _id: data.realPlayer.napoli.p11,
    name: 'Giovanni Di Lorenzo',
    number: 70,
    countryId: data.countries.italy,
    age: 28,
    positions: [EPlayerPositionName.RB, EPlayerPositionName.RM, EPlayerPositionName.RWB],
    skills: {
      passing: 73,
      shooting: 78,
      saving: 8,
      tackling: 76,
      agility: 89,
      strength: 65,
      penalty_taking: 20,
      jumping: 81,
    },
  },
  {
    _id: data.realPlayer.napoli.p12,
    name: 'Bartosz Bereszyński',
    number: 21,
    countryId: data.countries.poland,
    age: 29,
    positions: [EPlayerPositionName.RB],
    skills: {
      passing: 84,
      shooting: 48,
      saving: 24,
      tackling: 76,
      agility: 56,
      strength: 69,
      penalty_taking: 17,
      jumping: 63,
    },
  },
  {
    _id: data.realPlayer.napoli.p13,
    name: 'Benedetto Barba',
    number: 21,
    countryId: data.countries.poland,
    age: 19,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB, EPlayerPositionName.RB],
    skills: {
      passing: 26,
      shooting: 46,
      saving: 14,
      tackling: 53,
      agility: 19,
      strength: 53,
      penalty_taking: 13,
      jumping: 19,
    },
  },
  {
    _id: data.realPlayer.napoli.p14,
    name: 'Kim Min-Jae',
    number: 14,
    countryId: data.countries.restWorld,
    age: 25,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 90,
      shooting: 72,
      saving: 6,
      tackling: 64,
      agility: 75,
      strength: 79,
      penalty_taking: 19,
      jumping: 82,
    },
  },
  {
    _id: data.realPlayer.napoli.p15,
    name: 'Daniel Hysaj',
    number: 96,
    countryId: data.countries.restWorld,
    age: 18,
    positions: [
      EPlayerPositionName.CB,
      EPlayerPositionName.RCB,
      EPlayerPositionName.LCB,
      EPlayerPositionName.CDM,
      EPlayerPositionName.LDM,
      EPlayerPositionName.RDM,
    ],
    skills: {
      passing: 52,
      shooting: 19,
      saving: 20,
      tackling: 33,
      agility: 37,
      strength: 18,
      penalty_taking: 14,
      jumping: 51,
    },
  },
  {
    _id: data.realPlayer.napoli.p16,
    name: 'Leo Østigård',
    number: 16,
    countryId: data.countries.restWorld,
    age: 22,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 57,
      shooting: 76,
      saving: 18,
      tackling: 77,
      agility: 58,
      strength: 83,
      penalty_taking: 23,
      jumping: 51,
    },
  },
  {
    _id: data.realPlayer.napoli.p17,
    name: 'Giovanni Sequino',
    number: 23,
    countryId: data.countries.italy,
    age: 18,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 17,
      shooting: 16,
      saving: 18,
      tackling: 16,
      agility: 29,
      strength: 30,
      penalty_taking: 7,
      jumping: 30,
    },
  },
  {
    _id: data.realPlayer.napoli.p18,
    name: 'Diego Demme',
    number: 69,
    countryId: data.countries.germany,
    age: 30,
    positions: [
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.CDM,
      EPlayerPositionName.LDM,
      EPlayerPositionName.RDM,
    ],
    skills: {
      passing: 87,
      shooting: 49,
      saving: 19,
      tackling: 87,
      agility: 49,
      strength: 71,
      penalty_taking: 11,
      jumping: 65,
    },
  },
  {
    _id: data.realPlayer.napoli.p19,
    name: 'Simone Bonavita',
    number: 49,
    countryId: data.countries.italy,
    age: 18,
    positions: [
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.CDM,
      EPlayerPositionName.LDM,
      EPlayerPositionName.RDM,
    ],
    skills: {
      passing: 24,
      shooting: 48,
      saving: 5,
      tackling: 50,
      agility: 22,
      strength: 47,
      penalty_taking: 23,
      jumping: 25,
    },
  },
  {
    _id: data.realPlayer.napoli.p20,
    name: 'Francesco Gioielli',
    number: 63,
    countryId: data.countries.italy,
    age: 18,
    positions: [EPlayerPositionName.CDM, EPlayerPositionName.LDM, EPlayerPositionName.RDM],
    skills: {
      passing: 29,
      shooting: 22,
      saving: 24,
      tackling: 31,
      agility: 26,
      strength: 34,
      penalty_taking: 25,
      jumping: 38,
    },
  },
  {
    _id: data.realPlayer.napoli.p21,
    name: 'Stanislav Lobotka',
    number: 63,
    countryId: data.countries.restWorld,
    age: 27,
    positions: [
      EPlayerPositionName.CDM,
      EPlayerPositionName.LDM,
      EPlayerPositionName.RDM,
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
    ],
    skills: {
      passing: 65,
      shooting: 76,
      saving: 10,
      tackling: 70,
      agility: 84,
      strength: 78,
      penalty_taking: 16,
      jumping: 89,
    },
  },
  {
    _id: data.realPlayer.napoli.p22,
    name: 'Tanguy Ndombele',
    number: 73,
    countryId: data.countries.france,
    age: 27,
    positions: [EPlayerPositionName.CM, EPlayerPositionName.LCM, EPlayerPositionName.RCM],
    skills: {
      passing: 74,
      shooting: 74,
      saving: 11,
      tackling: 68,
      agility: 58,
      strength: 84,
      penalty_taking: 13,
      jumping: 68,
    },
  },
  {
    _id: data.realPlayer.napoli.p23,
    name: 'André-Franck Zambo Anguissa',
    number: 81,
    countryId: data.countries.restWorld,
    age: 26,
    positions: [
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.CDM,
      EPlayerPositionName.LDM,
      EPlayerPositionName.RDM,
    ],
    skills: {
      passing: 88,
      shooting: 64,
      saving: 23,
      tackling: 68,
      agility: 74,
      strength: 82,
      penalty_taking: 7,
      jumping: 92,
    },
  },
  {
    _id: data.realPlayer.napoli.p24,
    name: 'Gennaro Iaccarino',
    number: 4,
    countryId: data.countries.italy,
    age: 19,
    positions: [
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.CDM,
      EPlayerPositionName.LDM,
      EPlayerPositionName.RDM,
    ],
    skills: {
      passing: 27,
      shooting: 53,
      saving: 17,
      tackling: 38,
      agility: 28,
      strength: 15,
      penalty_taking: 22,
      jumping: 37,
    },
  },
  {
    _id: data.realPlayer.napoli.p25,
    name: 'Jorge Alastuey',
    number: 22,
    countryId: data.countries.spain,
    age: 19,
    positions: [
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
      EPlayerPositionName.CDM,
      EPlayerPositionName.LDM,
      EPlayerPositionName.RDM,
    ],
    skills: {
      passing: 64,
      shooting: 26,
      saving: 24,
      tackling: 59,
      agility: 47,
      strength: 43,
      penalty_taking: 12,
      jumping: 31,
    },
  },
  {
    _id: data.realPlayer.napoli.p26,
    name: 'Piotr Zieliński',
    number: 76,
    countryId: data.countries.poland,
    age: 28,
    positions: [
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
    ],
    skills: {
      passing: 58,
      shooting: 60,
      saving: 17,
      tackling: 79,
      agility: 96,
      strength: 77,
      penalty_taking: 16,
      jumping: 98,
    },
  },
  {
    _id: data.realPlayer.napoli.p27,
    name: 'Eljif Elmas',
    number: 51,
    countryId: data.countries.restWorld,
    age: 22,
    positions: [
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.LM,
    ],
    skills: {
      passing: 83,
      shooting: 69,
      saving: 23,
      tackling: 86,
      agility: 77,
      strength: 60,
      penalty_taking: 21,
      jumping: 63,
    },
  },
  {
    _id: data.realPlayer.napoli.p28,
    name: 'Alessio Lettera',
    number: 97,
    countryId: data.countries.italy,
    age: 18,
    positions: [EPlayerPositionName.CM, EPlayerPositionName.LCM, EPlayerPositionName.RCM],
    skills: {
      passing: 37,
      shooting: 24,
      saving: 9,
      tackling: 29,
      agility: 35,
      strength: 42,
      penalty_taking: 18,
      jumping: 31,
    },
  },
  {
    _id: data.realPlayer.napoli.p29,
    name: 'Gianluca Gaetano',
    number: 13,
    countryId: data.countries.italy,
    age: 22,
    positions: [
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.RWM,
      EPlayerPositionName.LWM,
      EPlayerPositionName.RM,
      EPlayerPositionName.LM,
    ],
    skills: {
      passing: 66,
      shooting: 57,
      saving: 8,
      tackling: 56,
      agility: 58,
      strength: 68,
      penalty_taking: 24,
      jumping: 67,
    },
  },
  {
    _id: data.realPlayer.napoli.p30,
    name: 'Davide Acampa',
    number: 66,
    countryId: data.countries.italy,
    age: 22,
    positions: [EPlayerPositionName.RWM, EPlayerPositionName.LWM, EPlayerPositionName.LM],
    skills: {
      passing: 50,
      shooting: 31,
      saving: 21,
      tackling: 15,
      agility: 47,
      strength: 32,
      penalty_taking: 9,
      jumping: 17,
    },
  },
  {
    _id: data.realPlayer.napoli.p31,
    name: 'Landry Boni',
    number: 33,
    countryId: data.countries.restWorld,
    age: 18,
    positions: [EPlayerPositionName.CM, EPlayerPositionName.LCM, EPlayerPositionName.RCM],
    skills: {
      passing: 26,
      shooting: 29,
      saving: 6,
      tackling: 37,
      agility: 36,
      strength: 33,
      penalty_taking: 5,
      jumping: 25,
    },
  },
  {
    _id: data.realPlayer.napoli.p32,
    name: 'Alessio Zerbin',
    number: 18,
    countryId: data.countries.italy,
    age: 23,
    positions: [EPlayerPositionName.LWM, EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF],
    skills: {
      passing: 58,
      shooting: 50,
      saving: 5,
      tackling: 84,
      agility: 72,
      strength: 46,
      penalty_taking: 19,
      jumping: 80,
    },
  },
  {
    _id: data.realPlayer.napoli.p33,
    name: 'Khvicha Kvaratskhelia',
    number: 64,
    countryId: data.countries.restWorld,
    age: 21,
    positions: [EPlayerPositionName.LWM],
    skills: {
      passing: 78,
      shooting: 84,
      saving: 17,
      tackling: 64,
      agility: 98,
      strength: 95,
      penalty_taking: 9,
      jumping: 67,
    },
  },
  {
    _id: data.realPlayer.napoli.p34,
    name: 'Matteo Politano',
    number: 9,
    countryId: data.countries.italy,
    age: 29,
    positions: [EPlayerPositionName.RWM],
    skills: {
      passing: 60,
      shooting: 77,
      saving: 7,
      tackling: 71,
      agility: 56,
      strength: 92,
      penalty_taking: 22,
      jumping: 88,
    },
  },
  {
    _id: data.realPlayer.napoli.p35,
    name: 'Hirving Lozano',
    number: 7,
    countryId: data.countries.restWorld,
    age: 26,
    positions: [EPlayerPositionName.RWM, EPlayerPositionName.LWM],
    skills: {
      passing: 66,
      shooting: 82,
      saving: 6,
      tackling: 88,
      agility: 60,
      strength: 87,
      penalty_taking: 18,
      jumping: 61,
    },
  },
  {
    _id: data.realPlayer.napoli.p36,
    name: 'Pasquale Marranzino',
    number: 45,
    countryId: data.countries.italy,
    age: 18,
    positions: [EPlayerPositionName.LWM, EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF],
    skills: {
      passing: 31,
      shooting: 44,
      saving: 25,
      tackling: 35,
      agility: 22,
      strength: 25,
      penalty_taking: 18,
      jumping: 41,
    },
  },
  {
    _id: data.realPlayer.napoli.p37,
    name: 'Bilel Sahli',
    number: 19,
    countryId: data.countries.restWorld,
    age: 19,
    positions: [EPlayerPositionName.RWM],
    skills: {
      passing: 21,
      shooting: 41,
      saving: 7,
      tackling: 51,
      agility: 27,
      strength: 31,
      penalty_taking: 5,
      jumping: 15,
    },
  },
  {
    _id: data.realPlayer.napoli.p38,
    name: 'Giacomo Raspadori',
    number: 38,
    countryId: data.countries.italy,
    age: 22,
    positions: [
      EPlayerPositionName.LCF,
      EPlayerPositionName.ST,
      EPlayerPositionName.RCF,
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
      EPlayerPositionName.LWM,
    ],
    skills: {
      passing: 62,
      shooting: 84,
      saving: 11,
      tackling: 87,
      agility: 59,
      strength: 63,
      penalty_taking: 5,
      jumping: 83,
    },
  },
  {
    _id: data.realPlayer.napoli.p39,
    name: 'Victor Osimhen',
    number: 83,
    countryId: data.countries.restWorld,
    age: 23,
    positions: [EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF],
    skills: {
      passing: 70,
      shooting: 92,
      saving: 5,
      tackling: 68,
      agility: 92,
      strength: 70,
      penalty_taking: 12,
      jumping: 94,
    },
  },
  {
    _id: data.realPlayer.napoli.p40,
    name: 'Giovanni Simeone',
    number: 17,
    countryId: data.countries.argentina,
    age: 26,
    positions: [EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF],
    skills: {
      passing: 65,
      shooting: 74,
      saving: 15,
      tackling: 54,
      agility: 79,
      strength: 70,
      penalty_taking: 10,
      jumping: 90,
    },
  },
  {
    _id: data.realPlayer.napoli.p41,
    name: 'Antonio Pesce',
    number: 46,
    countryId: data.countries.italy,
    age: 18,
    positions: [EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF],
    skills: {
      passing: 27,
      shooting: 47,
      saving: 22,
      tackling: 18,
      agility: 56,
      strength: 40,
      penalty_taking: 16,
      jumping: 34,
    },
  },
];

export const realPlayersNapoli = players.map((p) => ({ ...p, realTeamId: data.realTeams.napoli }));
