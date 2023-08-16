import { EPlayerPositionName } from './../../../modules/real-player/constants/player-position-name.enum';
import data from './../../constants/ids';
import { RealPlayerDto } from './../dto/real-player.dto';

const players: RealPlayerDto[] = [
  {
    _id: data.realPlayer.arsenal.p1,
    name: 'Aaron Ramsdale',
    number: 60,
    countryId: data.countries.england,
    age: 24,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 85,
      shooting: 64,
      saving: 9,
      tackling: 67,
      agility: 93,
      strength: 88,
      penalty_taking: 18,
      jumping: 59,
    },
  },
  {
    _id: data.realPlayer.arsenal.p2,
    name: 'Matt Turner',
    number: 36,
    countryId: data.countries.restWorld,
    age: 28,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 60,
      shooting: 80,
      saving: 13,
      tackling: 58,
      agility: 82,
      strength: 75,
      penalty_taking: 16,
      jumping: 65,
    },
  },
  {
    _id: data.realPlayer.arsenal.p3,
    name: 'Karl Jakob Hein',
    number: 49,
    countryId: data.countries.restWorld,
    age: 20,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 64,
      shooting: 44,
      saving: 20,
      tackling: 59,
      agility: 49,
      strength: 66,
      penalty_taking: 15,
      jumping: 42,
    },
  },
  {
    _id: data.realPlayer.arsenal.p4,
    name: 'Hubert Graczyk',
    number: 39,
    countryId: data.countries.england,
    age: 19,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 33,
      shooting: 40,
      saving: 19,
      tackling: 52,
      agility: 63,
      strength: 44,
      penalty_taking: 19,
      jumping: 56,
    },
  },
  {
    _id: data.realPlayer.arsenal.p5,
    name: 'James Hillson',
    number: 91,
    countryId: data.countries.england,
    age: 21,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 26,
      shooting: 36,
      saving: 12,
      tackling: 50,
      agility: 28,
      strength: 60,
      penalty_taking: 11,
      jumping: 58,
    },
  },
  {
    _id: data.realPlayer.arsenal.p6,
    name: 'Kieran Tierney',
    number: 10,
    countryId: data.countries.restWorld,
    age: 25,
    positions: [EPlayerPositionName.LB, EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 79,
      shooting: 84,
      saving: 9,
      tackling: 73,
      agility: 74,
      strength: 78,
      penalty_taking: 14,
      jumping: 68,
    },
  },
  {
    _id: data.realPlayer.arsenal.p7,
    name: 'Oleksandr Zinchenko',
    number: 23,
    countryId: data.countries.ukraine,
    age: 25,
    positions: [
      EPlayerPositionName.LB,
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.CDM,
      EPlayerPositionName.LDM,
      EPlayerPositionName.RDM,
    ],
    skills: {
      passing: 87,
      shooting: 78,
      saving: 13,
      tackling: 73,
      agility: 82,
      strength: 80,
      penalty_taking: 23,
      jumping: 80,
    },
  },
  {
    _id: data.realPlayer.arsenal.p8,
    name: 'Takehiro Tomiyasu',
    number: 35,
    countryId: data.countries.restWorld,
    age: 23,
    positions: [
      EPlayerPositionName.RB,
      EPlayerPositionName.RWB,
      EPlayerPositionName.LWB,
      EPlayerPositionName.CB,
      EPlayerPositionName.RCB,
      EPlayerPositionName.LCB,
    ],
    skills: {
      passing: 79,
      shooting: 71,
      saving: 16,
      tackling: 76,
      agility: 74,
      strength: 87,
      penalty_taking: 21,
      jumping: 63,
    },
  },
  {
    _id: data.realPlayer.arsenal.p9,
    name: 'Henry Jeffcott',
    number: 72,
    countryId: data.countries.restWorld,
    age: 18,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB, EPlayerPositionName.RB],
    skills: {
      passing: 45,
      shooting: 44,
      saving: 7,
      tackling: 35,
      agility: 28,
      strength: 52,
      penalty_taking: 18,
      jumping: 36,
    },
  },
  {
    _id: data.realPlayer.arsenal.p10,
    name: 'Jakub Kiwior',
    number: 29,
    countryId: data.countries.poland,
    age: 22,
    positions: [
      EPlayerPositionName.CB,
      EPlayerPositionName.RCB,
      EPlayerPositionName.LCB,
      EPlayerPositionName.CDM,
      EPlayerPositionName.LDM,
      EPlayerPositionName.RDM,
      EPlayerPositionName.LB,
    ],
    skills: {
      passing: 69,
      shooting: 49,
      saving: 17,
      tackling: 85,
      agility: 71,
      strength: 63,
      penalty_taking: 8,
      jumping: 65,
    },
  },
  {
    _id: data.realPlayer.arsenal.p11,
    name: 'Granit Xhaka',
    number: 83,
    countryId: data.countries.restWorld,
    age: 29,
    positions: [
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.CDM,
      EPlayerPositionName.LDM,
      EPlayerPositionName.RDM,
    ],
    skills: {
      passing: 69,
      shooting: 79,
      saving: 9,
      tackling: 71,
      agility: 65,
      strength: 81,
      penalty_taking: 24,
      jumping: 85,
    },
  },
  {
    _id: data.realPlayer.arsenal.p12,
    name: 'Bukayo Saka',
    number: 78,
    countryId: data.countries.england,
    age: 20,
    positions: [EPlayerPositionName.RWM],
    skills: {
      passing: 75,
      shooting: 81,
      saving: 22,
      tackling: 93,
      agility: 78,
      strength: 90,
      penalty_taking: 13,
      jumping: 87,
    },
  },
  {
    _id: data.realPlayer.arsenal.p13,
    name: 'Ben Cottrell',
    number: 16,
    countryId: data.countries.england,
    age: 20,
    positions: [
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
      EPlayerPositionName.RWM,
      EPlayerPositionName.LWM,
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
    ],
    skills: {
      passing: 32,
      shooting: 30,
      saving: 5,
      tackling: 51,
      agility: 41,
      strength: 60,
      penalty_taking: 9,
      jumping: 62,
    },
  },
  {
    _id: data.realPlayer.arsenal.p14,
    name: 'William Saliba',
    number: 34,
    countryId: data.countries.france,
    age: 21,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 58,
      shooting: 86,
      saving: 8,
      tackling: 68,
      agility: 57,
      strength: 97,
      penalty_taking: 14,
      jumping: 96,
    },
  },
  {
    _id: data.realPlayer.arsenal.p15,
    name: 'Rob Holding',
    number: 82,
    countryId: data.countries.england,
    age: 26,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 53,
      shooting: 83,
      saving: 9,
      tackling: 78,
      agility: 58,
      strength: 74,
      penalty_taking: 21,
      jumping: 62,
    },
  },
  {
    _id: data.realPlayer.arsenal.p16,
    name: 'Zach Awe',
    number: 68,
    countryId: data.countries.england,
    age: 18,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 33,
      shooting: 64,
      saving: 22,
      tackling: 34,
      agility: 65,
      strength: 47,
      penalty_taking: 18,
      jumping: 51,
    },
  },
  {
    _id: data.realPlayer.arsenal.p17,
    name: 'Gabriel',
    number: 52,
    countryId: data.countries.brazil,
    age: 24,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 64,
      shooting: 64,
      saving: 22,
      tackling: 90,
      agility: 91,
      strength: 63,
      penalty_taking: 17,
      jumping: 90,
    },
  },
  {
    _id: data.realPlayer.arsenal.p18,
    name: 'Zane Monlouis',
    number: 69,
    countryId: data.countries.england,
    age: 18,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 59,
      shooting: 60,
      saving: 17,
      tackling: 25,
      agility: 38,
      strength: 24,
      penalty_taking: 22,
      jumping: 46,
    },
  },
  {
    _id: data.realPlayer.arsenal.p19,
    name: 'Benjamin White',
    number: 85,
    countryId: data.countries.england,
    age: 24,
    positions: [EPlayerPositionName.RB],
    skills: {
      passing: 91,
      shooting: 74,
      saving: 20,
      tackling: 80,
      agility: 94,
      strength: 63,
      penalty_taking: 7,
      jumping: 60,
    },
  },
  {
    _id: data.realPlayer.arsenal.p20,
    name: 'Mohamed Elneny',
    number: 41,
    countryId: data.countries.restWorld,
    age: 29,
    positions: [EPlayerPositionName.CM, EPlayerPositionName.LCM, EPlayerPositionName.RCM],
    skills: {
      passing: 72,
      shooting: 68,
      saving: 7,
      tackling: 83,
      agility: 51,
      strength: 57,
      penalty_taking: 12,
      jumping: 89,
    },
  },
  {
    _id: data.realPlayer.arsenal.p21,
    name: 'Thomas Partey',
    number: 51,
    countryId: data.countries.restWorld,
    age: 29,
    positions: [
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.CDM,
      EPlayerPositionName.LDM,
      EPlayerPositionName.RDM,
    ],
    skills: {
      passing: 90,
      shooting: 79,
      saving: 6,
      tackling: 97,
      agility: 65,
      strength: 83,
      penalty_taking: 12,
      jumping: 72,
    },
  },
  {
    _id: data.realPlayer.arsenal.p22,
    name: 'James Sweet',
    number: 55,
    countryId: data.countries.restWorld,
    age: 18,
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
      passing: 66,
      shooting: 33,
      saving: 16,
      tackling: 63,
      agility: 61,
      strength: 28,
      penalty_taking: 10,
      jumping: 31,
    },
  },
  {
    _id: data.realPlayer.arsenal.p23,
    name: 'Jorginho',
    number: 7,
    countryId: data.countries.italy,
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
      passing: 88,
      shooting: 70,
      saving: 20,
      tackling: 93,
      agility: 65,
      strength: 63,
      penalty_taking: 7,
      jumping: 95,
    },
  },
  {
    _id: data.realPlayer.arsenal.p24,
    name: 'Jack Henry-Francis',
    number: 86,
    countryId: data.countries.restWorld,
    age: 18,
    positions: [
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
    ],
    skills: {
      passing: 51,
      shooting: 45,
      saving: 15,
      tackling: 39,
      agility: 29,
      strength: 57,
      penalty_taking: 21,
      jumping: 67,
    },
  },
  {
    _id: data.realPlayer.arsenal.p25,
    name: 'Mauro Bandeira',
    number: 65,
    countryId: data.countries.restWorld,
    age: 18,
    positions: [EPlayerPositionName.CM, EPlayerPositionName.LCM, EPlayerPositionName.RCM],
    skills: {
      passing: 43,
      shooting: 45,
      saving: 5,
      tackling: 64,
      agility: 24,
      strength: 54,
      penalty_taking: 19,
      jumping: 34,
    },
  },
  {
    _id: data.realPlayer.arsenal.p26,
    name: 'Matthew Smith',
    number: 57,
    countryId: data.countries.england,
    age: 21,
    positions: [EPlayerPositionName.CM, EPlayerPositionName.LCM, EPlayerPositionName.RCM],
    skills: {
      passing: 70,
      shooting: 51,
      saving: 20,
      tackling: 40,
      agility: 45,
      strength: 59,
      penalty_taking: 19,
      jumping: 65,
    },
  },
  {
    _id: data.realPlayer.arsenal.p27,
    name: "Salah Oulad M'Hand",
    number: 54,
    countryId: data.countries.restWorld,
    age: 18,
    positions: [EPlayerPositionName.AML, EPlayerPositionName.AMC, EPlayerPositionName.AMR],
    skills: {
      passing: 50,
      shooting: 56,
      saving: 17,
      tackling: 43,
      agility: 42,
      strength: 64,
      penalty_taking: 11,
      jumping: 63,
    },
  },
  {
    _id: data.realPlayer.arsenal.p28,
    name: 'Martin Ødegaard',
    number: 63,
    countryId: data.countries.restWorld,
    age: 23,
    positions: [EPlayerPositionName.AML, EPlayerPositionName.AMC, EPlayerPositionName.AMR],
    skills: {
      passing: 95,
      shooting: 78,
      saving: 16,
      tackling: 88,
      agility: 97,
      strength: 69,
      penalty_taking: 9,
      jumping: 71,
    },
  },
  {
    _id: data.realPlayer.arsenal.p29,
    name: 'Leandro Trossard',
    number: 98,
    countryId: data.countries.restWorld,
    age: 27,
    positions: [
      EPlayerPositionName.LWM,
      EPlayerPositionName.LCF,
      EPlayerPositionName.ST,
      EPlayerPositionName.RCF,
      EPlayerPositionName.LM,
      EPlayerPositionName.LWB,
    ],
    skills: {
      passing: 96,
      shooting: 56,
      saving: 16,
      tackling: 71,
      agility: 60,
      strength: 81,
      penalty_taking: 10,
      jumping: 92,
    },
  },
  {
    _id: data.realPlayer.arsenal.p30,
    name: 'Reiss Nelson',
    number: 9,
    countryId: data.countries.england,
    age: 22,
    positions: [EPlayerPositionName.RWM, EPlayerPositionName.RM, EPlayerPositionName.LM],
    skills: {
      passing: 56,
      shooting: 78,
      saving: 24,
      tackling: 84,
      agility: 55,
      strength: 50,
      penalty_taking: 21,
      jumping: 79,
    },
  },
  {
    _id: data.realPlayer.arsenal.p31,
    name: 'Emile Smith Rowe',
    number: 89,
    countryId: data.countries.england,
    age: 21,
    positions: [EPlayerPositionName.AML, EPlayerPositionName.AMC, EPlayerPositionName.AMR, EPlayerPositionName.RWM],
    skills: {
      passing: 80,
      shooting: 68,
      saving: 22,
      tackling: 89,
      agility: 74,
      strength: 59,
      penalty_taking: 10,
      jumping: 74,
    },
  },
  {
    _id: data.realPlayer.arsenal.p32,
    name: 'Joel Ideho',
    number: 38,
    countryId: data.countries.restWorld,
    age: 18,
    positions: [
      EPlayerPositionName.LWM,
      EPlayerPositionName.LCF,
      EPlayerPositionName.ST,
      EPlayerPositionName.RCF,
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
    ],
    skills: {
      passing: 58,
      shooting: 63,
      saving: 13,
      tackling: 32,
      agility: 64,
      strength: 38,
      penalty_taking: 16,
      jumping: 33,
    },
  },
  {
    _id: data.realPlayer.arsenal.p33,
    name: 'Fábio Vieira',
    number: 73,
    countryId: data.countries.restWorld,
    age: 22,
    positions: [
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
      EPlayerPositionName.LWM,
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
    ],
    skills: {
      passing: 69,
      shooting: 69,
      saving: 24,
      tackling: 77,
      agility: 77,
      strength: 88,
      penalty_taking: 16,
      jumping: 58,
    },
  },
  {
    _id: data.realPlayer.arsenal.p34,
    name: 'Catalin Cîrjan',
    number: 56,
    countryId: data.countries.restWorld,
    age: 19,
    positions: [
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
      EPlayerPositionName.RWM,
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
    ],
    skills: {
      passing: 39,
      shooting: 50,
      saving: 10,
      tackling: 65,
      agility: 63,
      strength: 52,
      penalty_taking: 16,
      jumping: 37,
    },
  },
  {
    _id: data.realPlayer.arsenal.p35,
    name: 'George Lewis',
    number: 37,
    countryId: data.countries.restWorld,
    age: 22,
    positions: [
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
      EPlayerPositionName.LCF,
      EPlayerPositionName.ST,
      EPlayerPositionName.RCF,
      EPlayerPositionName.RWM,
      EPlayerPositionName.LWM,
    ],
    skills: {
      passing: 24,
      shooting: 40,
      saving: 7,
      tackling: 62,
      agility: 26,
      strength: 64,
      penalty_taking: 18,
      jumping: 48,
    },
  },
  {
    _id: data.realPlayer.arsenal.p36,
    name: 'Gabriel Martinelli',
    number: 48,
    countryId: data.countries.brazil,
    age: 21,
    positions: [
      EPlayerPositionName.LWM,
      EPlayerPositionName.LCF,
      EPlayerPositionName.ST,
      EPlayerPositionName.RCF,
      EPlayerPositionName.RWM,
    ],
    skills: {
      passing: 90,
      shooting: 70,
      saving: 24,
      tackling: 93,
      agility: 86,
      strength: 66,
      penalty_taking: 8,
      jumping: 63,
    },
  },
  {
    _id: data.realPlayer.arsenal.p37,
    name: 'Eddie Nketiah',
    number: 21,
    countryId: data.countries.england,
    age: 23,
    positions: [
      EPlayerPositionName.LCF,
      EPlayerPositionName.ST,
      EPlayerPositionName.RCF,
      EPlayerPositionName.RWM,
      EPlayerPositionName.LWM,
    ],
    skills: {
      passing: 66,
      shooting: 76,
      saving: 17,
      tackling: 59,
      agility: 83,
      strength: 76,
      penalty_taking: 18,
      jumping: 66,
    },
  },
  {
    _id: data.realPlayer.arsenal.p38,
    name: 'Khayon Edwards',
    number: 32,
    countryId: data.countries.england,
    age: 18,
    positions: [
      EPlayerPositionName.LCF,
      EPlayerPositionName.ST,
      EPlayerPositionName.RCF,
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
      EPlayerPositionName.RWM,
      EPlayerPositionName.LWM,
    ],
    skills: {
      passing: 68,
      shooting: 30,
      saving: 19,
      tackling: 63,
      agility: 35,
      strength: 63,
      penalty_taking: 5,
      jumping: 35,
    },
  },
  {
    _id: data.realPlayer.arsenal.p39,
    name: 'Gabriel Jesus',
    number: 17,
    countryId: data.countries.brazil,
    age: 25,
    positions: [
      EPlayerPositionName.LCF,
      EPlayerPositionName.ST,
      EPlayerPositionName.RCF,
      EPlayerPositionName.RWM,
      EPlayerPositionName.LWM,
    ],
    skills: {
      passing: 92,
      shooting: 87,
      saving: 22,
      tackling: 87,
      agility: 79,
      strength: 74,
      penalty_taking: 23,
      jumping: 79,
    },
  },
];

export const realPlayersArsenal = players.map((p) => ({ ...p, realTeamId: data.realTeams.arsenal }));
