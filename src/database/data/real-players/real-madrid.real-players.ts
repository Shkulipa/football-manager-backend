import { EPlayerPositionName } from './../../../services/repositories/real-player/constants/player-position-name.enum';
import data from './../../constants/ids';
import { RealPlayerDto } from './../dto/real-player.dto';

const players: RealPlayerDto[] = [
  {
    _id: data.realPlayer.realMadrid.p1,
    name: 'Thibaut Courtois',
    number: 50,
    countryId: data.countries.restWorld,
    age: 30,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 85,
      shooting: 99,
      saving: 8,
      tackling: 99,
      agility: 99,
      strength: 81,
      penalty_taking: 16,
      jumping: 83,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p2,
    name: 'Andriy Lunin',
    number: 55,
    countryId: data.countries.ukraine,
    age: 23,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 74,
      shooting: 66,
      saving: 15,
      tackling: 69,
      agility: 71,
      strength: 67,
      penalty_taking: 18,
      jumping: 73,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p3,
    name: 'Lucas Cañizares',
    number: 45,
    countryId: data.countries.spain,
    age: 20,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 48,
      shooting: 58,
      saving: 5,
      tackling: 44,
      agility: 72,
      strength: 34,
      penalty_taking: 5,
      jumping: 62,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p4,
    name: 'Luis López',
    number: 18,
    countryId: data.countries.spain,
    age: 21,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 46,
      shooting: 55,
      saving: 20,
      tackling: 49,
      agility: 58,
      strength: 57,
      penalty_taking: 5,
      jumping: 47,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p5,
    name: 'Mario De Luis',
    number: 54,
    countryId: data.countries.spain,
    age: 20,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 70,
      shooting: 30,
      saving: 9,
      tackling: 61,
      agility: 51,
      strength: 39,
      penalty_taking: 24,
      jumping: 49,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p6,
    name: 'Diego Piñeiro',
    number: 98,
    countryId: data.countries.spain,
    age: 18,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 50,
      shooting: 22,
      saving: 12,
      tackling: 33,
      agility: 49,
      strength: 39,
      penalty_taking: 16,
      jumping: 23,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p7,
    name: 'Guillermo Súnico',
    number: 5,
    countryId: data.countries.spain,
    age: 18,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 44,
      shooting: 53,
      saving: 5,
      tackling: 24,
      agility: 35,
      strength: 33,
      penalty_taking: 14,
      jumping: 15,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p8,
    name: 'David Alaba',
    number: 74,
    countryId: data.countries.restWorld,
    age: 30,
    positions: [
      EPlayerPositionName.LB,
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.LWB,
    ],
    skills: {
      passing: 84,
      shooting: 75,
      saving: 6,
      tackling: 87,
      agility: 78,
      strength: 74,
      penalty_taking: 23,
      jumping: 88,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p9,
    name: 'Ferland Mendy',
    number: 12,
    countryId: data.countries.france,
    age: 27,
    positions: [EPlayerPositionName.LB],
    skills: {
      passing: 67,
      shooting: 78,
      saving: 11,
      tackling: 78,
      agility: 89,
      strength: 64,
      penalty_taking: 20,
      jumping: 92,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p10,
    name: 'Rafel Obrador',
    number: 20,
    countryId: data.countries.spain,
    age: 18,
    positions: [EPlayerPositionName.LB],
    skills: {
      passing: 45,
      shooting: 53,
      saving: 22,
      tackling: 32,
      agility: 61,
      strength: 66,
      penalty_taking: 25,
      jumping: 37,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p11,
    name: 'Manu Serrano',
    number: 68,
    countryId: data.countries.spain,
    age: 18,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB, EPlayerPositionName.LB],
    skills: {
      passing: 34,
      shooting: 48,
      saving: 7,
      tackling: 38,
      agility: 59,
      strength: 23,
      penalty_taking: 5,
      jumping: 44,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p12,
    name: 'Nacho',
    number: 24,
    countryId: data.countries.spain,
    age: 32,
    positions: [
      EPlayerPositionName.CB,
      EPlayerPositionName.RCB,
      EPlayerPositionName.LCB,
      EPlayerPositionName.RB,
      EPlayerPositionName.LB,
    ],
    skills: {
      passing: 84,
      shooting: 91,
      saving: 24,
      tackling: 63,
      agility: 70,
      strength: 60,
      penalty_taking: 23,
      jumping: 94,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p13,
    name: 'Dani Carvajal',
    number: 37,
    countryId: data.countries.spain,
    age: 30,
    positions: [EPlayerPositionName.RB],
    skills: {
      passing: 71,
      shooting: 56,
      saving: 24,
      tackling: 79,
      agility: 94,
      strength: 88,
      penalty_taking: 24,
      jumping: 62,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p14,
    name: 'Eric',
    number: 13,
    countryId: data.countries.spain,
    age: 18,
    positions: [EPlayerPositionName.LWM, EPlayerPositionName.LWB],
    skills: {
      passing: 38,
      shooting: 46,
      saving: 15,
      tackling: 44,
      agility: 48,
      strength: 34,
      penalty_taking: 22,
      jumping: 36,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p15,
    name: 'Antonio Rüdiger',
    number: 78,
    countryId: data.countries.germany,
    age: 29,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 84,
      shooting: 72,
      saving: 13,
      tackling: 82,
      agility: 91,
      strength: 75,
      penalty_taking: 11,
      jumping: 94,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p16,
    name: 'Álvaro Odriozola',
    number: 27,
    countryId: data.countries.spain,
    age: 26,
    positions: [EPlayerPositionName.RB],
    skills: {
      passing: 61,
      shooting: 81,
      saving: 8,
      tackling: 64,
      agility: 90,
      strength: 52,
      penalty_taking: 25,
      jumping: 78,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p17,
    name: 'Peter',
    number: 38,
    countryId: data.countries.spain,
    age: 19,
    positions: [EPlayerPositionName.RWM, EPlayerPositionName.LWM],
    skills: {
      passing: 39,
      shooting: 54,
      saving: 9,
      tackling: 46,
      agility: 61,
      strength: 35,
      penalty_taking: 11,
      jumping: 65,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p18,
    name: 'Pablo Ramón',
    number: 31,
    countryId: data.countries.spain,
    age: 21,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB, EPlayerPositionName.RB],
    skills: {
      passing: 74,
      shooting: 36,
      saving: 20,
      tackling: 67,
      agility: 43,
      strength: 70,
      penalty_taking: 5,
      jumping: 40,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p19,
    name: 'Éder Militão',
    number: 69,
    countryId: data.countries.brazil,
    age: 24,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 87,
      shooting: 73,
      saving: 22,
      tackling: 93,
      agility: 67,
      strength: 96,
      penalty_taking: 14,
      jumping: 64,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p20,
    name: 'Jesús Vallejo',
    number: 35,
    countryId: data.countries.spain,
    age: 25,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 52,
      shooting: 82,
      saving: 20,
      tackling: 82,
      agility: 52,
      strength: 66,
      penalty_taking: 17,
      jumping: 68,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p21,
    name: 'Rafa Marín',
    number: 1,
    countryId: data.countries.spain,
    age: 20,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 71,
      shooting: 37,
      saving: 9,
      tackling: 69,
      agility: 41,
      strength: 67,
      penalty_taking: 5,
      jumping: 39,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p22,
    name: 'Álvaro Carrillo',
    number: 28,
    countryId: data.countries.spain,
    age: 20,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 71,
      shooting: 33,
      saving: 5,
      tackling: 68,
      agility: 36,
      strength: 44,
      penalty_taking: 5,
      jumping: 60,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p23,
    name: 'Marvel',
    number: 15,
    countryId: data.countries.spain,
    age: 19,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 43,
      shooting: 57,
      saving: 20,
      tackling: 34,
      agility: 38,
      strength: 66,
      penalty_taking: 6,
      jumping: 62,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p24,
    name: 'Mario Camero',
    number: 99,
    countryId: data.countries.spain,
    age: 18,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 58,
      shooting: 34,
      saving: 7,
      tackling: 63,
      agility: 29,
      strength: 34,
      penalty_taking: 8,
      jumping: 58,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p25,
    name: 'Alfredo Sotres',
    number: 75,
    countryId: data.countries.spain,
    age: 18,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 18,
      shooting: 58,
      saving: 24,
      tackling: 47,
      agility: 22,
      strength: 54,
      penalty_taking: 25,
      jumping: 29,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p26,
    name: 'Vinicius Tobias',
    number: 56,
    countryId: data.countries.brazil,
    age: 18,
    positions: [EPlayerPositionName.RB],
    skills: {
      passing: 49,
      shooting: 58,
      saving: 8,
      tackling: 38,
      agility: 46,
      strength: 55,
      penalty_taking: 7,
      jumping: 66,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p27,
    name: 'David Jiménez',
    number: 52,
    countryId: data.countries.spain,
    age: 18,
    positions: [EPlayerPositionName.RB, EPlayerPositionName.RWB],
    skills: {
      passing: 51,
      shooting: 43,
      saving: 22,
      tackling: 45,
      agility: 36,
      strength: 52,
      penalty_taking: 9,
      jumping: 37,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p28,
    name: 'Lucas Vázquez',
    number: 57,
    countryId: data.countries.spain,
    age: 31,
    positions: [EPlayerPositionName.RM, EPlayerPositionName.RWM, EPlayerPositionName.RB],
    skills: {
      passing: 62,
      shooting: 68,
      saving: 5,
      tackling: 80,
      agility: 86,
      strength: 72,
      penalty_taking: 13,
      jumping: 76,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p29,
    name: 'Federico Valverde',
    number: 26,
    countryId: data.countries.restWorld,
    age: 23,
    positions: [
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.RWM,
      EPlayerPositionName.RM,
    ],
    skills: {
      passing: 99,
      shooting: 74,
      saving: 22,
      tackling: 93,
      agility: 82,
      strength: 66,
      penalty_taking: 14,
      jumping: 96,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p30,
    name: 'Mario Martín',
    number: 53,
    countryId: data.countries.spain,
    age: 18,
    positions: [
      EPlayerPositionName.CDM,
      EPlayerPositionName.LDM,
      EPlayerPositionName.RDM,
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
    ],
    skills: {
      passing: 48,
      shooting: 47,
      saving: 23,
      tackling: 51,
      agility: 34,
      strength: 64,
      penalty_taking: 16,
      jumping: 50,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p31,
    name: 'Eduardo Camavinga',
    number: 6,
    countryId: data.countries.france,
    age: 19,
    positions: [EPlayerPositionName.CM, EPlayerPositionName.LCM, EPlayerPositionName.RCM],
    skills: {
      passing: 70,
      shooting: 86,
      saving: 7,
      tackling: 71,
      agility: 85,
      strength: 76,
      penalty_taking: 24,
      jumping: 80,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p32,
    name: 'Toni Kroos',
    number: 29,
    countryId: data.countries.germany,
    age: 32,
    positions: [
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.CDM,
      EPlayerPositionName.LDM,
      EPlayerPositionName.RDM,
    ],
    skills: {
      passing: 72,
      shooting: 78,
      saving: 23,
      tackling: 92,
      agility: 83,
      strength: 81,
      penalty_taking: 11,
      jumping: 86,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p33,
    name: 'Rodri',
    number: 65,
    countryId: data.countries.spain,
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
      passing: 47,
      shooting: 23,
      saving: 6,
      tackling: 44,
      agility: 22,
      strength: 26,
      penalty_taking: 19,
      jumping: 48,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p34,
    name: 'Aurélien Tchouameni',
    number: 79,
    countryId: data.countries.france,
    age: 22,
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
      saving: 19,
      tackling: 83,
      agility: 93,
      strength: 85,
      penalty_taking: 5,
      jumping: 75,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p35,
    name: 'Javi Villar',
    number: 63,
    countryId: data.countries.spain,
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
      passing: 62,
      shooting: 37,
      saving: 23,
      tackling: 61,
      agility: 59,
      strength: 39,
      penalty_taking: 19,
      jumping: 36,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p36,
    name: 'Luka Modrić',
    number: 40,
    countryId: data.countries.restWorld,
    age: 36,
    positions: [
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
    ],
    skills: {
      passing: 92,
      shooting: 91,
      saving: 15,
      tackling: 88,
      agility: 94,
      strength: 89,
      penalty_taking: 12,
      jumping: 86,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p37,
    name: 'Sergio Arribas',
    number: 60,
    countryId: data.countries.spain,
    age: 20,
    positions: [
      EPlayerPositionName.LWM,
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
      EPlayerPositionName.LM,
    ],
    skills: {
      passing: 58,
      shooting: 68,
      saving: 12,
      tackling: 48,
      agility: 76,
      strength: 78,
      penalty_taking: 10,
      jumping: 50,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p38,
    name: 'Jordi Martín',
    number: 85,
    countryId: data.countries.spain,
    age: 21,
    positions: [EPlayerPositionName.LWM, EPlayerPositionName.RWM, EPlayerPositionName.LM],
    skills: {
      passing: 41,
      shooting: 63,
      saving: 7,
      tackling: 43,
      agility: 61,
      strength: 53,
      penalty_taking: 5,
      jumping: 51,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p39,
    name: 'Manuel Ángel',
    number: 44,
    countryId: data.countries.spain,
    age: 18,
    positions: [EPlayerPositionName.CM, EPlayerPositionName.LCM, EPlayerPositionName.RCM, EPlayerPositionName.LWM],
    skills: {
      passing: 56,
      shooting: 20,
      saving: 24,
      tackling: 43,
      agility: 33,
      strength: 26,
      penalty_taking: 9,
      jumping: 50,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p40,
    name: 'Álvaro Martín',
    number: 36,
    countryId: data.countries.spain,
    age: 21,
    positions: [
      EPlayerPositionName.LWM,
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
      EPlayerPositionName.RWM,
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
    ],
    skills: {
      passing: 55,
      shooting: 49,
      saving: 8,
      tackling: 42,
      agility: 51,
      strength: 62,
      penalty_taking: 8,
      jumping: 53,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p41,
    name: 'Gonzalo',
    number: 70,
    countryId: data.countries.spain,
    age: 18,
    positions: [EPlayerPositionName.RWM, EPlayerPositionName.LWM, EPlayerPositionName.RM],
    skills: {
      passing: 45,
      shooting: 61,
      saving: 5,
      tackling: 31,
      agility: 29,
      strength: 45,
      penalty_taking: 25,
      jumping: 59,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p42,
    name: 'Vinícius Júnior',
    number: 95,
    countryId: data.countries.brazil,
    age: 21,
    positions: [EPlayerPositionName.LWM, EPlayerPositionName.RWM],
    skills: {
      passing: 94,
      shooting: 90,
      saving: 17,
      tackling: 99,
      agility: 84,
      strength: 80,
      penalty_taking: 9,
      jumping: 75,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p43,
    name: 'Eden Hazard',
    number: 46,
    countryId: data.countries.restWorld,
    age: 31,
    positions: [EPlayerPositionName.LWM, EPlayerPositionName.RWM],
    skills: {
      passing: 92,
      shooting: 58,
      saving: 15,
      tackling: 92,
      agility: 80,
      strength: 58,
      penalty_taking: 24,
      jumping: 70,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p44,
    name: 'Rodrygo',
    number: 84,
    countryId: data.countries.brazil,
    age: 21,
    positions: [EPlayerPositionName.RWM, EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF],
    skills: {
      passing: 81,
      shooting: 75,
      saving: 14,
      tackling: 91,
      agility: 69,
      strength: 87,
      penalty_taking: 19,
      jumping: 65,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p45,
    name: 'Marco Asensio',
    number: 80,
    countryId: data.countries.spain,
    age: 26,
    positions: [EPlayerPositionName.RWM],
    skills: {
      passing: 60,
      shooting: 62,
      saving: 15,
      tackling: 94,
      agility: 92,
      strength: 81,
      penalty_taking: 24,
      jumping: 73,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p46,
    name: 'Óscar Aranda',
    number: 88,
    countryId: data.countries.spain,
    age: 20,
    positions: [EPlayerPositionName.LWM, EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF],
    skills: {
      passing: 36,
      shooting: 43,
      saving: 11,
      tackling: 65,
      agility: 74,
      strength: 72,
      penalty_taking: 24,
      jumping: 34,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p47,
    name: 'Borja',
    number: 16,
    countryId: data.countries.spain,
    age: 18,
    positions: [
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
      EPlayerPositionName.RWM,
      EPlayerPositionName.RM,
    ],
    skills: {
      passing: 57,
      shooting: 45,
      saving: 5,
      tackling: 56,
      agility: 34,
      strength: 33,
      penalty_taking: 8,
      jumping: 45,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p48,
    name: 'Theo',
    number: 2,
    countryId: data.countries.france,
    age: 20,
    positions: [EPlayerPositionName.CM, EPlayerPositionName.LCM, EPlayerPositionName.RCM],
    skills: {
      passing: 47,
      shooting: 67,
      saving: 8,
      tackling: 55,
      agility: 35,
      strength: 61,
      penalty_taking: 20,
      jumping: 41,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p49,
    name: 'Takuhiro Nakai',
    number: 32,
    countryId: data.countries.restWorld,
    age: 18,
    positions: [EPlayerPositionName.CM, EPlayerPositionName.LCM, EPlayerPositionName.RCM],
    skills: {
      passing: 33,
      shooting: 62,
      saving: 18,
      tackling: 71,
      agility: 42,
      strength: 68,
      penalty_taking: 16,
      jumping: 36,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p50,
    name: 'Dani Ceballos',
    number: 81,
    countryId: data.countries.spain,
    age: 25,
    positions: [EPlayerPositionName.CM, EPlayerPositionName.LCM, EPlayerPositionName.RCM],
    skills: {
      passing: 90,
      shooting: 85,
      saving: 18,
      tackling: 54,
      agility: 70,
      strength: 74,
      penalty_taking: 13,
      jumping: 59,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p51,
    name: 'Carlos Dotor',
    number: 72,
    countryId: data.countries.spain,
    age: 21,
    positions: [EPlayerPositionName.CM, EPlayerPositionName.LCM, EPlayerPositionName.RCM],
    skills: {
      passing: 63,
      shooting: 47,
      saving: 10,
      tackling: 45,
      agility: 65,
      strength: 68,
      penalty_taking: 9,
      jumping: 42,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p52,
    name: 'Noel López',
    number: 92,
    countryId: data.countries.spain,
    age: 19,
    positions: [
      EPlayerPositionName.LCF,
      EPlayerPositionName.ST,
      EPlayerPositionName.RCF,
      EPlayerPositionName.RWM,
      EPlayerPositionName.LWM,
    ],
    skills: {
      passing: 35,
      shooting: 49,
      saving: 7,
      tackling: 59,
      agility: 49,
      strength: 73,
      penalty_taking: 8,
      jumping: 59,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p53,
    name: 'Karim Benzema',
    number: 47,
    countryId: data.countries.france,
    age: 34,
    positions: [EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF],
    skills: {
      passing: 91,
      shooting: 95,
      saving: 25,
      tackling: 99,
      agility: 87,
      strength: 96,
      penalty_taking: 19,
      jumping: 90,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p54,
    name: 'Mariano',
    number: 3,
    countryId: data.countries.restWorld,
    age: 28,
    positions: [EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF],
    skills: {
      passing: 87,
      shooting: 87,
      saving: 5,
      tackling: 49,
      agility: 49,
      strength: 66,
      penalty_taking: 25,
      jumping: 70,
    },
  },
  {
    _id: data.realPlayer.realMadrid.p55,
    name: 'Yeray',
    number: 23,
    countryId: data.countries.spain,
    age: 18,
    positions: [EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF],
    skills: {
      passing: 46,
      shooting: 30,
      saving: 25,
      tackling: 47,
      agility: 46,
      strength: 30,
      penalty_taking: 11,
      jumping: 29,
    },
  },
];

export const realPlayersRealMadrid = players.map((p) => ({ ...p, realTeamId: data.realTeams.realMadrid }));
