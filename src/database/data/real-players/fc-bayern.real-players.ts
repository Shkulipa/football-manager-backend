import { EPlayerPositionName } from 'src/services/repositories/real-player/constants/player-position-name.enum';

import data from './../../constants/ids';
import { RealPlayerDto } from './../dto/real-player.dto';

const players: RealPlayerDto[] = [
  {
    _id: data.realPlayer.bayrenMunchen.p1,
    name: 'Manuel Neuer',
    number: 28,
    countryId: data.countries.germany,
    age: 36,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 76,
      shooting: 93,
      saving: 24,
      tackling: 99,
      agility: 73,
      strength: 95,
      penalty_taking: 18,
      jumping: 68,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p2,
    name: 'Yann Sommer',
    number: 27,
    countryId: data.countries.restWorld,
    age: 33,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 86,
      shooting: 69,
      saving: 13,
      tackling: 87,
      agility: 74,
      strength: 82,
      penalty_taking: 12,
      jumping: 70,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p3,
    name: 'Sven Ulreich',
    number: 9,
    countryId: data.countries.germany,
    age: 33,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 70,
      shooting: 65,
      saving: 13,
      tackling: 54,
      agility: 74,
      strength: 58,
      penalty_taking: 6,
      jumping: 63,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p4,
    name: 'Lukas Schneller',
    number: 38,
    countryId: data.countries.germany,
    age: 20,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 42,
      shooting: 58,
      saving: 22,
      tackling: 65,
      agility: 35,
      strength: 37,
      penalty_taking: 17,
      jumping: 63,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p5,
    name: 'Johannes Schenk',
    number: 66,
    countryId: data.countries.germany,
    age: 19,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 52,
      shooting: 41,
      saving: 8,
      tackling: 39,
      agility: 57,
      strength: 46,
      penalty_taking: 22,
      jumping: 59,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p6,
    name: 'Jakob Mayer',
    number: 91,
    countryId: data.countries.germany,
    age: 20,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 46,
      shooting: 60,
      saving: 11,
      tackling: 40,
      agility: 48,
      strength: 26,
      penalty_taking: 7,
      jumping: 38,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p7,
    name: 'Tom Ritzy Hülsmann',
    number: 63,
    countryId: data.countries.germany,
    age: 18,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 59,
      shooting: 27,
      saving: 16,
      tackling: 23,
      agility: 63,
      strength: 43,
      penalty_taking: 17,
      jumping: 43,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p8,
    name: 'Manuel Kainz',
    number: 88,
    countryId: data.countries.germany,
    age: 20,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 52,
      shooting: 30,
      saving: 14,
      tackling: 34,
      agility: 23,
      strength: 56,
      penalty_taking: 24,
      jumping: 63,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p9,
    name: 'Michael Netolitzký',
    number: 2,
    countryId: data.countries.germany,
    age: 28,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 40,
      shooting: 39,
      saving: 23,
      tackling: 40,
      agility: 41,
      strength: 47,
      penalty_taking: 19,
      jumping: 33,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p10,
    name: 'Angelo Brückner',
    number: 86,
    countryId: data.countries.germany,
    age: 19,
    positions: [EPlayerPositionName.LB],
    skills: {
      passing: 65,
      shooting: 31,
      saving: 24,
      tackling: 39,
      agility: 57,
      strength: 35,
      penalty_taking: 11,
      jumping: 61,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p11,
    name: 'Leon Fust',
    number: 21,
    countryId: data.countries.germany,
    age: 19,
    positions: [EPlayerPositionName.LB, EPlayerPositionName.CM, EPlayerPositionName.LCM, EPlayerPositionName.RCM],
    skills: {
      passing: 59,
      shooting: 27,
      saving: 22,
      tackling: 48,
      agility: 38,
      strength: 52,
      penalty_taking: 21,
      jumping: 34,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p12,
    name: 'Jonas Kehl',
    number: 60,
    countryId: data.countries.germany,
    age: 21,
    positions: [EPlayerPositionName.LB, EPlayerPositionName.LM, EPlayerPositionName.RWB, EPlayerPositionName.LWB],
    skills: {
      passing: 37,
      shooting: 29,
      saving: 6,
      tackling: 46,
      agility: 57,
      strength: 49,
      penalty_taking: 12,
      jumping: 40,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p13,
    name: 'Alphonso Davies',
    number: 52,
    countryId: data.countries.restWorld,
    age: 21,
    positions: [EPlayerPositionName.LB, EPlayerPositionName.LWM, EPlayerPositionName.LM],
    skills: {
      passing: 59,
      shooting: 99,
      saving: 21,
      tackling: 68,
      agility: 71,
      strength: 87,
      penalty_taking: 16,
      jumping: 90,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p14,
    name: 'Daley Blind',
    number: 47,
    countryId: data.countries.restWorld,
    age: 32,
    positions: [
      EPlayerPositionName.CB,
      EPlayerPositionName.RCB,
      EPlayerPositionName.LCB,
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
    ],
    skills: {
      passing: 88,
      shooting: 74,
      saving: 6,
      tackling: 60,
      agility: 93,
      strength: 55,
      penalty_taking: 9,
      jumping: 74,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p15,
    name: 'Lucas Hernández',
    number: 92,
    countryId: data.countries.france,
    age: 26,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 68,
      shooting: 88,
      saving: 25,
      tackling: 63,
      agility: 62,
      strength: 93,
      penalty_taking: 8,
      jumping: 94,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p16,
    name: 'João Cancelo',
    number: 13,
    countryId: data.countries.restWorld,
    age: 28,
    positions: [EPlayerPositionName.RWB, EPlayerPositionName.RB],
    skills: {
      passing: 96,
      shooting: 68,
      saving: 20,
      tackling: 78,
      agility: 76,
      strength: 86,
      penalty_taking: 14,
      jumping: 88,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p17,
    name: 'Josip Stanišić',
    number: 42,
    countryId: data.countries.restWorld,
    age: 22,
    positions: [
      EPlayerPositionName.CB,
      EPlayerPositionName.RCB,
      EPlayerPositionName.LCB,
      EPlayerPositionName.RWB,
      EPlayerPositionName.LB,
    ],
    skills: {
      passing: 84,
      shooting: 50,
      saving: 12,
      tackling: 71,
      agility: 62,
      strength: 72,
      penalty_taking: 9,
      jumping: 63,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p18,
    name: 'Justin Janitzek',
    number: 85,
    countryId: data.countries.germany,
    age: 18,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB, EPlayerPositionName.LB],
    skills: {
      passing: 40,
      shooting: 58,
      saving: 6,
      tackling: 39,
      agility: 59,
      strength: 32,
      penalty_taking: 19,
      jumping: 66,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p19,
    name: 'Noussair Mazraoui',
    number: 24,
    countryId: data.countries.restWorld,
    age: 24,
    positions: [
      EPlayerPositionName.RB,
      EPlayerPositionName.RM,
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.CDM,
      EPlayerPositionName.LDM,
      EPlayerPositionName.RDM,
      EPlayerPositionName.LB,
    ],
    skills: {
      passing: 57,
      shooting: 56,
      saving: 9,
      tackling: 91,
      agility: 92,
      strength: 85,
      penalty_taking: 16,
      jumping: 63,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p20,
    name: 'Gabriel Marušić',
    number: 17,
    countryId: data.countries.restWorld,
    age: 19,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 48,
      shooting: 44,
      saving: 25,
      tackling: 53,
      agility: 39,
      strength: 36,
      penalty_taking: 19,
      jumping: 56,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p21,
    name: 'Benjamin Pavard',
    number: 81,
    countryId: data.countries.france,
    age: 26,
    positions: [
      EPlayerPositionName.CB,
      EPlayerPositionName.RCB,
      EPlayerPositionName.LCB,
      EPlayerPositionName.RB,
      EPlayerPositionName.RWB,
    ],
    skills: {
      passing: 87,
      shooting: 91,
      saving: 10,
      tackling: 68,
      agility: 61,
      strength: 84,
      penalty_taking: 9,
      jumping: 65,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p22,
    name: 'Bouna Sarr',
    number: 33,
    countryId: data.countries.restWorld,
    age: 30,
    positions: [EPlayerPositionName.RB, EPlayerPositionName.RWM, EPlayerPositionName.RM],
    skills: {
      passing: 74,
      shooting: 54,
      saving: 21,
      tackling: 46,
      agility: 82,
      strength: 65,
      penalty_taking: 11,
      jumping: 63,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p23,
    name: 'Leon Goretzka',
    number: 34,
    countryId: data.countries.germany,
    age: 27,
    positions: [
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
    ],
    skills: {
      passing: 91,
      shooting: 86,
      saving: 14,
      tackling: 78,
      agility: 74,
      strength: 73,
      penalty_taking: 9,
      jumping: 90,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p24,
    name: 'Matthijs de Ligt',
    number: 96,
    countryId: data.countries.restWorld,
    age: 22,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 92,
      shooting: 66,
      saving: 6,
      tackling: 73,
      agility: 88,
      strength: 85,
      penalty_taking: 16,
      jumping: 70,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p25,
    name: 'Roman Reinelt',
    number: 39,
    countryId: data.countries.germany,
    age: 19,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB, EPlayerPositionName.RB],
    skills: {
      passing: 34,
      shooting: 52,
      saving: 15,
      tackling: 60,
      agility: 45,
      strength: 26,
      penalty_taking: 21,
      jumping: 41,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p26,
    name: 'Luca Denk',
    number: 72,
    countryId: data.countries.germany,
    age: 19,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 63,
      shooting: 51,
      saving: 16,
      tackling: 27,
      agility: 55,
      strength: 35,
      penalty_taking: 8,
      jumping: 39,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p27,
    name: 'Dayot Upamecano',
    number: 6,
    countryId: data.countries.france,
    age: 23,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 67,
      shooting: 85,
      saving: 11,
      tackling: 73,
      agility: 71,
      strength: 83,
      penalty_taking: 22,
      jumping: 89,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p28,
    name: 'Liam Morrison',
    number: 98,
    countryId: data.countries.restWorld,
    age: 19,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 27,
      shooting: 29,
      saving: 21,
      tackling: 63,
      agility: 61,
      strength: 38,
      penalty_taking: 10,
      jumping: 52,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p29,
    name: 'Antonio Tikvic',
    number: 12,
    countryId: data.countries.restWorld,
    age: 18,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 61,
      shooting: 42,
      saving: 24,
      tackling: 44,
      agility: 44,
      strength: 27,
      penalty_taking: 22,
      jumping: 46,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p30,
    name: 'Rareş Canea',
    number: 5,
    countryId: data.countries.germany,
    age: 18,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 31,
      shooting: 20,
      saving: 18,
      tackling: 50,
      agility: 50,
      strength: 20,
      penalty_taking: 8,
      jumping: 39,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p31,
    name: 'Joshua Kimmich',
    number: 8,
    countryId: data.countries.germany,
    age: 27,
    positions: [
      EPlayerPositionName.CDM,
      EPlayerPositionName.LDM,
      EPlayerPositionName.RDM,
      EPlayerPositionName.RWB,
      EPlayerPositionName.RB,
    ],
    skills: {
      passing: 99,
      shooting: 90,
      saving: 15,
      tackling: 87,
      agility: 99,
      strength: 88,
      penalty_taking: 20,
      jumping: 71,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p32,
    name: 'Moritz Mosandl',
    number: 54,
    countryId: data.countries.germany,
    age: 20,
    positions: [
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.CDM,
      EPlayerPositionName.LDM,
      EPlayerPositionName.RDM,
      EPlayerPositionName.RB,
    ],
    skills: {
      passing: 39,
      shooting: 41,
      saving: 10,
      tackling: 42,
      agility: 43,
      strength: 41,
      penalty_taking: 25,
      jumping: 40,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p33,
    name: 'Mamin Sanyang',
    number: 61,
    countryId: data.countries.germany,
    age: 19,
    positions: [EPlayerPositionName.RWM, EPlayerPositionName.RM, EPlayerPositionName.RWB, EPlayerPositionName.RB],
    skills: {
      passing: 63,
      shooting: 29,
      saving: 12,
      tackling: 65,
      agility: 65,
      strength: 27,
      penalty_taking: 5,
      jumping: 27,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p34,
    name: 'Younes Aitamer',
    number: 74,
    countryId: data.countries.restWorld,
    age: 19,
    positions: [EPlayerPositionName.RWM, EPlayerPositionName.RM, EPlayerPositionName.RWB, EPlayerPositionName.RB],
    skills: {
      passing: 63,
      shooting: 64,
      saving: 21,
      tackling: 56,
      agility: 27,
      strength: 26,
      penalty_taking: 5,
      jumping: 34,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p35,
    name: 'David Jonathans',
    number: 89,
    countryId: data.countries.restWorld,
    age: 18,
    positions: [EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF],
    skills: {
      passing: 57,
      shooting: 33,
      saving: 9,
      tackling: 25,
      agility: 27,
      strength: 55,
      penalty_taking: 5,
      jumping: 49,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p36,
    name: 'Aleksandar Pavlovic',
    number: 32,
    countryId: data.countries.germany,
    age: 18,
    positions: [EPlayerPositionName.CDM, EPlayerPositionName.LDM, EPlayerPositionName.RDM],
    skills: {
      passing: 31,
      shooting: 39,
      saving: 14,
      tackling: 53,
      agility: 54,
      strength: 38,
      penalty_taking: 6,
      jumping: 61,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p37,
    name: 'Ryan Gravenberch',
    number: 19,
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
      passing: 68,
      shooting: 70,
      saving: 9,
      tackling: 86,
      agility: 73,
      strength: 52,
      penalty_taking: 12,
      jumping: 65,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p38,
    name: 'Behar Neziri',
    number: 29,
    countryId: data.countries.restWorld,
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
      passing: 51,
      shooting: 41,
      saving: 19,
      tackling: 47,
      agility: 44,
      strength: 48,
      penalty_taking: 18,
      jumping: 45,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p39,
    name: 'Timo Kern',
    number: 62,
    countryId: data.countries.germany,
    age: 32,
    positions: [EPlayerPositionName.CM, EPlayerPositionName.LCM, EPlayerPositionName.RCM],
    skills: {
      passing: 53,
      shooting: 49,
      saving: 7,
      tackling: 35,
      agility: 57,
      strength: 71,
      penalty_taking: 20,
      jumping: 53,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p40,
    name: 'Lee Hyun-Ju',
    number: 57,
    countryId: data.countries.restWorld,
    age: 19,
    positions: [
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
      EPlayerPositionName.RWM,
      EPlayerPositionName.LWM,
    ],
    skills: {
      passing: 66,
      shooting: 36,
      saving: 19,
      tackling: 53,
      agility: 61,
      strength: 49,
      penalty_taking: 18,
      jumping: 41,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p41,
    name: 'Jamal Musiala',
    number: 16,
    countryId: data.countries.germany,
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
      passing: 79,
      shooting: 86,
      saving: 13,
      tackling: 72,
      agility: 79,
      strength: 82,
      penalty_taking: 8,
      jumping: 76,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p42,
    name: 'Frans Krätzig',
    number: 25,
    countryId: data.countries.germany,
    age: 19,
    positions: [EPlayerPositionName.AML, EPlayerPositionName.AMC, EPlayerPositionName.AMR],
    skills: {
      passing: 42,
      shooting: 35,
      saving: 16,
      tackling: 40,
      agility: 54,
      strength: 47,
      penalty_taking: 24,
      jumping: 28,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p43,
    name: 'Benjamin Dibrani',
    number: 99,
    countryId: data.countries.restWorld,
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
      passing: 26,
      shooting: 56,
      saving: 25,
      tackling: 25,
      agility: 28,
      strength: 57,
      penalty_taking: 14,
      jumping: 54,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p44,
    name: 'Thomas Müller',
    number: 26,
    countryId: data.countries.germany,
    age: 32,
    positions: [
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
      EPlayerPositionName.LCF,
      EPlayerPositionName.ST,
      EPlayerPositionName.RCF,
      EPlayerPositionName.RM,
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
    ],
    skills: {
      passing: 69,
      shooting: 90,
      saving: 8,
      tackling: 99,
      agility: 78,
      strength: 80,
      penalty_taking: 18,
      jumping: 88,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p45,
    name: 'Leroy Sané',
    number: 68,
    countryId: data.countries.germany,
    age: 26,
    positions: [
      EPlayerPositionName.LWM,
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
      EPlayerPositionName.RM,
      EPlayerPositionName.LM,
    ],
    skills: {
      passing: 96,
      shooting: 87,
      saving: 20,
      tackling: 70,
      agility: 76,
      strength: 90,
      penalty_taking: 23,
      jumping: 79,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p46,
    name: 'Kingsley Coman',
    number: 53,
    countryId: data.countries.france,
    age: 26,
    positions: [EPlayerPositionName.LWM, EPlayerPositionName.RM, EPlayerPositionName.LM],
    skills: {
      passing: 84,
      shooting: 78,
      saving: 7,
      tackling: 77,
      agility: 75,
      strength: 87,
      penalty_taking: 10,
      jumping: 85,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p47,
    name: 'Serge Gnabry',
    number: 4,
    countryId: data.countries.germany,
    age: 26,
    positions: [EPlayerPositionName.RWM, EPlayerPositionName.RM, EPlayerPositionName.LM],
    skills: {
      passing: 99,
      shooting: 61,
      saving: 22,
      tackling: 79,
      agility: 91,
      strength: 69,
      penalty_taking: 16,
      jumping: 81,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p48,
    name: 'Barry Hepburn',
    number: 64,
    countryId: data.countries.restWorld,
    age: 18,
    positions: [EPlayerPositionName.RWM, EPlayerPositionName.RM, EPlayerPositionName.LM],
    skills: {
      passing: 34,
      shooting: 53,
      saving: 18,
      tackling: 44,
      agility: 25,
      strength: 59,
      penalty_taking: 25,
      jumping: 19,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p49,
    name: 'Eric Maxim Choupo-Moting',
    number: 73,
    countryId: data.countries.restWorld,
    age: 33,
    positions: [
      EPlayerPositionName.LCF,
      EPlayerPositionName.ST,
      EPlayerPositionName.RCF,
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
    ],
    skills: {
      passing: 84,
      shooting: 72,
      saving: 5,
      tackling: 58,
      agility: 70,
      strength: 81,
      penalty_taking: 15,
      jumping: 61,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p50,
    name: 'Grant-Leon Ranos',
    number: 77,
    countryId: data.countries.germany,
    age: 18,
    positions: [
      EPlayerPositionName.LCF,
      EPlayerPositionName.ST,
      EPlayerPositionName.RCF,
      EPlayerPositionName.RWM,
      EPlayerPositionName.LWM,
    ],
    skills: {
      passing: 45,
      shooting: 40,
      saving: 12,
      tackling: 58,
      agility: 46,
      strength: 53,
      penalty_taking: 12,
      jumping: 52,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p51,
    name: 'Yusuf Kabadayı',
    number: 90,
    countryId: data.countries.germany,
    age: 18,
    positions: [EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF],
    skills: {
      passing: 35,
      shooting: 63,
      saving: 21,
      tackling: 30,
      agility: 61,
      strength: 37,
      penalty_taking: 20,
      jumping: 68,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p52,
    name: 'Sadio Mané',
    number: 10,
    countryId: data.countries.restWorld,
    age: 30,
    positions: [EPlayerPositionName.LWM, EPlayerPositionName.AML, EPlayerPositionName.AMC, EPlayerPositionName.AMR],
    skills: {
      passing: 78,
      shooting: 93,
      saving: 19,
      tackling: 81,
      agility: 77,
      strength: 89,
      penalty_taking: 6,
      jumping: 92,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p53,
    name: 'Lucas Copado',
    number: 82,
    countryId: data.countries.germany,
    age: 18,
    positions: [EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF],
    skills: {
      passing: 41,
      shooting: 59,
      saving: 25,
      tackling: 34,
      agility: 45,
      strength: 66,
      penalty_taking: 14,
      jumping: 55,
    },
  },
  {
    _id: data.realPlayer.bayrenMunchen.p54,
    name: 'Désiré Segbé',
    number: 41,
    countryId: data.countries.restWorld,
    age: 29,
    positions: [EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF],
    skills: {
      passing: 43,
      shooting: 30,
      saving: 18,
      tackling: 66,
      agility: 39,
      strength: 57,
      penalty_taking: 11,
      jumping: 53,
    },
  },
];

export const realPlayerFCBayern = players.map((p) => ({ ...p, realTeamId: data.realTeams.bayrenMunchen }));
