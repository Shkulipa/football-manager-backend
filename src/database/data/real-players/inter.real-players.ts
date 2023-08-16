import { EPlayerPositionName } from './../../../modules/real-player/constants/player-position-name.enum';
import data from './../../constants/ids';
import { RealPlayerDto } from './../dto/real-player.dto';

const players: RealPlayerDto[] = [
  {
    _id: data.realPlayer.inter.p1,
    name: 'André Onana',
    number: 49,
    countryId: data.countries.restWorld,
    age: 26,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 67,
      shooting: 83,
      saving: 6,
      tackling: 90,
      agility: 60,
      strength: 73,
      penalty_taking: 23,
      jumping: 77,
    },
  },
  {
    _id: data.realPlayer.inter.p2,
    name: 'Samir Handanovič',
    number: 48,
    countryId: data.countries.restWorld,
    age: 37,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 84,
      shooting: 70,
      saving: 23,
      tackling: 77,
      agility: 64,
      strength: 78,
      penalty_taking: 21,
      jumping: 71,
    },
  },
  {
    _id: data.realPlayer.inter.p3,
    name: 'Alex Cordaz',
    number: 1,
    countryId: data.countries.italy,
    age: 39,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 49,
      shooting: 63,
      saving: 25,
      tackling: 62,
      agility: 49,
      strength: 50,
      penalty_taking: 22,
      jumping: 63,
    },
  },
  {
    _id: data.realPlayer.inter.p4,
    name: 'Nikolaos Botis',
    number: 66,
    countryId: data.countries.restWorld,
    age: 18,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 48,
      shooting: 26,
      saving: 19,
      tackling: 19,
      agility: 55,
      strength: 18,
      penalty_taking: 13,
      jumping: 56,
    },
  },
  {
    _id: data.realPlayer.inter.p5,
    name: 'Federico Dimarco',
    number: 65,
    countryId: data.countries.italy,
    age: 24,
    positions: [EPlayerPositionName.LWB, EPlayerPositionName.LB, EPlayerPositionName.LM],
    skills: {
      passing: 60,
      shooting: 90,
      saving: 25,
      tackling: 68,
      agility: 94,
      strength: 82,
      penalty_taking: 13,
      jumping: 56,
    },
  },
  {
    _id: data.realPlayer.inter.p6,
    name: 'Robin Gosens',
    number: 20,
    countryId: data.countries.germany,
    age: 27,
    positions: [EPlayerPositionName.LWB, EPlayerPositionName.LB],
    skills: {
      passing: 67,
      shooting: 83,
      saving: 8,
      tackling: 75,
      agility: 61,
      strength: 81,
      penalty_taking: 7,
      jumping: 59,
    },
  },
  {
    _id: data.realPlayer.inter.p7,
    name: 'Dalbert',
    number: 73,
    countryId: data.countries.brazil,
    age: 28,
    positions: [EPlayerPositionName.LWB, EPlayerPositionName.LB, EPlayerPositionName.LM],
    skills: {
      passing: 81,
      shooting: 45,
      saving: 18,
      tackling: 58,
      agility: 46,
      strength: 68,
      penalty_taking: 7,
      jumping: 80,
    },
  },
  {
    _id: data.realPlayer.inter.p8,
    name: 'Andrea Pozzi',
    number: 90,
    countryId: data.countries.italy,
    age: 19,
    positions: [EPlayerPositionName.LB, EPlayerPositionName.LWB],
    skills: {
      passing: 22,
      shooting: 33,
      saving: 20,
      tackling: 37,
      agility: 48,
      strength: 52,
      penalty_taking: 13,
      jumping: 18,
    },
  },
  {
    _id: data.realPlayer.inter.p9,
    name: 'Matteo Darmian',
    number: 36,
    countryId: data.countries.italy,
    age: 32,
    positions: [
      EPlayerPositionName.RWB,
      EPlayerPositionName.RB,
      EPlayerPositionName.LM,
      EPlayerPositionName.LWB,
      EPlayerPositionName.CB,
      EPlayerPositionName.RCB,
      EPlayerPositionName.LCB,
      EPlayerPositionName.LB,
    ],
    skills: {
      passing: 51,
      shooting: 91,
      saving: 12,
      tackling: 82,
      agility: 60,
      strength: 71,
      penalty_taking: 22,
      jumping: 71,
    },
  },
  {
    _id: data.realPlayer.inter.p10,
    name: 'Alessandro Fontanarosa',
    number: 10,
    countryId: data.countries.italy,
    age: 19,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB, EPlayerPositionName.LB],
    skills: {
      passing: 48,
      shooting: 56,
      saving: 11,
      tackling: 42,
      agility: 50,
      strength: 42,
      penalty_taking: 15,
      jumping: 56,
    },
  },
  {
    _id: data.realPlayer.inter.p11,
    name: "Danilo D'Ambrosio",
    number: 35,
    countryId: data.countries.italy,
    age: 33,
    positions: [EPlayerPositionName.RB],
    skills: {
      passing: 63,
      shooting: 83,
      saving: 20,
      tackling: 63,
      agility: 75,
      strength: 55,
      penalty_taking: 13,
      jumping: 75,
    },
  },
  {
    _id: data.realPlayer.inter.p12,
    name: 'Raoul Bellanova',
    number: 16,
    countryId: data.countries.italy,
    age: 22,
    positions: [EPlayerPositionName.RB, EPlayerPositionName.RM],
    skills: {
      passing: 85,
      shooting: 72,
      saving: 12,
      tackling: 50,
      agility: 82,
      strength: 47,
      penalty_taking: 9,
      jumping: 60,
    },
  },
  {
    _id: data.realPlayer.inter.p13,
    name: 'Alessandro Bastoni',
    number: 93,
    countryId: data.countries.italy,
    age: 23,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 71,
      shooting: 56,
      saving: 8,
      tackling: 66,
      agility: 84,
      strength: 79,
      penalty_taking: 7,
      jumping: 94,
    },
  },
  {
    _id: data.realPlayer.inter.p14,
    name: 'Denzel Dumfries',
    number: 86,
    countryId: data.countries.restWorld,
    age: 26,
    positions: [EPlayerPositionName.RWB, EPlayerPositionName.RB],
    skills: {
      passing: 60,
      shooting: 81,
      saving: 8,
      tackling: 71,
      agility: 76,
      strength: 92,
      penalty_taking: 18,
      jumping: 76,
    },
  },
  {
    _id: data.realPlayer.inter.p15,
    name: 'Mattia Zanotti',
    number: 52,
    countryId: data.countries.italy,
    age: 19,
    positions: [EPlayerPositionName.RB],
    skills: {
      passing: 61,
      shooting: 65,
      saving: 12,
      tackling: 55,
      agility: 47,
      strength: 41,
      penalty_taking: 9,
      jumping: 37,
    },
  },
  {
    _id: data.realPlayer.inter.p16,
    name: 'Francesco Acerbi',
    number: 33,
    countryId: data.countries.italy,
    age: 34,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 60,
      shooting: 68,
      saving: 18,
      tackling: 80,
      agility: 59,
      strength: 88,
      penalty_taking: 8,
      jumping: 89,
    },
  },
  {
    _id: data.realPlayer.inter.p17,
    name: 'Milan Škriniar',
    number: 51,
    countryId: data.countries.restWorld,
    age: 27,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 99,
      shooting: 61,
      saving: 17,
      tackling: 69,
      agility: 65,
      strength: 91,
      penalty_taking: 6,
      jumping: 95,
    },
  },
  {
    _id: data.realPlayer.inter.p18,
    name: 'Stefan de Vrij',
    number: 99,
    countryId: data.countries.restWorld,
    age: 30,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 55,
      shooting: 70,
      saving: 14,
      tackling: 93,
      agility: 78,
      strength: 61,
      penalty_taking: 7,
      jumping: 87,
    },
  },
  {
    _id: data.realPlayer.inter.p19,
    name: 'Samo Matjaz',
    number: 68,
    countryId: data.countries.restWorld,
    age: 18,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 54,
      shooting: 51,
      saving: 20,
      tackling: 48,
      agility: 21,
      strength: 24,
      penalty_taking: 23,
      jumping: 18,
    },
  },
  {
    _id: data.realPlayer.inter.p20,
    name: 'Alem Nezirević',
    number: 88,
    countryId: data.countries.restWorld,
    age: 18,
    positions: [
      EPlayerPositionName.RB,
      EPlayerPositionName.RM,
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
    ],
    skills: {
      passing: 30,
      shooting: 37,
      saving: 8,
      tackling: 35,
      agility: 47,
      strength: 49,
      penalty_taking: 14,
      jumping: 54,
    },
  },
  {
    _id: data.realPlayer.inter.p21,
    name: 'Kristian Dervishi',
    number: 74,
    countryId: data.countries.restWorld,
    age: 19,
    positions: [EPlayerPositionName.RB],
    skills: {
      passing: 35,
      shooting: 36,
      saving: 25,
      tackling: 26,
      agility: 27,
      strength: 31,
      penalty_taking: 6,
      jumping: 31,
    },
  },
  {
    _id: data.realPlayer.inter.p22,
    name: 'Nicolò Biral',
    number: 39,
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
      passing: 32,
      shooting: 25,
      saving: 8,
      tackling: 40,
      agility: 43,
      strength: 47,
      penalty_taking: 19,
      jumping: 29,
    },
  },
  {
    _id: data.realPlayer.inter.p23,
    name: 'Silas Andersen',
    number: 62,
    countryId: data.countries.restWorld,
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
      passing: 36,
      shooting: 15,
      saving: 18,
      tackling: 53,
      agility: 50,
      strength: 32,
      penalty_taking: 22,
      jumping: 18,
    },
  },
  {
    _id: data.realPlayer.inter.p24,
    name: 'Kristjan Asllani',
    number: 8,
    countryId: data.countries.restWorld,
    age: 20,
    positions: [
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
    ],
    skills: {
      passing: 86,
      shooting: 81,
      saving: 21,
      tackling: 63,
      agility: 51,
      strength: 69,
      penalty_taking: 22,
      jumping: 46,
    },
  },
  {
    _id: data.realPlayer.inter.p25,
    name: 'Marcelo Brozović',
    number: 80,
    countryId: data.countries.restWorld,
    age: 29,
    positions: [EPlayerPositionName.CM, EPlayerPositionName.LCM, EPlayerPositionName.RCM],
    skills: {
      passing: 81,
      shooting: 63,
      saving: 13,
      tackling: 79,
      agility: 84,
      strength: 97,
      penalty_taking: 25,
      jumping: 76,
    },
  },
  {
    _id: data.realPlayer.inter.p26,
    name: 'Roberto Gagliardini',
    number: 3,
    countryId: data.countries.italy,
    age: 28,
    positions: [
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.CDM,
      EPlayerPositionName.LDM,
      EPlayerPositionName.RDM,
    ],
    skills: {
      passing: 67,
      shooting: 77,
      saving: 11,
      tackling: 69,
      agility: 59,
      strength: 87,
      penalty_taking: 24,
      jumping: 49,
    },
  },
  {
    _id: data.realPlayer.inter.p27,
    name: 'Hakan Çalhanoğlu',
    number: 9,
    countryId: data.countries.restWorld,
    age: 28,
    positions: [
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
      EPlayerPositionName.LWM,
      EPlayerPositionName.LM,
    ],
    skills: {
      passing: 94,
      shooting: 64,
      saving: 17,
      tackling: 64,
      agility: 62,
      strength: 92,
      penalty_taking: 11,
      jumping: 92,
    },
  },
  {
    _id: data.realPlayer.inter.p28,
    name: 'Nicolò Barella',
    number: 25,
    countryId: data.countries.italy,
    age: 25,
    positions: [EPlayerPositionName.CM, EPlayerPositionName.LCM, EPlayerPositionName.RCM],
    skills: {
      passing: 95,
      shooting: 65,
      saving: 13,
      tackling: 84,
      agility: 76,
      strength: 70,
      penalty_taking: 10,
      jumping: 90,
    },
  },
  {
    _id: data.realPlayer.inter.p29,
    name: 'Jacopo Gianelli',
    number: 87,
    countryId: data.countries.italy,
    age: 21,
    positions: [EPlayerPositionName.CM, EPlayerPositionName.LCM, EPlayerPositionName.RCM, EPlayerPositionName.RM],
    skills: {
      passing: 46,
      shooting: 34,
      saving: 10,
      tackling: 34,
      agility: 33,
      strength: 47,
      penalty_taking: 5,
      jumping: 46,
    },
  },
  {
    _id: data.realPlayer.inter.p30,
    name: 'Henrikh Mkhitaryan',
    number: 13,
    countryId: data.countries.restWorld,
    age: 33,
    positions: [EPlayerPositionName.AML, EPlayerPositionName.AMC, EPlayerPositionName.AMR, EPlayerPositionName.LWM],
    skills: {
      passing: 68,
      shooting: 87,
      saving: 5,
      tackling: 63,
      agility: 82,
      strength: 92,
      penalty_taking: 24,
      jumping: 58,
    },
  },
  {
    _id: data.realPlayer.inter.p31,
    name: 'Joaquín Correa',
    number: 69,
    countryId: data.countries.argentina,
    age: 27,
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
      passing: 83,
      shooting: 83,
      saving: 19,
      tackling: 59,
      agility: 59,
      strength: 58,
      penalty_taking: 8,
      jumping: 84,
    },
  },
  {
    _id: data.realPlayer.inter.p32,
    name: 'Nikola Iliev',
    number: 40,
    countryId: data.countries.restWorld,
    age: 18,
    positions: [EPlayerPositionName.AML, EPlayerPositionName.AMC, EPlayerPositionName.AMR],
    skills: {
      passing: 48,
      shooting: 57,
      saving: 9,
      tackling: 70,
      agility: 32,
      strength: 45,
      penalty_taking: 21,
      jumping: 54,
    },
  },
  {
    _id: data.realPlayer.inter.p33,
    name: 'Dennis Curatolo',
    number: 75,
    countryId: data.countries.italy,
    age: 18,
    positions: [
      EPlayerPositionName.LCF,
      EPlayerPositionName.ST,
      EPlayerPositionName.RCF,
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
    ],
    skills: {
      passing: 16,
      shooting: 56,
      saving: 25,
      tackling: 40,
      agility: 21,
      strength: 32,
      penalty_taking: 8,
      jumping: 51,
    },
  },
  {
    _id: data.realPlayer.inter.p34,
    name: 'Amadou Makhtarlayi Sarr',
    number: 29,
    countryId: data.countries.restWorld,
    age: 18,
    positions: [
      EPlayerPositionName.LCF,
      EPlayerPositionName.ST,
      EPlayerPositionName.RCF,
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
    ],
    skills: {
      passing: 40,
      shooting: 34,
      saving: 12,
      tackling: 36,
      agility: 46,
      strength: 28,
      penalty_taking: 15,
      jumping: 38,
    },
  },
  {
    _id: data.realPlayer.inter.p35,
    name: 'Lautaro Martínez',
    number: 57,
    countryId: data.countries.argentina,
    age: 24,
    positions: [EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF],
    skills: {
      passing: 90,
      shooting: 89,
      saving: 18,
      tackling: 73,
      agility: 82,
      strength: 80,
      penalty_taking: 15,
      jumping: 72,
    },
  },
  {
    _id: data.realPlayer.inter.p36,
    name: 'Romelu Lukaku',
    number: 42,
    countryId: data.countries.restWorld,
    age: 29,
    positions: [EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF],
    skills: {
      passing: 76,
      shooting: 82,
      saving: 11,
      tackling: 76,
      agility: 82,
      strength: 74,
      penalty_taking: 23,
      jumping: 84,
    },
  },
  {
    _id: data.realPlayer.inter.p37,
    name: 'Edin Džeko',
    number: 24,
    countryId: data.countries.restWorld,
    age: 36,
    positions: [EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF],
    skills: {
      passing: 67,
      shooting: 75,
      saving: 16,
      tackling: 67,
      agility: 83,
      strength: 83,
      penalty_taking: 25,
      jumping: 75,
    },
  },
  {
    _id: data.realPlayer.inter.p38,
    name: 'Jan Żuberek',
    number: 53,
    countryId: data.countries.poland,
    age: 18,
    positions: [EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF],
    skills: {
      passing: 51,
      shooting: 53,
      saving: 5,
      tackling: 23,
      agility: 21,
      strength: 19,
      penalty_taking: 13,
      jumping: 55,
    },
  },
];

export const realPlayerInter = players.map((p) => ({ ...p, realTeamId: data.realTeams.inter }));
