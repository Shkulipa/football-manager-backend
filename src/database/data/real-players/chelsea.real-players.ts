import { EPlayerPositionName } from './../../../services/repositories/real-player/constants/player-position-name.enum';
import data from './../../constants/ids';
import { RealPlayerDto } from './../dto/real-player.dto';

const players: RealPlayerDto[] = [
  {
    _id: data.realPlayer.chelsea.p1,
    name: 'Édouard Mendy',
    number: 35,
    countryId: data.countries.restWorld,
    age: 30,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 82,
      shooting: 88,
      saving: 9,
      tackling: 78,
      agility: 72,
      strength: 80,
      penalty_taking: 10,
      jumping: 80,
    },
  },
  {
    _id: data.realPlayer.chelsea.p2,
    name: 'Kepa Arrizabalaga',
    number: 61,
    countryId: data.countries.spain,
    age: 27,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 77,
      shooting: 67,
      saving: 19,
      tackling: 75,
      agility: 69,
      strength: 78,
      penalty_taking: 7,
      jumping: 66,
    },
  },
  {
    _id: data.realPlayer.chelsea.p3,
    name: 'Lucas Bergström',
    number: 23,
    countryId: data.countries.restWorld,
    age: 19,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 65,
      shooting: 55,
      saving: 9,
      tackling: 65,
      agility: 76,
      strength: 55,
      penalty_taking: 6,
      jumping: 44,
    },
  },
  {
    _id: data.realPlayer.chelsea.p4,
    name: 'Marcus Bettinelli',
    number: 21,
    countryId: data.countries.england,
    age: 30,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 58,
      shooting: 65,
      saving: 22,
      tackling: 53,
      agility: 73,
      strength: 45,
      penalty_taking: 25,
      jumping: 60,
    },
  },
  {
    _id: data.realPlayer.chelsea.p5,
    name: 'Gabriel Słonina',
    number: 93,
    countryId: data.countries.restWorld,
    age: 18,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 70,
      shooting: 38,
      saving: 25,
      tackling: 52,
      agility: 49,
      strength: 59,
      penalty_taking: 22,
      jumping: 56,
    },
  },
  {
    _id: data.realPlayer.chelsea.p6,
    name: 'Sami Tlemcani',
    number: 33,
    countryId: data.countries.restWorld,
    age: 18,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 41,
      shooting: 23,
      saving: 24,
      tackling: 29,
      agility: 47,
      strength: 53,
      penalty_taking: 18,
      jumping: 17,
    },
  },
  {
    _id: data.realPlayer.chelsea.p7,
    name: 'Prince Adegoke',
    number: 39,
    countryId: data.countries.england,
    age: 18,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 16,
      shooting: 42,
      saving: 8,
      tackling: 29,
      agility: 26,
      strength: 52,
      penalty_taking: 25,
      jumping: 39,
    },
  },
  {
    _id: data.realPlayer.chelsea.p8,
    name: 'Ethan Wady',
    number: 66,
    countryId: data.countries.restWorld,
    age: 20,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 44,
      shooting: 22,
      saving: 9,
      tackling: 41,
      agility: 42,
      strength: 24,
      penalty_taking: 11,
      jumping: 25,
    },
  },
  {
    _id: data.realPlayer.chelsea.p9,
    name: 'Ben Chilwell',
    number: 53,
    countryId: data.countries.england,
    age: 25,
    positions: [EPlayerPositionName.LB, EPlayerPositionName.LWB],
    skills: {
      passing: 59,
      shooting: 70,
      saving: 7,
      tackling: 88,
      agility: 65,
      strength: 93,
      penalty_taking: 14,
      jumping: 99,
    },
  },
  {
    _id: data.realPlayer.chelsea.p10,
    name: 'Dylan Williams',
    number: 17,
    countryId: data.countries.england,
    age: 18,
    positions: [
      EPlayerPositionName.LWB,
      EPlayerPositionName.LB,
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
    ],
    skills: {
      passing: 61,
      shooting: 57,
      saving: 17,
      tackling: 43,
      agility: 45,
      strength: 55,
      penalty_taking: 20,
      jumping: 39,
    },
  },
  {
    _id: data.realPlayer.chelsea.p11,
    name: 'Zak Sturge',
    number: 86,
    countryId: data.countries.england,
    age: 18,
    positions: [EPlayerPositionName.LB, EPlayerPositionName.LWB],
    skills: {
      passing: 30,
      shooting: 60,
      saving: 22,
      tackling: 26,
      agility: 23,
      strength: 56,
      penalty_taking: 21,
      jumping: 63,
    },
  },
  {
    _id: data.realPlayer.chelsea.p12,
    name: 'Marc Cucurella',
    number: 68,
    countryId: data.countries.spain,
    age: 23,
    positions: [EPlayerPositionName.LWB, EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 93,
      shooting: 89,
      saving: 7,
      tackling: 82,
      agility: 61,
      strength: 68,
      penalty_taking: 15,
      jumping: 57,
    },
  },
  {
    _id: data.realPlayer.chelsea.p13,
    name: 'Juan Familia-Castillo',
    number: 14,
    countryId: data.countries.restWorld,
    age: 22,
    positions: [
      EPlayerPositionName.LWB,
      EPlayerPositionName.LWM,
      EPlayerPositionName.CDM,
      EPlayerPositionName.LDM,
      EPlayerPositionName.RDM,
    ],
    skills: {
      passing: 59,
      shooting: 68,
      saving: 14,
      tackling: 38,
      agility: 72,
      strength: 47,
      penalty_taking: 23,
      jumping: 34,
    },
  },
  {
    _id: data.realPlayer.chelsea.p14,
    name: 'Derrick Abu',
    number: 27,
    countryId: data.countries.england,
    age: 18,
    positions: [EPlayerPositionName.RWB, EPlayerPositionName.RB, EPlayerPositionName.LB],
    skills: {
      passing: 58,
      shooting: 41,
      saving: 13,
      tackling: 62,
      agility: 45,
      strength: 28,
      penalty_taking: 9,
      jumping: 24,
    },
  },
  {
    _id: data.realPlayer.chelsea.p15,
    name: 'César Azpilicueta',
    number: 54,
    countryId: data.countries.spain,
    age: 32,
    positions: [EPlayerPositionName.RB, EPlayerPositionName.RWB, EPlayerPositionName.LWB, EPlayerPositionName.LB],
    skills: {
      passing: 59,
      shooting: 87,
      saving: 21,
      tackling: 90,
      agility: 56,
      strength: 68,
      penalty_taking: 25,
      jumping: 78,
    },
  },
  {
    _id: data.realPlayer.chelsea.p16,
    name: 'Josh Brooking',
    number: 47,
    countryId: data.countries.england,
    age: 19,
    positions: [EPlayerPositionName.RB, EPlayerPositionName.RWB],
    skills: {
      passing: 52,
      shooting: 52,
      saving: 15,
      tackling: 53,
      agility: 40,
      strength: 40,
      penalty_taking: 13,
      jumping: 39,
    },
  },
  {
    _id: data.realPlayer.chelsea.p17,
    name: 'Jimi Tauriainen',
    number: 37,
    countryId: data.countries.restWorld,
    age: 18,
    positions: [
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.CDM,
      EPlayerPositionName.LDM,
      EPlayerPositionName.RDM,
    ],
    skills: {
      passing: 53,
      shooting: 33,
      saving: 7,
      tackling: 60,
      agility: 26,
      strength: 57,
      penalty_taking: 21,
      jumping: 29,
    },
  },
  {
    _id: data.realPlayer.chelsea.p18,
    name: 'Harvey Vale',
    number: 65,
    countryId: data.countries.england,
    age: 18,
    positions: [
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
      EPlayerPositionName.LCF,
      EPlayerPositionName.ST,
      EPlayerPositionName.RCF,
    ],
    skills: {
      passing: 41,
      shooting: 60,
      saving: 10,
      tackling: 46,
      agility: 48,
      strength: 62,
      penalty_taking: 9,
      jumping: 67,
    },
  },
  {
    _id: data.realPlayer.chelsea.p19,
    name: 'Reece James',
    number: 4,
    countryId: data.countries.england,
    age: 22,
    positions: [
      EPlayerPositionName.RB,
      EPlayerPositionName.CDM,
      EPlayerPositionName.LDM,
      EPlayerPositionName.RDM,
      EPlayerPositionName.CB,
      EPlayerPositionName.RCB,
      EPlayerPositionName.LCB,
    ],
    skills: {
      passing: 66,
      shooting: 94,
      saving: 7,
      tackling: 70,
      agility: 98,
      strength: 97,
      penalty_taking: 5,
      jumping: 67,
    },
  },
  {
    _id: data.realPlayer.chelsea.p20,
    name: 'Trevoh Chalobah',
    number: 57,
    countryId: data.countries.england,
    age: 23,
    positions: [
      EPlayerPositionName.CB,
      EPlayerPositionName.RCB,
      EPlayerPositionName.LCB,
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
    ],
    skills: {
      passing: 71,
      shooting: 54,
      saving: 9,
      tackling: 67,
      agility: 73,
      strength: 90,
      penalty_taking: 23,
      jumping: 77,
    },
  },
  {
    _id: data.realPlayer.chelsea.p21,
    name: 'Wesley Fofana',
    number: 25,
    countryId: data.countries.france,
    age: 21,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 79,
      shooting: 66,
      saving: 11,
      tackling: 84,
      agility: 86,
      strength: 73,
      penalty_taking: 21,
      jumping: 68,
    },
  },
  {
    _id: data.realPlayer.chelsea.p22,
    name: 'Alfie Gilchrist',
    number: 34,
    countryId: data.countries.england,
    age: 18,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 54,
      shooting: 35,
      saving: 9,
      tackling: 56,
      agility: 28,
      strength: 49,
      penalty_taking: 18,
      jumping: 30,
    },
  },
  {
    _id: data.realPlayer.chelsea.p23,
    name: 'Kalidou Koulibaly',
    number: 10,
    countryId: data.countries.restWorld,
    age: 31,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 85,
      shooting: 64,
      saving: 21,
      tackling: 93,
      agility: 65,
      strength: 73,
      penalty_taking: 8,
      jumping: 94,
    },
  },
  {
    _id: data.realPlayer.chelsea.p24,
    name: 'Benoît Badiashile',
    number: 92,
    countryId: data.countries.france,
    age: 21,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 54,
      shooting: 86,
      saving: 13,
      tackling: 63,
      agility: 77,
      strength: 59,
      penalty_taking: 23,
      jumping: 81,
    },
  },
  {
    _id: data.realPlayer.chelsea.p25,
    name: 'Thiago Silva',
    number: 16,
    countryId: data.countries.brazil,
    age: 37,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 82,
      shooting: 86,
      saving: 16,
      tackling: 91,
      agility: 77,
      strength: 94,
      penalty_taking: 23,
      jumping: 74,
    },
  },
  {
    _id: data.realPlayer.chelsea.p26,
    name: 'Denis Zakaria',
    number: 95,
    countryId: data.countries.restWorld,
    age: 25,
    positions: [
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.CDM,
      EPlayerPositionName.LDM,
      EPlayerPositionName.RDM,
    ],
    skills: {
      passing: 58,
      shooting: 63,
      saving: 13,
      tackling: 87,
      agility: 88,
      strength: 59,
      penalty_taking: 11,
      jumping: 83,
    },
  },
  {
    _id: data.realPlayer.chelsea.p27,
    name: 'Dion Rankine',
    number: 31,
    countryId: data.countries.england,
    age: 19,
    positions: [
      EPlayerPositionName.RWB,
      EPlayerPositionName.RWM,
      EPlayerPositionName.LWM,
      EPlayerPositionName.LWB,
      EPlayerPositionName.RB,
    ],
    skills: {
      passing: 35,
      shooting: 65,
      saving: 9,
      tackling: 42,
      agility: 58,
      strength: 41,
      penalty_taking: 12,
      jumping: 59,
    },
  },
  {
    _id: data.realPlayer.chelsea.p28,
    name: "N'Golo Kanté",
    number: 62,
    countryId: data.countries.france,
    age: 31,
    positions: [EPlayerPositionName.CM, EPlayerPositionName.LCM, EPlayerPositionName.RCM],
    skills: {
      passing: 88,
      shooting: 80,
      saving: 19,
      tackling: 92,
      agility: 76,
      strength: 76,
      penalty_taking: 19,
      jumping: 92,
    },
  },
  {
    _id: data.realPlayer.chelsea.p29,
    name: 'Mateo Kovačić',
    number: 6,
    countryId: data.countries.restWorld,
    age: 28,
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
      shooting: 88,
      saving: 14,
      tackling: 76,
      agility: 74,
      strength: 91,
      penalty_taking: 5,
      jumping: 71,
    },
  },
  {
    _id: data.realPlayer.chelsea.p30,
    name: 'Enzo Fernández',
    number: 79,
    countryId: data.countries.argentina,
    age: 21,
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
      shooting: 98,
      saving: 6,
      tackling: 72,
      agility: 86,
      strength: 60,
      penalty_taking: 22,
      jumping: 72,
    },
  },
  {
    _id: data.realPlayer.chelsea.p31,
    name: 'Charlie Webster',
    number: 46,
    countryId: data.countries.england,
    age: 18,
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
      passing: 42,
      shooting: 58,
      saving: 19,
      tackling: 40,
      agility: 44,
      strength: 60,
      penalty_taking: 17,
      jumping: 62,
    },
  },
  {
    _id: data.realPlayer.chelsea.p32,
    name: 'Andrey Santos',
    number: 82,
    countryId: data.countries.brazil,
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
      passing: 43,
      shooting: 65,
      saving: 12,
      tackling: 78,
      agility: 42,
      strength: 77,
      penalty_taking: 9,
      jumping: 55,
    },
  },
  {
    _id: data.realPlayer.chelsea.p33,
    name: 'Ruben Loftus-Cheek',
    number: 67,
    countryId: data.countries.england,
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
      passing: 85,
      shooting: 80,
      saving: 17,
      tackling: 63,
      agility: 68,
      strength: 74,
      penalty_taking: 14,
      jumping: 74,
    },
  },
  {
    _id: data.realPlayer.chelsea.p34,
    name: 'Ben Elliott',
    number: 70,
    countryId: data.countries.england,
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
      passing: 34,
      shooting: 56,
      saving: 7,
      tackling: 38,
      agility: 60,
      strength: 34,
      penalty_taking: 22,
      jumping: 60,
    },
  },
  {
    _id: data.realPlayer.chelsea.p35,
    name: 'Conor Gallagher',
    number: 69,
    countryId: data.countries.england,
    age: 22,
    positions: [
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
    ],
    skills: {
      passing: 58,
      shooting: 86,
      saving: 12,
      tackling: 63,
      agility: 67,
      strength: 81,
      penalty_taking: 15,
      jumping: 77,
    },
  },
  {
    _id: data.realPlayer.chelsea.p36,
    name: 'Mason Mount',
    number: 49,
    countryId: data.countries.england,
    age: 23,
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
      passing: 85,
      shooting: 79,
      saving: 6,
      tackling: 85,
      agility: 86,
      strength: 79,
      penalty_taking: 11,
      jumping: 78,
    },
  },
  {
    _id: data.realPlayer.chelsea.p37,
    name: 'Kai Havertz',
    number: 15,
    countryId: data.countries.germany,
    age: 23,
    positions: [EPlayerPositionName.AML, EPlayerPositionName.AMC, EPlayerPositionName.AMR],
    skills: {
      passing: 67,
      shooting: 93,
      saving: 5,
      tackling: 92,
      agility: 97,
      strength: 71,
      penalty_taking: 9,
      jumping: 72,
    },
  },
  {
    _id: data.realPlayer.chelsea.p38,
    name: 'Hakim Ziyech',
    number: 63,
    countryId: data.countries.restWorld,
    age: 29,
    positions: [
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
      EPlayerPositionName.LWM,
      EPlayerPositionName.RM,
      EPlayerPositionName.LM,
    ],
    skills: {
      passing: 71,
      shooting: 58,
      saving: 7,
      tackling: 90,
      agility: 60,
      strength: 79,
      penalty_taking: 6,
      jumping: 92,
    },
  },
  {
    _id: data.realPlayer.chelsea.p39,
    name: 'Noni Madueke',
    number: 96,
    countryId: data.countries.england,
    age: 20,
    positions: [
      EPlayerPositionName.RWM,
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
      EPlayerPositionName.LWM,
      EPlayerPositionName.LM,
    ],
    skills: {
      passing: 89,
      shooting: 74,
      saving: 14,
      tackling: 66,
      agility: 83,
      strength: 51,
      penalty_taking: 25,
      jumping: 57,
    },
  },
  {
    _id: data.realPlayer.chelsea.p40,
    name: 'Christian Pulisic',
    number: 77,
    countryId: data.countries.restWorld,
    age: 23,
    positions: [
      EPlayerPositionName.LWM,
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
      EPlayerPositionName.RWM,
      EPlayerPositionName.RM,
      EPlayerPositionName.LM,
    ],
    skills: {
      passing: 58,
      shooting: 65,
      saving: 24,
      tackling: 92,
      agility: 78,
      strength: 85,
      penalty_taking: 6,
      jumping: 72,
    },
  },
  {
    _id: data.realPlayer.chelsea.p41,
    name: 'Raheem Sterling',
    number: 74,
    countryId: data.countries.england,
    age: 27,
    positions: [EPlayerPositionName.RWM, EPlayerPositionName.LWM, EPlayerPositionName.RM, EPlayerPositionName.LM],
    skills: {
      passing: 74,
      shooting: 88,
      saving: 11,
      tackling: 79,
      agility: 87,
      strength: 78,
      penalty_taking: 11,
      jumping: 92,
    },
  },
  {
    _id: data.realPlayer.chelsea.p42,
    name: 'Mykhaylo Mudryk',
    number: 40,
    countryId: data.countries.ukraine,
    age: 21,
    positions: [
      EPlayerPositionName.LWM,
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
      EPlayerPositionName.RWM,
      EPlayerPositionName.LM,
    ],
    skills: {
      passing: 66,
      shooting: 78,
      saving: 20,
      tackling: 88,
      agility: 74,
      strength: 56,
      penalty_taking: 8,
      jumping: 70,
    },
  },
  {
    _id: data.realPlayer.chelsea.p43,
    name: 'Omari Hutchinson',
    number: 94,
    countryId: data.countries.england,
    age: 18,
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
      passing: 53,
      shooting: 57,
      saving: 18,
      tackling: 54,
      agility: 67,
      strength: 43,
      penalty_taking: 8,
      jumping: 56,
    },
  },
  {
    _id: data.realPlayer.chelsea.p44,
    name: 'Joe Haigh',
    number: 51,
    countryId: data.countries.england,
    age: 19,
    positions: [EPlayerPositionName.LWM],
    skills: {
      passing: 37,
      shooting: 33,
      saving: 11,
      tackling: 67,
      agility: 63,
      strength: 67,
      penalty_taking: 21,
      jumping: 33,
    },
  },
  {
    _id: data.realPlayer.chelsea.p45,
    name: 'João Félix',
    number: 26,
    countryId: data.countries.restWorld,
    age: 22,
    positions: [EPlayerPositionName.AML, EPlayerPositionName.AMC, EPlayerPositionName.AMR, EPlayerPositionName.RWM],
    skills: {
      passing: 98,
      shooting: 64,
      saving: 16,
      tackling: 62,
      agility: 96,
      strength: 81,
      penalty_taking: 25,
      jumping: 79,
    },
  },
  {
    _id: data.realPlayer.chelsea.p46,
    name: 'Silko Thomas',
    number: 29,
    countryId: data.countries.england,
    age: 18,
    positions: [EPlayerPositionName.RWB, EPlayerPositionName.RWM, EPlayerPositionName.LWM],
    skills: {
      passing: 36,
      shooting: 25,
      saving: 6,
      tackling: 50,
      agility: 48,
      strength: 61,
      penalty_taking: 19,
      jumping: 38,
    },
  },
  {
    _id: data.realPlayer.chelsea.p47,
    name: 'Datro Fofana',
    number: 8,
    countryId: data.countries.restWorld,
    age: 19,
    positions: [
      EPlayerPositionName.LCF,
      EPlayerPositionName.ST,
      EPlayerPositionName.RCF,
      EPlayerPositionName.RWM,
      EPlayerPositionName.LWM,
    ],
    skills: {
      passing: 65,
      shooting: 67,
      saving: 19,
      tackling: 80,
      agility: 52,
      strength: 75,
      penalty_taking: 5,
      jumping: 57,
    },
  },
  {
    _id: data.realPlayer.chelsea.p48,
    name: 'Bryan Fiabema',
    number: 41,
    countryId: data.countries.restWorld,
    age: 19,
    positions: [EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF, EPlayerPositionName.LWM],
    skills: {
      passing: 27,
      shooting: 61,
      saving: 21,
      tackling: 45,
      agility: 43,
      strength: 48,
      penalty_taking: 25,
      jumping: 40,
    },
  },
  {
    _id: data.realPlayer.chelsea.p49,
    name: 'Pierre-Emerick Aubameyang',
    number: 44,
    countryId: data.countries.restWorld,
    age: 33,
    positions: [EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF, EPlayerPositionName.RWM],
    skills: {
      passing: 92,
      shooting: 89,
      saving: 16,
      tackling: 55,
      agility: 57,
      strength: 87,
      penalty_taking: 22,
      jumping: 52,
    },
  },
  {
    _id: data.realPlayer.chelsea.p50,
    name: 'Carney Chukwuemeka',
    number: 78,
    countryId: data.countries.england,
    age: 18,
    positions: [EPlayerPositionName.CM, EPlayerPositionName.LCM, EPlayerPositionName.RCM],
    skills: {
      passing: 79,
      shooting: 55,
      saving: 22,
      tackling: 73,
      agility: 71,
      strength: 47,
      penalty_taking: 19,
      jumping: 53,
    },
  },
  {
    _id: data.realPlayer.chelsea.p51,
    name: 'Malik Mothersille',
    number: 60,
    countryId: data.countries.england,
    age: 18,
    positions: [EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF, EPlayerPositionName.RWM],
    skills: {
      passing: 37,
      shooting: 61,
      saving: 8,
      tackling: 37,
      agility: 37,
      strength: 61,
      penalty_taking: 7,
      jumping: 61,
    },
  },
  {
    _id: data.realPlayer.chelsea.p52,
    name: 'Armando Broja',
    number: 24,
    countryId: data.countries.restWorld,
    age: 20,
    positions: [
      EPlayerPositionName.LCF,
      EPlayerPositionName.ST,
      EPlayerPositionName.RCF,
      EPlayerPositionName.RWM,
      EPlayerPositionName.LWM,
    ],
    skills: {
      passing: 55,
      shooting: 66,
      saving: 21,
      tackling: 58,
      agility: 81,
      strength: 70,
      penalty_taking: 14,
      jumping: 78,
    },
  },
  {
    _id: data.realPlayer.chelsea.p53,
    name: 'Jayden Wareham',
    number: 20,
    countryId: data.countries.england,
    age: 19,
    positions: [EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF],
    skills: {
      passing: 32,
      shooting: 48,
      saving: 12,
      tackling: 50,
      agility: 30,
      strength: 27,
      penalty_taking: 11,
      jumping: 53,
    },
  },
  {
    _id: data.realPlayer.chelsea.p54,
    name: 'Mason Burstow',
    number: 18,
    countryId: data.countries.england,
    age: 18,
    positions: [EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF],
    skills: {
      passing: 56,
      shooting: 68,
      saving: 24,
      tackling: 34,
      agility: 41,
      strength: 46,
      penalty_taking: 11,
      jumping: 61,
    },
  },
];

export const realPlayersChelsea = players.map((p) => ({
  ...p,
  realTeamId: data.realTeams.chelsea,
}));
