import { EPlayerPositionName } from './../../../modules/real-player/constants/player-position-name.enum';
import data from './../../constants/ids';
import { RealPlayerDto } from './../dto/real-player.dto';

const players: RealPlayerDto[] = [
  {
    _id: data.realPlayer.liverpool.p1,
    name: 'Alisson',
    number: 63,
    countryId: data.countries.brazil,
    age: 29,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 89,
      shooting: 97,
      saving: 9,
      tackling: 87,
      agility: 99,
      strength: 77,
      penalty_taking: 11,
      jumping: 79,
    },
  },
  {
    _id: data.realPlayer.liverpool.p2,
    name: 'Caoimhin Kelleher',
    number: 98,
    countryId: data.countries.restWorld,
    age: 23,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 55,
      shooting: 87,
      saving: 12,
      tackling: 77,
      agility: 65,
      strength: 63,
      penalty_taking: 16,
      jumping: 79,
    },
  },
  {
    _id: data.realPlayer.liverpool.p3,
    name: 'Adrián',
    number: 81,
    countryId: data.countries.spain,
    age: 35,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 82,
      shooting: 71,
      saving: 6,
      tackling: 84,
      agility: 61,
      strength: 48,
      penalty_taking: 14,
      jumping: 50,
    },
  },
  {
    _id: data.realPlayer.liverpool.p4,
    name: 'Harvey Davies',
    number: 70,
    countryId: data.countries.england,
    age: 18,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 54,
      shooting: 49,
      saving: 16,
      tackling: 46,
      agility: 33,
      strength: 28,
      penalty_taking: 24,
      jumping: 36,
    },
  },
  {
    _id: data.realPlayer.liverpool.p5,
    name: 'Jakub Ojrzyński',
    number: 49,
    countryId: data.countries.poland,
    age: 19,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 37,
      shooting: 41,
      saving: 20,
      tackling: 54,
      agility: 24,
      strength: 57,
      penalty_taking: 6,
      jumping: 21,
    },
  },
  {
    _id: data.realPlayer.liverpool.p6,
    name: 'Liam Hughes',
    number: 44,
    countryId: data.countries.restWorld,
    age: 20,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 39,
      shooting: 35,
      saving: 18,
      tackling: 38,
      agility: 44,
      strength: 30,
      penalty_taking: 21,
      jumping: 36,
    },
  },
  {
    _id: data.realPlayer.liverpool.p7,
    name: 'Fabian Mrozek',
    number: 23,
    countryId: data.countries.poland,
    age: 18,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 37,
      shooting: 37,
      saving: 19,
      tackling: 47,
      agility: 27,
      strength: 51,
      penalty_taking: 13,
      jumping: 23,
    },
  },
  {
    _id: data.realPlayer.liverpool.p8,
    name: 'Oscar Kelly',
    number: 12,
    countryId: data.countries.england,
    age: 19,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 35,
      shooting: 25,
      saving: 10,
      tackling: 33,
      agility: 27,
      strength: 21,
      penalty_taking: 22,
      jumping: 39,
    },
  },
  {
    _id: data.realPlayer.liverpool.p9,
    name: 'Andrew Robertson',
    number: 36,
    countryId: data.countries.restWorld,
    age: 28,
    positions: [EPlayerPositionName.LWB],
    skills: {
      passing: 92,
      shooting: 66,
      saving: 20,
      tackling: 83,
      agility: 70,
      strength: 75,
      penalty_taking: 14,
      jumping: 88,
    },
  },
  {
    _id: data.realPlayer.liverpool.p10,
    name: 'Owen Beck',
    number: 47,
    countryId: data.countries.restWorld,
    age: 19,
    positions: [EPlayerPositionName.LWB, EPlayerPositionName.LM],
    skills: {
      passing: 29,
      shooting: 36,
      saving: 16,
      tackling: 29,
      agility: 61,
      strength: 61,
      penalty_taking: 21,
      jumping: 54,
    },
  },
  {
    _id: data.realPlayer.liverpool.p11,
    name: 'Kostas Tsimikas',
    number: 86,
    countryId: data.countries.restWorld,
    age: 26,
    positions: [EPlayerPositionName.LWB],
    skills: {
      passing: 81,
      shooting: 68,
      saving: 23,
      tackling: 58,
      agility: 69,
      strength: 92,
      penalty_taking: 19,
      jumping: 82,
    },
  },
  {
    _id: data.realPlayer.liverpool.p12,
    name: 'James Norris',
    number: 97,
    countryId: data.countries.england,
    age: 19,
    positions: [
      EPlayerPositionName.LWB,
      EPlayerPositionName.LWM,
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.LB,
    ],
    skills: {
      passing: 51,
      shooting: 31,
      saving: 16,
      tackling: 54,
      agility: 32,
      strength: 28,
      penalty_taking: 25,
      jumping: 50,
    },
  },
  {
    _id: data.realPlayer.liverpool.p13,
    name: 'Joe Gomez',
    number: 79,
    countryId: data.countries.england,
    age: 25,
    positions: [
      EPlayerPositionName.CB,
      EPlayerPositionName.RCB,
      EPlayerPositionName.LCB,
      EPlayerPositionName.RB,
      EPlayerPositionName.LB,
    ],
    skills: {
      passing: 69,
      shooting: 94,
      saving: 21,
      tackling: 56,
      agility: 68,
      strength: 81,
      penalty_taking: 14,
      jumping: 82,
    },
  },
  {
    _id: data.realPlayer.liverpool.p14,
    name: 'James Milner',
    number: 83,
    countryId: data.countries.england,
    age: 36,
    positions: [
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.RWB,
      EPlayerPositionName.LWB,
      EPlayerPositionName.RB,
      EPlayerPositionName.LB,
    ],
    skills: {
      passing: 86,
      shooting: 87,
      saving: 24,
      tackling: 58,
      agility: 57,
      strength: 71,
      penalty_taking: 24,
      jumping: 73,
    },
  },
  {
    _id: data.realPlayer.liverpool.p15,
    name: 'Trent Alexander-Arnold',
    number: 65,
    countryId: data.countries.england,
    age: 23,
    positions: [EPlayerPositionName.RWB, EPlayerPositionName.CM, EPlayerPositionName.LCM, EPlayerPositionName.RCM],
    skills: {
      passing: 68,
      shooting: 90,
      saving: 17,
      tackling: 71,
      agility: 87,
      strength: 78,
      penalty_taking: 21,
      jumping: 80,
    },
  },
  {
    _id: data.realPlayer.liverpool.p16,
    name: 'Dominic Corness',
    number: 33,
    countryId: data.countries.england,
    age: 19,
    positions: [EPlayerPositionName.CM, EPlayerPositionName.LCM, EPlayerPositionName.RCM, EPlayerPositionName.LM],
    skills: {
      passing: 27,
      shooting: 48,
      saving: 6,
      tackling: 36,
      agility: 48,
      strength: 36,
      penalty_taking: 19,
      jumping: 57,
    },
  },
  {
    _id: data.realPlayer.liverpool.p17,
    name: 'Nathan Phillips',
    number: 18,
    countryId: data.countries.england,
    age: 25,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 49,
      shooting: 59,
      saving: 22,
      tackling: 69,
      agility: 71,
      strength: 57,
      penalty_taking: 24,
      jumping: 79,
    },
  },
  {
    _id: data.realPlayer.liverpool.p18,
    name: 'Lee Jonas',
    number: 57,
    countryId: data.countries.england,
    age: 18,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 48,
      shooting: 41,
      saving: 18,
      tackling: 26,
      agility: 32,
      strength: 54,
      penalty_taking: 19,
      jumping: 39,
    },
  },
  {
    _id: data.realPlayer.liverpool.p19,
    name: 'Ibrahima Konaté',
    number: 41,
    countryId: data.countries.france,
    age: 23,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 68,
      shooting: 86,
      saving: 19,
      tackling: 91,
      agility: 63,
      strength: 93,
      penalty_taking: 6,
      jumping: 61,
    },
  },
  {
    _id: data.realPlayer.liverpool.p20,
    name: 'Joël Matip',
    number: 2,
    countryId: data.countries.restWorld,
    age: 30,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 78,
      shooting: 66,
      saving: 16,
      tackling: 90,
      agility: 84,
      strength: 72,
      penalty_taking: 19,
      jumping: 78,
    },
  },
  {
    _id: data.realPlayer.liverpool.p21,
    name: 'Virgil van Dijk',
    number: 82,
    countryId: data.countries.restWorld,
    age: 30,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 99,
      shooting: 75,
      saving: 25,
      tackling: 95,
      agility: 87,
      strength: 94,
      penalty_taking: 7,
      jumping: 84,
    },
  },
  {
    _id: data.realPlayer.liverpool.p22,
    name: 'Rhys Williams',
    number: 68,
    countryId: data.countries.england,
    age: 21,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 42,
      shooting: 66,
      saving: 8,
      tackling: 70,
      agility: 63,
      strength: 45,
      penalty_taking: 5,
      jumping: 38,
    },
  },
  {
    _id: data.realPlayer.liverpool.p23,
    name: 'Billy Koumetio',
    number: 26,
    countryId: data.countries.france,
    age: 19,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 68,
      shooting: 42,
      saving: 21,
      tackling: 61,
      agility: 43,
      strength: 36,
      penalty_taking: 12,
      jumping: 62,
    },
  },
  {
    _id: data.realPlayer.liverpool.p24,
    name: 'Oludare Olufunwa',
    number: 72,
    countryId: data.countries.restWorld,
    age: 20,
    positions: [EPlayerPositionName.RB],
    skills: {
      passing: 44,
      shooting: 37,
      saving: 5,
      tackling: 42,
      agility: 62,
      strength: 24,
      penalty_taking: 19,
      jumping: 49,
    },
  },
  {
    _id: data.realPlayer.liverpool.p25,
    name: 'Fabinho',
    number: 42,
    countryId: data.countries.brazil,
    age: 28,
    positions: [
      EPlayerPositionName.CDM,
      EPlayerPositionName.LDM,
      EPlayerPositionName.RDM,
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.CB,
      EPlayerPositionName.RCB,
      EPlayerPositionName.LCB,
      EPlayerPositionName.RB,
    ],
    skills: {
      passing: 86,
      shooting: 72,
      saving: 13,
      tackling: 64,
      agility: 86,
      strength: 94,
      penalty_taking: 20,
      jumping: 72,
    },
  },
  {
    _id: data.realPlayer.liverpool.p26,
    name: 'Luca Stephenson',
    number: 52,
    countryId: data.countries.england,
    age: 18,
    positions: [
      EPlayerPositionName.CDM,
      EPlayerPositionName.LDM,
      EPlayerPositionName.RDM,
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.RB,
    ],
    skills: {
      passing: 56,
      shooting: 20,
      saving: 21,
      tackling: 43,
      agility: 33,
      strength: 29,
      penalty_taking: 25,
      jumping: 47,
    },
  },
  {
    _id: data.realPlayer.liverpool.p27,
    name: 'Jordan Henderson',
    number: 37,
    countryId: data.countries.england,
    age: 32,
    positions: [EPlayerPositionName.CM, EPlayerPositionName.LCM, EPlayerPositionName.RCM],
    skills: {
      passing: 95,
      shooting: 65,
      saving: 20,
      tackling: 60,
      agility: 87,
      strength: 57,
      penalty_taking: 11,
      jumping: 92,
    },
  },
  {
    _id: data.realPlayer.liverpool.p28,
    name: 'Calvin Ramsay',
    number: 61,
    countryId: data.countries.restWorld,
    age: 18,
    positions: [EPlayerPositionName.RB, EPlayerPositionName.RWB],
    skills: {
      passing: 66,
      shooting: 49,
      saving: 22,
      tackling: 48,
      agility: 40,
      strength: 74,
      penalty_taking: 22,
      jumping: 65,
    },
  },
  {
    _id: data.realPlayer.liverpool.p29,
    name: 'Thomas Hill',
    number: 4,
    countryId: data.countries.england,
    age: 19,
    positions: [EPlayerPositionName.CM, EPlayerPositionName.LCM, EPlayerPositionName.RCM, EPlayerPositionName.LM],
    skills: {
      passing: 26,
      shooting: 44,
      saving: 24,
      tackling: 54,
      agility: 36,
      strength: 57,
      penalty_taking: 7,
      jumping: 23,
    },
  },
  {
    _id: data.realPlayer.liverpool.p30,
    name: 'Melkamu Frauendorf',
    number: 62,
    countryId: data.countries.germany,
    age: 18,
    positions: [
      EPlayerPositionName.RWM,
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
      EPlayerPositionName.LWM,
      EPlayerPositionName.RWB,
    ],
    skills: {
      passing: 34,
      shooting: 53,
      saving: 17,
      tackling: 31,
      agility: 51,
      strength: 50,
      penalty_taking: 13,
      jumping: 33,
    },
  },
  {
    _id: data.realPlayer.liverpool.p31,
    name: 'Thiago',
    number: 35,
    countryId: data.countries.spain,
    age: 31,
    positions: [
      EPlayerPositionName.CDM,
      EPlayerPositionName.LDM,
      EPlayerPositionName.RDM,
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
    ],
    skills: {
      passing: 66,
      shooting: 82,
      saving: 10,
      tackling: 99,
      agility: 89,
      strength: 85,
      penalty_taking: 14,
      jumping: 83,
    },
  },
  {
    _id: data.realPlayer.liverpool.p32,
    name: 'Jay Spearing',
    number: 7,
    countryId: data.countries.england,
    age: 33,
    positions: [EPlayerPositionName.CDM, EPlayerPositionName.LDM, EPlayerPositionName.RDM],
    skills: {
      passing: 61,
      shooting: 35,
      saving: 16,
      tackling: 55,
      agility: 30,
      strength: 60,
      penalty_taking: 22,
      jumping: 29,
    },
  },
  {
    _id: data.realPlayer.liverpool.p33,
    name: 'Naby Keïta',
    number: 16,
    countryId: data.countries.restWorld,
    age: 27,
    positions: [EPlayerPositionName.CM, EPlayerPositionName.LCM, EPlayerPositionName.RCM],
    skills: {
      passing: 74,
      shooting: 62,
      saving: 21,
      tackling: 80,
      agility: 58,
      strength: 96,
      penalty_taking: 25,
      jumping: 92,
    },
  },
  {
    _id: data.realPlayer.liverpool.p34,
    name: 'Matteo Ritaccio',
    number: 50,
    countryId: data.countries.restWorld,
    age: 20,
    positions: [
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.LWM,
      EPlayerPositionName.CDM,
      EPlayerPositionName.LDM,
      EPlayerPositionName.RDM,
    ],
    skills: {
      passing: 21,
      shooting: 51,
      saving: 6,
      tackling: 32,
      agility: 21,
      strength: 40,
      penalty_taking: 10,
      jumping: 51,
    },
  },
  {
    _id: data.realPlayer.liverpool.p35,
    name: 'Arthur',
    number: 8,
    countryId: data.countries.brazil,
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
      passing: 53,
      shooting: 91,
      saving: 20,
      tackling: 79,
      agility: 58,
      strength: 86,
      penalty_taking: 18,
      jumping: 65,
    },
  },
  {
    _id: data.realPlayer.liverpool.p36,
    name: 'James Balagizi',
    number: 3,
    countryId: data.countries.england,
    age: 18,
    positions: [EPlayerPositionName.AML, EPlayerPositionName.AMC, EPlayerPositionName.AMR],
    skills: {
      passing: 67,
      shooting: 31,
      saving: 6,
      tackling: 41,
      agility: 57,
      strength: 46,
      penalty_taking: 22,
      jumping: 52,
    },
  },
  {
    _id: data.realPlayer.liverpool.p37,
    name: 'Curtis Jones',
    number: 20,
    countryId: data.countries.england,
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
      passing: 62,
      shooting: 90,
      saving: 17,
      tackling: 80,
      agility: 83,
      strength: 59,
      penalty_taking: 15,
      jumping: 52,
    },
  },
  {
    _id: data.realPlayer.liverpool.p38,
    name: 'Alex Oxlade-Chamberlain',
    number: 73,
    countryId: data.countries.england,
    age: 28,
    positions: [
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.RWM,
      EPlayerPositionName.LWM,
    ],
    skills: {
      passing: 61,
      shooting: 84,
      saving: 12,
      tackling: 85,
      agility: 70,
      strength: 76,
      penalty_taking: 17,
      jumping: 62,
    },
  },
  {
    _id: data.realPlayer.liverpool.p39,
    name: 'Cody Gakpo',
    number: 99,
    countryId: data.countries.restWorld,
    age: 23,
    positions: [EPlayerPositionName.LWM, EPlayerPositionName.RWM, EPlayerPositionName.LM],
    skills: {
      passing: 81,
      shooting: 73,
      saving: 6,
      tackling: 59,
      agility: 73,
      strength: 95,
      penalty_taking: 10,
      jumping: 81,
    },
  },
  {
    _id: data.realPlayer.liverpool.p40,
    name: 'Harvey Elliott',
    number: 95,
    countryId: data.countries.england,
    age: 19,
    positions: [
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
      EPlayerPositionName.LWM,
    ],
    skills: {
      passing: 59,
      shooting: 85,
      saving: 5,
      tackling: 84,
      agility: 60,
      strength: 68,
      penalty_taking: 7,
      jumping: 76,
    },
  },
  {
    _id: data.realPlayer.liverpool.p41,
    name: 'Luis Díaz',
    number: 17,
    countryId: data.countries.restWorld,
    age: 25,
    positions: [EPlayerPositionName.LWM],
    skills: {
      passing: 94,
      shooting: 75,
      saving: 20,
      tackling: 98,
      agility: 70,
      strength: 89,
      penalty_taking: 19,
      jumping: 66,
    },
  },
  {
    _id: data.realPlayer.liverpool.p42,
    name: 'Mateusz Musiałowski',
    number: 5,
    countryId: data.countries.poland,
    age: 18,
    positions: [EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF],
    skills: {
      passing: 46,
      shooting: 34,
      saving: 16,
      tackling: 34,
      agility: 20,
      strength: 60,
      penalty_taking: 25,
      jumping: 46,
    },
  },
  {
    _id: data.realPlayer.liverpool.p43,
    name: 'Max Woltman',
    number: 6,
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
    ],
    skills: {
      passing: 27,
      shooting: 29,
      saving: 19,
      tackling: 28,
      agility: 59,
      strength: 58,
      penalty_taking: 14,
      jumping: 57,
    },
  },
  {
    _id: data.realPlayer.liverpool.p44,
    name: 'Fábio Carvalho',
    number: 71,
    countryId: data.countries.england,
    age: 19,
    positions: [
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
      EPlayerPositionName.LCF,
      EPlayerPositionName.ST,
      EPlayerPositionName.RCF,
      EPlayerPositionName.RWM,
    ],
    skills: {
      passing: 49,
      shooting: 68,
      saving: 15,
      tackling: 87,
      agility: 68,
      strength: 77,
      penalty_taking: 25,
      jumping: 59,
    },
  },
  {
    _id: data.realPlayer.liverpool.p45,
    name: 'Diogo Jota',
    number: 15,
    countryId: data.countries.restWorld,
    age: 25,
    positions: [EPlayerPositionName.LWM],
    skills: {
      passing: 71,
      shooting: 77,
      saving: 15,
      tackling: 90,
      agility: 68,
      strength: 81,
      penalty_taking: 15,
      jumping: 87,
    },
  },
  {
    _id: data.realPlayer.liverpool.p46,
    name: 'Harvey Blair',
    number: 10,
    countryId: data.countries.england,
    age: 18,
    positions: [EPlayerPositionName.LWM, EPlayerPositionName.RWM],
    skills: {
      passing: 26,
      shooting: 52,
      saving: 24,
      tackling: 26,
      agility: 23,
      strength: 55,
      penalty_taking: 17,
      jumping: 52,
    },
  },
  {
    _id: data.realPlayer.liverpool.p47,
    name: 'Mohamed Salah',
    number: 9,
    countryId: data.countries.restWorld,
    age: 30,
    positions: [EPlayerPositionName.RWM, EPlayerPositionName.LWM],
    skills: {
      passing: 99,
      shooting: 99,
      saving: 18,
      tackling: 99,
      agility: 79,
      strength: 84,
      penalty_taking: 10,
      jumping: 80,
    },
  },
  {
    _id: data.realPlayer.liverpool.p48,
    name: 'Darwin Núñez',
    number: 80,
    countryId: data.countries.restWorld,
    age: 23,
    positions: [EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF, EPlayerPositionName.LWM],
    skills: {
      passing: 71,
      shooting: 83,
      saving: 25,
      tackling: 90,
      agility: 67,
      strength: 87,
      penalty_taking: 23,
      jumping: 64,
    },
  },
  {
    _id: data.realPlayer.liverpool.p49,
    name: 'Roberto Firmino',
    number: 34,
    countryId: data.countries.brazil,
    age: 30,
    positions: [
      EPlayerPositionName.LCF,
      EPlayerPositionName.ST,
      EPlayerPositionName.RCF,
      EPlayerPositionName.RWM,
      EPlayerPositionName.LWM,
    ],
    skills: {
      passing: 74,
      shooting: 87,
      saving: 17,
      tackling: 80,
      agility: 78,
      strength: 76,
      penalty_taking: 20,
      jumping: 67,
    },
  },
  {
    _id: data.realPlayer.liverpool.p50,
    name: 'Oakley Cannonier',
    number: 77,
    countryId: data.countries.england,
    age: 18,
    positions: [EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF],
    skills: {
      passing: 46,
      shooting: 34,
      saving: 19,
      tackling: 44,
      agility: 32,
      strength: 36,
      penalty_taking: 17,
      jumping: 48,
    },
  },
  {
    _id: data.realPlayer.liverpool.p51,
    name: 'Layton Stewart',
    number: 48,
    countryId: data.countries.england,
    age: 19,
    positions: [EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF],
    skills: {
      passing: 37,
      shooting: 56,
      saving: 5,
      tackling: 28,
      agility: 32,
      strength: 52,
      penalty_taking: 7,
      jumping: 47,
    },
  },
];

export const realPlayersLiverpool = players.map((p) => ({ ...p, realTeamId: data.realTeams.liverpool }));