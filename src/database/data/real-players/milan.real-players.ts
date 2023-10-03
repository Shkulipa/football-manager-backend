import { EPlayerPositionName } from './../../../modules/real-player/constants/player-position-name.enum';
import data from './../../constants/ids';
import { RealPlayerDto } from './../dto/real-player.dto';

const players: RealPlayerDto[] = [
  {
    _id: data.realPlayer.milan.p1,
    name: 'Mike Maignan',
    number: 43,
    countryId: data.countries.france,
    age: 27,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 71,
      shooting: 64,
      saving: 12,
      tackling: 89,
      agility: 88,
      strength: 96,
      penalty_taking: 25,
      jumping: 72,
    },
  },
  {
    _id: data.realPlayer.milan.p2,
    name: 'Ciprian Tătăruşanu',
    number: 14,
    countryId: data.countries.restWorld,
    age: 36,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 49,
      shooting: 71,
      saving: 15,
      tackling: 52,
      agility: 80,
      strength: 83,
      penalty_taking: 10,
      jumping: 61,
    },
  },
  {
    _id: data.realPlayer.milan.p3,
    name: 'Antonio Mirante',
    number: 60,
    countryId: data.countries.italy,
    age: 38,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 63,
      shooting: 59,
      saving: 22,
      tackling: 49,
      agility: 73,
      strength: 55,
      penalty_taking: 10,
      jumping: 67,
    },
  },
  {
    _id: data.realPlayer.milan.p4,
    name: 'Devis Vásquez',
    number: 86,
    countryId: data.countries.restWorld,
    age: 24,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 77,
      shooting: 76,
      saving: 22,
      tackling: 44,
      agility: 43,
      strength: 73,
      penalty_taking: 5,
      jumping: 47,
    },
  },
  {
    _id: data.realPlayer.milan.p5,
    name: 'Lapo Nava',
    number: 57,
    countryId: data.countries.italy,
    age: 18,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 47,
      shooting: 37,
      saving: 12,
      tackling: 38,
      agility: 46,
      strength: 23,
      penalty_taking: 9,
      jumping: 61,
    },
  },
  {
    _id: data.realPlayer.milan.p6,
    name: 'Fotis Pseftis',
    number: 80,
    countryId: data.countries.restWorld,
    age: 19,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 27,
      shooting: 51,
      saving: 10,
      tackling: 58,
      agility: 56,
      strength: 22,
      penalty_taking: 11,
      jumping: 20,
    },
  },
  {
    _id: data.realPlayer.milan.p7,
    name: 'Andrea Bartoccioni',
    number: 65,
    countryId: data.countries.italy,
    age: 18,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 17,
      shooting: 36,
      saving: 24,
      tackling: 42,
      agility: 53,
      strength: 28,
      penalty_taking: 22,
      jumping: 34,
    },
  },
  {
    _id: data.realPlayer.milan.p8,
    name: 'Theo Hernández',
    number: 62,
    countryId: data.countries.france,
    age: 24,
    positions: [EPlayerPositionName.LWB, EPlayerPositionName.LB, EPlayerPositionName.LM],
    skills: {
      passing: 86,
      shooting: 74,
      saving: 8,
      tackling: 84,
      agility: 76,
      strength: 92,
      penalty_taking: 7,
      jumping: 68,
    },
  },
  {
    _id: data.realPlayer.milan.p9,
    name: 'Fodé Ballo-Touré',
    number: 67,
    countryId: data.countries.restWorld,
    age: 25,
    positions: [EPlayerPositionName.LB, EPlayerPositionName.LM, EPlayerPositionName.LWB],
    skills: {
      passing: 60,
      shooting: 70,
      saving: 18,
      tackling: 63,
      agility: 67,
      strength: 64,
      penalty_taking: 8,
      jumping: 66,
    },
  },
  {
    _id: data.realPlayer.milan.p10,
    name: 'Andrea Bozzolan',
    number: 32,
    countryId: data.countries.italy,
    age: 18,
    positions: [EPlayerPositionName.LB, EPlayerPositionName.LWB],
    skills: {
      passing: 59,
      shooting: 27,
      saving: 11,
      tackling: 21,
      agility: 53,
      strength: 59,
      penalty_taking: 10,
      jumping: 21,
    },
  },
  {
    _id: data.realPlayer.milan.p11,
    name: 'Sergiño Dest',
    number: 53,
    countryId: data.countries.restWorld,
    age: 21,
    positions: [EPlayerPositionName.RWB, EPlayerPositionName.LWB, EPlayerPositionName.LB],
    skills: {
      passing: 55,
      shooting: 83,
      saving: 20,
      tackling: 51,
      agility: 57,
      strength: 87,
      penalty_taking: 10,
      jumping: 81,
    },
  },
  {
    _id: data.realPlayer.milan.p12,
    name: 'Giovanni Incorvaia',
    number: 76,
    countryId: data.countries.italy,
    age: 18,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB, EPlayerPositionName.LB],
    skills: {
      passing: 27,
      shooting: 23,
      saving: 17,
      tackling: 49,
      agility: 33,
      strength: 39,
      penalty_taking: 7,
      jumping: 45,
    },
  },
  {
    _id: data.realPlayer.milan.p13,
    name: "Leonardo D'Alessio",
    number: 56,
    countryId: data.countries.italy,
    age: 18,
    positions: [EPlayerPositionName.RB, EPlayerPositionName.LWB, EPlayerPositionName.LB],
    skills: {
      passing: 50,
      shooting: 59,
      saving: 6,
      tackling: 21,
      agility: 60,
      strength: 20,
      penalty_taking: 20,
      jumping: 30,
    },
  },
  {
    _id: data.realPlayer.milan.p14,
    name: 'Clinton Nsiala Makengo',
    number: 92,
    countryId: data.countries.france,
    age: 18,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 50,
      shooting: 45,
      saving: 9,
      tackling: 35,
      agility: 31,
      strength: 30,
      penalty_taking: 5,
      jumping: 49,
    },
  },
  {
    _id: data.realPlayer.milan.p15,
    name: 'Alessandro Florenzi',
    number: 45,
    countryId: data.countries.italy,
    age: 31,
    positions: [EPlayerPositionName.RWB, EPlayerPositionName.RB, EPlayerPositionName.RM],
    skills: {
      passing: 76,
      shooting: 80,
      saving: 19,
      tackling: 62,
      agility: 53,
      strength: 89,
      penalty_taking: 20,
      jumping: 66,
    },
  },
  {
    _id: data.realPlayer.milan.p16,
    name: 'Pierre Kalulu',
    number: 33,
    countryId: data.countries.france,
    age: 22,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB, EPlayerPositionName.RB],
    skills: {
      passing: 55,
      shooting: 93,
      saving: 24,
      tackling: 58,
      agility: 90,
      strength: 76,
      penalty_taking: 21,
      jumping: 72,
    },
  },
  {
    _id: data.realPlayer.milan.p17,
    name: 'Malick Thiaw',
    number: 85,
    countryId: data.countries.germany,
    age: 20,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 74,
      shooting: 52,
      saving: 24,
      tackling: 82,
      agility: 63,
      strength: 63,
      penalty_taking: 13,
      jumping: 44,
    },
  },
  {
    _id: data.realPlayer.milan.p18,
    name: 'Davide Calabria',
    number: 37,
    countryId: data.countries.italy,
    age: 25,
    positions: [EPlayerPositionName.RB],
    skills: {
      passing: 91,
      shooting: 55,
      saving: 21,
      tackling: 78,
      agility: 66,
      strength: 68,
      penalty_taking: 19,
      jumping: 80,
    },
  },
  {
    _id: data.realPlayer.milan.p19,
    name: 'Fikayo Tomori',
    number: 13,
    countryId: data.countries.england,
    age: 24,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 87,
      shooting: 74,
      saving: 14,
      tackling: 77,
      agility: 77,
      strength: 67,
      penalty_taking: 22,
      jumping: 80,
    },
  },
  {
    _id: data.realPlayer.milan.p20,
    name: 'Tommaso Pobega',
    number: 18,
    countryId: data.countries.italy,
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
      passing: 84,
      shooting: 66,
      saving: 5,
      tackling: 56,
      agility: 89,
      strength: 74,
      penalty_taking: 24,
      jumping: 51,
    },
  },
  {
    _id: data.realPlayer.milan.p21,
    name: 'Alexis Saelemaekers',
    number: 11,
    countryId: data.countries.restWorld,
    age: 23,
    positions: [EPlayerPositionName.RWM, EPlayerPositionName.RWB],
    skills: {
      passing: 78,
      shooting: 64,
      saving: 20,
      tackling: 53,
      agility: 89,
      strength: 73,
      penalty_taking: 16,
      jumping: 69,
    },
  },
  {
    _id: data.realPlayer.milan.p22,
    name: 'Andrei Coubiş',
    number: 5,
    countryId: data.countries.restWorld,
    age: 18,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB, EPlayerPositionName.RWB],
    skills: {
      passing: 60,
      shooting: 36,
      saving: 7,
      tackling: 47,
      agility: 64,
      strength: 32,
      penalty_taking: 13,
      jumping: 49,
    },
  },
  {
    _id: data.realPlayer.milan.p23,
    name: 'Matteo Gabbia',
    number: 52,
    countryId: data.countries.italy,
    age: 22,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 70,
      shooting: 78,
      saving: 13,
      tackling: 60,
      agility: 52,
      strength: 62,
      penalty_taking: 7,
      jumping: 68,
    },
  },
  {
    _id: data.realPlayer.milan.p24,
    name: 'Simon Kjær',
    number: 77,
    countryId: data.countries.restWorld,
    age: 33,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 65,
      shooting: 79,
      saving: 12,
      tackling: 60,
      agility: 84,
      strength: 55,
      penalty_taking: 25,
      jumping: 89,
    },
  },
  {
    _id: data.realPlayer.milan.p25,
    name: 'Christian Foglio',
    number: 16,
    countryId: data.countries.italy,
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
      passing: 32,
      shooting: 46,
      saving: 21,
      tackling: 58,
      agility: 20,
      strength: 30,
      penalty_taking: 23,
      jumping: 48,
    },
  },
  {
    _id: data.realPlayer.milan.p26,
    name: 'Ismaël Bennacer',
    number: 49,
    countryId: data.countries.restWorld,
    age: 24,
    positions: [
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.CDM,
      EPlayerPositionName.LDM,
      EPlayerPositionName.RDM,
    ],
    skills: {
      passing: 64,
      shooting: 90,
      saving: 21,
      tackling: 93,
      agility: 96,
      strength: 58,
      penalty_taking: 6,
      jumping: 61,
    },
  },
  {
    _id: data.realPlayer.milan.p27,
    name: 'Tiémoué Bakayoko',
    number: 64,
    countryId: data.countries.france,
    age: 27,
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
      shooting: 83,
      saving: 8,
      tackling: 47,
      agility: 83,
      strength: 60,
      penalty_taking: 5,
      jumping: 70,
    },
  },
  {
    _id: data.realPlayer.milan.p28,
    name: 'Sandro Tonali',
    number: 58,
    countryId: data.countries.italy,
    age: 22,
    positions: [EPlayerPositionName.CM, EPlayerPositionName.LCM, EPlayerPositionName.RCM],
    skills: {
      passing: 89,
      shooting: 73,
      saving: 5,
      tackling: 98,
      agility: 60,
      strength: 69,
      penalty_taking: 24,
      jumping: 85,
    },
  },
  {
    _id: data.realPlayer.milan.p29,
    name: 'Rade Krunić',
    number: 28,
    countryId: data.countries.restWorld,
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
      passing: 83,
      shooting: 89,
      saving: 9,
      tackling: 55,
      agility: 49,
      strength: 74,
      penalty_taking: 8,
      jumping: 64,
    },
  },
  {
    _id: data.realPlayer.milan.p30,
    name: 'Aster Vranckx',
    number: 40,
    countryId: data.countries.restWorld,
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
      passing: 60,
      shooting: 68,
      saving: 11,
      tackling: 61,
      agility: 67,
      strength: 61,
      penalty_taking: 11,
      jumping: 67,
    },
  },
  {
    _id: data.realPlayer.milan.p31,
    name: 'Giovanni Robotti',
    number: 93,
    countryId: data.countries.italy,
    age: 20,
    positions: [
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.CDM,
      EPlayerPositionName.LDM,
      EPlayerPositionName.RDM,
    ],
    skills: {
      passing: 33,
      shooting: 45,
      saving: 19,
      tackling: 45,
      agility: 44,
      strength: 33,
      penalty_taking: 16,
      jumping: 34,
    },
  },
  {
    _id: data.realPlayer.milan.p32,
    name: 'Federico Marrone',
    number: 19,
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
      passing: 29,
      shooting: 27,
      saving: 17,
      tackling: 29,
      agility: 35,
      strength: 51,
      penalty_taking: 15,
      jumping: 15,
    },
  },
  {
    _id: data.realPlayer.milan.p33,
    name: 'Nicholas Pluvio',
    number: 44,
    countryId: data.countries.italy,
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
      passing: 20,
      shooting: 37,
      saving: 7,
      tackling: 58,
      agility: 42,
      strength: 36,
      penalty_taking: 15,
      jumping: 41,
    },
  },
  {
    _id: data.realPlayer.milan.p34,
    name: 'Antonio Gala',
    number: 29,
    countryId: data.countries.italy,
    age: 18,
    positions: [EPlayerPositionName.CM, EPlayerPositionName.LCM, EPlayerPositionName.RCM],
    skills: {
      passing: 49,
      shooting: 34,
      saving: 5,
      tackling: 56,
      agility: 41,
      strength: 33,
      penalty_taking: 14,
      jumping: 57,
    },
  },
  {
    _id: data.realPlayer.milan.p35,
    name: 'Ante Rebić',
    number: 36,
    countryId: data.countries.restWorld,
    age: 28,
    positions: [EPlayerPositionName.LWM],
    skills: {
      passing: 78,
      shooting: 66,
      saving: 25,
      tackling: 77,
      agility: 67,
      strength: 67,
      penalty_taking: 9,
      jumping: 77,
    },
  },
  {
    _id: data.realPlayer.milan.p36,
    name: 'Yacine Adli',
    number: 46,
    countryId: data.countries.france,
    age: 21,
    positions: [
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
    ],
    skills: {
      passing: 76,
      shooting: 76,
      saving: 8,
      tackling: 54,
      agility: 54,
      strength: 51,
      penalty_taking: 11,
      jumping: 79,
    },
  },
  {
    _id: data.realPlayer.milan.p37,
    name: 'Junior Messias',
    number: 71,
    countryId: data.countries.brazil,
    age: 31,
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
      shooting: 85,
      saving: 20,
      tackling: 57,
      agility: 88,
      strength: 81,
      penalty_taking: 15,
      jumping: 61,
    },
  },
  {
    _id: data.realPlayer.milan.p38,
    name: 'Charles De Ketelaere',
    number: 78,
    countryId: data.countries.restWorld,
    age: 21,
    positions: [
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
      EPlayerPositionName.LCF,
      EPlayerPositionName.ST,
      EPlayerPositionName.RCF,
    ],
    skills: {
      passing: 68,
      shooting: 74,
      saving: 15,
      tackling: 69,
      agility: 73,
      strength: 69,
      penalty_taking: 7,
      jumping: 73,
    },
  },
  {
    _id: data.realPlayer.milan.p39,
    name: 'Brahim Díaz',
    number: 39,
    countryId: data.countries.spain,
    age: 22,
    positions: [EPlayerPositionName.AML, EPlayerPositionName.AMC, EPlayerPositionName.AMR, EPlayerPositionName.RWM],
    skills: {
      passing: 68,
      shooting: 62,
      saving: 14,
      tackling: 83,
      agility: 78,
      strength: 63,
      penalty_taking: 19,
      jumping: 84,
    },
  },
  {
    _id: data.realPlayer.milan.p40,
    name: 'Rafael Leão',
    number: 69,
    countryId: data.countries.restWorld,
    age: 23,
    positions: [EPlayerPositionName.LWM, EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF],
    skills: {
      passing: 77,
      shooting: 87,
      saving: 13,
      tackling: 97,
      agility: 67,
      strength: 82,
      penalty_taking: 23,
      jumping: 82,
    },
  },
  {
    _id: data.realPlayer.milan.p41,
    name: 'Gabriele Alesi',
    number: 95,
    countryId: data.countries.italy,
    age: 18,
    positions: [EPlayerPositionName.AML, EPlayerPositionName.AMC, EPlayerPositionName.AMR, EPlayerPositionName.RWM],
    skills: {
      passing: 53,
      shooting: 62,
      saving: 22,
      tackling: 24,
      agility: 33,
      strength: 27,
      penalty_taking: 10,
      jumping: 59,
    },
  },
  {
    _id: data.realPlayer.milan.p42,
    name: 'Andrea Capone',
    number: 34,
    countryId: data.countries.italy,
    age: 20,
    positions: [EPlayerPositionName.LWM, EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF],
    skills: {
      passing: 26,
      shooting: 37,
      saving: 13,
      tackling: 58,
      agility: 35,
      strength: 47,
      penalty_taking: 12,
      jumping: 49,
    },
  },
  {
    _id: data.realPlayer.milan.p43,
    name: 'Emil Roback',
    number: 79,
    countryId: data.countries.restWorld,
    age: 19,
    positions: [EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF],
    skills: {
      passing: 31,
      shooting: 66,
      saving: 6,
      tackling: 63,
      agility: 31,
      strength: 63,
      penalty_taking: 15,
      jumping: 28,
    },
  },
  {
    _id: data.realPlayer.milan.p44,
    name: 'Youns El Hilali',
    number: 54,
    countryId: data.countries.italy,
    age: 19,
    positions: [EPlayerPositionName.RWM, EPlayerPositionName.AML, EPlayerPositionName.AMC, EPlayerPositionName.AMR],
    skills: {
      passing: 59,
      shooting: 29,
      saving: 7,
      tackling: 29,
      agility: 55,
      strength: 59,
      penalty_taking: 24,
      jumping: 33,
    },
  },
  {
    _id: data.realPlayer.milan.p45,
    name: 'Divock Origi',
    number: 72,
    countryId: data.countries.restWorld,
    age: 27,
    positions: [EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF],
    skills: {
      passing: 85,
      shooting: 57,
      saving: 19,
      tackling: 59,
      agility: 83,
      strength: 54,
      penalty_taking: 23,
      jumping: 88,
    },
  },
  {
    _id: data.realPlayer.milan.p46,
    name: 'Zlatan Ibrahimović',
    number: 75,
    countryId: data.countries.restWorld,
    age: 40,
    positions: [EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF],
    skills: {
      passing: 70,
      shooting: 88,
      saving: 15,
      tackling: 78,
      agility: 60,
      strength: 88,
      penalty_taking: 20,
      jumping: 60,
    },
  },
  {
    _id: data.realPlayer.milan.p47,
    name: 'Olivier Giroud',
    number: 26,
    countryId: data.countries.france,
    age: 35,
    positions: [EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF],
    skills: {
      passing: 91,
      shooting: 61,
      saving: 10,
      tackling: 67,
      agility: 93,
      strength: 85,
      penalty_taking: 9,
      jumping: 59,
    },
  },
];

export const realPlayersMilan = players.map((p) => ({ ...p, realTeamId: data.realTeams.milan }));
