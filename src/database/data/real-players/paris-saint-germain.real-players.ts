import { EPlayerPositionName } from './../../../modules/real-player/constants/player-position-name.enum';
import data from './../../constants/ids';
import { RealPlayerDto } from './../dto/real-player.dto';

const players: RealPlayerDto[] = [
  {
    _id: data.realPlayer.parisSaintGermain.p1,
    name: 'Gianluigi Donnarumma',
    number: 79,
    countryId: data.countries.italy,
    age: 23,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 84,
      shooting: 81,
      saving: 13,
      tackling: 81,
      agility: 70,
      strength: 92,
      penalty_taking: 7,
      jumping: 78,
    },
  },
  {
    _id: data.realPlayer.parisSaintGermain.p2,
    name: 'Sergio Rico',
    number: 64,
    countryId: data.countries.spain,
    age: 28,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 84,
      shooting: 52,
      saving: 6,
      tackling: 64,
      agility: 72,
      strength: 64,
      penalty_taking: 23,
      jumping: 72,
    },
  },
  {
    _id: data.realPlayer.parisSaintGermain.p3,
    name: 'Alexandre Letellier',
    number: 37,
    countryId: data.countries.france,
    age: 31,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 44,
      shooting: 60,
      saving: 15,
      tackling: 70,
      agility: 61,
      strength: 54,
      penalty_taking: 8,
      jumping: 53,
    },
  },
  {
    _id: data.realPlayer.parisSaintGermain.p4,
    name: 'Lucas Lavallée',
    number: 68,
    countryId: data.countries.france,
    age: 19,
    positions: [EPlayerPositionName.GK],
    skills: {
      passing: 36,
      shooting: 41,
      saving: 22,
      tackling: 60,
      agility: 55,
      strength: 57,
      penalty_taking: 8,
      jumping: 39,
    },
  },
  {
    _id: data.realPlayer.parisSaintGermain.p5,
    name: 'Nuno Mendes',
    number: 99,
    countryId: data.countries.restWorld,
    age: 20,
    positions: [EPlayerPositionName.LWB, EPlayerPositionName.LB],
    skills: {
      passing: 74,
      shooting: 74,
      saving: 19,
      tackling: 76,
      agility: 76,
      strength: 80,
      penalty_taking: 7,
      jumping: 70,
    },
  },
  {
    _id: data.realPlayer.parisSaintGermain.p6,
    name: 'Juan Bernat',
    number: 15,
    countryId: data.countries.spain,
    age: 29,
    positions: [EPlayerPositionName.LWB, EPlayerPositionName.LB, EPlayerPositionName.LWM, EPlayerPositionName.LM],
    skills: {
      passing: 57,
      shooting: 54,
      saving: 22,
      tackling: 85,
      agility: 88,
      strength: 74,
      penalty_taking: 8,
      jumping: 68,
    },
  },
  {
    _id: data.realPlayer.parisSaintGermain.p7,
    name: 'Achraf Hakimi',
    number: 80,
    countryId: data.countries.restWorld,
    age: 23,
    positions: [EPlayerPositionName.RWB, EPlayerPositionName.RB, EPlayerPositionName.RM],
    skills: {
      passing: 78,
      shooting: 74,
      saving: 16,
      tackling: 86,
      agility: 82,
      strength: 85,
      penalty_taking: 14,
      jumping: 75,
    },
  },
  {
    _id: data.realPlayer.parisSaintGermain.p8,
    name: 'Presnel Kimpembe',
    number: 75,
    countryId: data.countries.france,
    age: 26,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 94,
      shooting: 60,
      saving: 22,
      tackling: 98,
      agility: 65,
      strength: 64,
      penalty_taking: 11,
      jumping: 93,
    },
  },
  {
    _id: data.realPlayer.parisSaintGermain.p9,
    name: 'Timothée Pembélé',
    number: 5,
    countryId: data.countries.france,
    age: 19,
    positions: [EPlayerPositionName.RB, EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 51,
      shooting: 67,
      saving: 18,
      tackling: 41,
      agility: 77,
      strength: 46,
      penalty_taking: 14,
      jumping: 72,
    },
  },
  {
    _id: data.realPlayer.parisSaintGermain.p10,
    name: 'Nordi Mukiele',
    number: 10,
    countryId: data.countries.france,
    age: 24,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 66,
      shooting: 61,
      saving: 21,
      tackling: 73,
      agility: 78,
      strength: 83,
      penalty_taking: 19,
      jumping: 71,
    },
  },
  {
    _id: data.realPlayer.parisSaintGermain.p11,
    name: 'Marquinhos',
    number: 48,
    countryId: data.countries.brazil,
    age: 28,
    positions: [
      EPlayerPositionName.CB,
      EPlayerPositionName.RCB,
      EPlayerPositionName.LCB,
      EPlayerPositionName.CDM,
      EPlayerPositionName.LDM,
      EPlayerPositionName.RDM,
    ],
    skills: {
      passing: 95,
      shooting: 69,
      saving: 7,
      tackling: 81,
      agility: 95,
      strength: 83,
      penalty_taking: 6,
      jumping: 69,
    },
  },
  {
    _id: data.realPlayer.parisSaintGermain.p12,
    name: 'Sergio Ramos',
    number: 62,
    countryId: data.countries.spain,
    age: 36,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 81,
      shooting: 77,
      saving: 22,
      tackling: 62,
      agility: 96,
      strength: 80,
      penalty_taking: 18,
      jumping: 78,
    },
  },
  {
    _id: data.realPlayer.parisSaintGermain.p13,
    name: 'Younes El Hannach',
    number: 18,
    countryId: data.countries.france,
    age: 18,
    positions: [EPlayerPositionName.CB, EPlayerPositionName.RCB, EPlayerPositionName.LCB],
    skills: {
      passing: 25,
      shooting: 27,
      saving: 18,
      tackling: 50,
      agility: 45,
      strength: 47,
      penalty_taking: 6,
      jumping: 22,
    },
  },
  {
    _id: data.realPlayer.parisSaintGermain.p14,
    name: 'Danilo Pereira',
    number: 8,
    countryId: data.countries.restWorld,
    age: 30,
    positions: [
      EPlayerPositionName.CDM,
      EPlayerPositionName.LDM,
      EPlayerPositionName.RDM,
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
    ],
    skills: {
      passing: 93,
      shooting: 60,
      saving: 7,
      tackling: 78,
      agility: 92,
      strength: 74,
      penalty_taking: 14,
      jumping: 59,
    },
  },
  {
    _id: data.realPlayer.parisSaintGermain.p15,
    name: 'Moutanabi Bodiang',
    number: 13,
    countryId: data.countries.france,
    age: 19,
    positions: [EPlayerPositionName.RB],
    skills: {
      passing: 35,
      shooting: 47,
      saving: 9,
      tackling: 31,
      agility: 39,
      strength: 43,
      penalty_taking: 25,
      jumping: 51,
    },
  },
  {
    _id: data.realPlayer.parisSaintGermain.p16,
    name: 'Hugo Lamy',
    number: 35,
    countryId: data.countries.france,
    age: 18,
    positions: [EPlayerPositionName.RB],
    skills: {
      passing: 56,
      shooting: 30,
      saving: 17,
      tackling: 23,
      agility: 42,
      strength: 16,
      penalty_taking: 14,
      jumping: 49,
    },
  },
  {
    _id: data.realPlayer.parisSaintGermain.p17,
    name: 'Dan-Patrice Bikouta',
    number: 83,
    countryId: data.countries.france,
    age: 19,
    positions: [
      EPlayerPositionName.CDM,
      EPlayerPositionName.LDM,
      EPlayerPositionName.RDM,
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
    ],
    skills: {
      passing: 46,
      shooting: 30,
      saving: 24,
      tackling: 49,
      agility: 20,
      strength: 17,
      penalty_taking: 9,
      jumping: 36,
    },
  },
  {
    _id: data.realPlayer.parisSaintGermain.p18,
    name: 'Vitinha',
    number: 50,
    countryId: data.countries.restWorld,
    age: 22,
    positions: [EPlayerPositionName.CM, EPlayerPositionName.LCM, EPlayerPositionName.RCM],
    skills: {
      passing: 83,
      shooting: 67,
      saving: 24,
      tackling: 66,
      agility: 84,
      strength: 66,
      penalty_taking: 6,
      jumping: 84,
    },
  },
  {
    _id: data.realPlayer.parisSaintGermain.p19,
    name: 'Renato Sanches',
    number: 38,
    countryId: data.countries.restWorld,
    age: 24,
    positions: [
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
      EPlayerPositionName.RWM,
    ],
    skills: {
      passing: 65,
      shooting: 56,
      saving: 19,
      tackling: 87,
      agility: 57,
      strength: 88,
      penalty_taking: 10,
      jumping: 79,
    },
  },
  {
    _id: data.realPlayer.parisSaintGermain.p20,
    name: 'Fabián',
    number: 45,
    countryId: data.countries.spain,
    age: 26,
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
      shooting: 94,
      saving: 22,
      tackling: 59,
      agility: 96,
      strength: 97,
      penalty_taking: 17,
      jumping: 60,
    },
  },
  {
    _id: data.realPlayer.parisSaintGermain.p21,
    name: 'Marco Verratti',
    number: 76,
    countryId: data.countries.italy,
    age: 29,
    positions: [EPlayerPositionName.CM, EPlayerPositionName.LCM, EPlayerPositionName.RCM],
    skills: {
      passing: 83,
      shooting: 74,
      saving: 6,
      tackling: 90,
      agility: 65,
      strength: 99,
      penalty_taking: 16,
      jumping: 81,
    },
  },
  {
    _id: data.realPlayer.parisSaintGermain.p22,
    name: 'Carlos Soler',
    number: 30,
    countryId: data.countries.spain,
    age: 25,
    positions: [
      EPlayerPositionName.RM,
      EPlayerPositionName.CM,
      EPlayerPositionName.LCM,
      EPlayerPositionName.RCM,
      EPlayerPositionName.CDM,
      EPlayerPositionName.LDM,
      EPlayerPositionName.RDM,
      EPlayerPositionName.RWB,
    ],
    skills: {
      passing: 60,
      shooting: 69,
      saving: 12,
      tackling: 66,
      agility: 85,
      strength: 88,
      penalty_taking: 21,
      jumping: 94,
    },
  },
  {
    _id: data.realPlayer.parisSaintGermain.p23,
    name: 'Zoumana Bagbema',
    number: 82,
    countryId: data.countries.france,
    age: 18,
    positions: [EPlayerPositionName.CM, EPlayerPositionName.LCM, EPlayerPositionName.RCM],
    skills: {
      passing: 23,
      shooting: 57,
      saving: 16,
      tackling: 24,
      agility: 50,
      strength: 51,
      penalty_taking: 6,
      jumping: 17,
    },
  },
  {
    _id: data.realPlayer.parisSaintGermain.p24,
    name: 'Neymar',
    number: 60,
    countryId: data.countries.brazil,
    age: 30,
    positions: [EPlayerPositionName.LWM, EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF],
    skills: {
      passing: 99,
      shooting: 82,
      saving: 13,
      tackling: 99,
      agility: 76,
      strength: 99,
      penalty_taking: 10,
      jumping: 79,
    },
  },
  {
    _id: data.realPlayer.parisSaintGermain.p25,
    name: 'Hugo Ekitike',
    number: 39,
    countryId: data.countries.france,
    age: 20,
    positions: [EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF],
    skills: {
      passing: 57,
      shooting: 67,
      saving: 23,
      tackling: 50,
      agility: 72,
      strength: 52,
      penalty_taking: 23,
      jumping: 74,
    },
  },
  {
    _id: data.realPlayer.parisSaintGermain.p26,
    name: 'Gaël Nlundulu',
    number: 97,
    countryId: data.countries.france,
    age: 30,
    positions: [
      EPlayerPositionName.RWM,
      EPlayerPositionName.LCF,
      EPlayerPositionName.ST,
      EPlayerPositionName.RCF,
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
      EPlayerPositionName.LWM,
    ],
    skills: {
      passing: 22,
      shooting: 58,
      saving: 21,
      tackling: 31,
      agility: 36,
      strength: 49,
      penalty_taking: 8,
      jumping: 44,
    },
  },
  {
    _id: data.realPlayer.parisSaintGermain.p27,
    name: 'Kylian Mbappé',
    number: 27,
    countryId: data.countries.france,
    age: 23,
    positions: [EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF, EPlayerPositionName.RWM],
    skills: {
      passing: 99,
      shooting: 75,
      saving: 8,
      tackling: 99,
      agility: 93,
      strength: 99,
      penalty_taking: 16,
      jumping: 99,
    },
  },
  {
    _id: data.realPlayer.parisSaintGermain.p28,
    name: 'Lionel Messi',
    number: 63,
    countryId: data.countries.argentina,
    age: 35,
    positions: [EPlayerPositionName.RWM],
    skills: {
      passing: 97,
      shooting: 99,
      saving: 19,
      tackling: 77,
      agility: 98,
      strength: 88,
      penalty_taking: 21,
      jumping: 99,
    },
  },
  {
    _id: data.realPlayer.parisSaintGermain.p29,
    name: 'Ismaël Gharbi',
    number: 20,
    countryId: data.countries.spain,
    age: 18,
    positions: [
      EPlayerPositionName.AML,
      EPlayerPositionName.AMC,
      EPlayerPositionName.AMR,
      EPlayerPositionName.RWM,
      EPlayerPositionName.LWM,
    ],
    skills: {
      passing: 57,
      shooting: 54,
      saving: 5,
      tackling: 63,
      agility: 39,
      strength: 48,
      penalty_taking: 13,
      jumping: 45,
    },
  },
  {
    _id: data.realPlayer.parisSaintGermain.p30,
    name: 'Mamoudou Kouyaté',
    number: 11,
    countryId: data.countries.restWorld,
    age: 23,
    positions: [EPlayerPositionName.LCF, EPlayerPositionName.ST, EPlayerPositionName.RCF],
    skills: {
      passing: 28,
      shooting: 26,
      saving: 23,
      tackling: 33,
      agility: 41,
      strength: 48,
      penalty_taking: 6,
      jumping: 46,
    },
  },
];

export const realPlayersParisSaintGermain = players.map((p) => ({
  ...p,
  realTeamId: data.realTeams.parisSaintGermain,
}));