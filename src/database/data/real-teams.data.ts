import { EPlayerPositionName } from '../../services/repositories/real-player/constants/player-position-name.enum';
import data from '../constants/ids';

export const realTeamsData = [
  {
    _id: data.realTeams.arsenal,
    leagueId: data.leagues.englandPremierLeague,
    clubName: 'Arsenal',
    logoClub: 'arsenal.png',
    main: {
      [EPlayerPositionName.GK]: data.realPlayer.arsenal.p1,
      [EPlayerPositionName.RB]: data.realPlayer.arsenal.p19,
      [EPlayerPositionName.LCB]: data.realPlayer.arsenal.p17,
      [EPlayerPositionName.RCB]: data.realPlayer.arsenal.p14,
      [EPlayerPositionName.LB]: data.realPlayer.arsenal.p7,
      [EPlayerPositionName.CDM]: data.realPlayer.arsenal.p21,
      [EPlayerPositionName.LCM]: data.realPlayer.arsenal.p28,
      [EPlayerPositionName.RCM]: data.realPlayer.arsenal.p23,
      [EPlayerPositionName.RWM]: data.realPlayer.arsenal.p12,
      [EPlayerPositionName.LWM]: data.realPlayer.arsenal.p36,
      [EPlayerPositionName.ST]: data.realPlayer.arsenal.p39,
    },
    bench: [
      data.realPlayer.arsenal.p6,
      data.realPlayer.arsenal.p11,
      data.realPlayer.arsenal.p8,
      data.realPlayer.arsenal.p31,
      data.realPlayer.arsenal.p33,
      data.realPlayer.arsenal.p29,
      data.realPlayer.arsenal.p37,
    ],
  },
  {
    _id: data.realTeams.atleticoMadrid,
    leagueId: data.leagues.spainLaLiga,
    clubName: 'Atletico Madrid',
    logoClub: 'atletico-madrid.png',
    main: {
      [EPlayerPositionName.GK]: data.realPlayer.atleticoMadrid.p1,
      [EPlayerPositionName.RB]: data.realPlayer.atleticoMadrid.p29,
      [EPlayerPositionName.LCB]: data.realPlayer.atleticoMadrid.p21,
      [EPlayerPositionName.RCB]: data.realPlayer.atleticoMadrid.p19,
      [EPlayerPositionName.LB]: data.realPlayer.atleticoMadrid.p7,
      [EPlayerPositionName.CDM]: data.realPlayer.atleticoMadrid.p28,
      [EPlayerPositionName.LCM]: data.realPlayer.atleticoMadrid.p36,
      [EPlayerPositionName.RCM]: data.realPlayer.atleticoMadrid.p31,
      [EPlayerPositionName.AMC]: data.realPlayer.atleticoMadrid.p42,
      [EPlayerPositionName.LCF]: data.realPlayer.atleticoMadrid.p49,
      [EPlayerPositionName.RCF]: data.realPlayer.atleticoMadrid.p41,
    },
    bench: [
      data.realPlayer.atleticoMadrid.p15,
      data.realPlayer.atleticoMadrid.p18,
      data.realPlayer.atleticoMadrid.p40,
      data.realPlayer.atleticoMadrid.p25,
      data.realPlayer.atleticoMadrid.p32,
      data.realPlayer.atleticoMadrid.p11,
      data.realPlayer.atleticoMadrid.p2,
    ],
  },
  {
    _id: data.realTeams.barcelona,
    leagueId: data.leagues.spainLaLiga,
    clubName: 'Barcelona',
    logoClub: 'barcelona.png',
    main: {
      [EPlayerPositionName.GK]: data.realPlayer.barcelona.p1,
      [EPlayerPositionName.RWB]: data.realPlayer.barcelona.p34,
      [EPlayerPositionName.LCB]: data.realPlayer.barcelona.p21,
      [EPlayerPositionName.CB]: data.realPlayer.barcelona.p20,
      [EPlayerPositionName.RCB]: data.realPlayer.barcelona.p19,
      [EPlayerPositionName.LWB]: data.realPlayer.barcelona.p12,
      [EPlayerPositionName.LCM]: data.realPlayer.barcelona.p28,
      [EPlayerPositionName.RCM]: data.realPlayer.barcelona.p47,
      [EPlayerPositionName.RWM]: data.realPlayer.barcelona.p46,
      [EPlayerPositionName.LWM]: data.realPlayer.barcelona.p43,
      [EPlayerPositionName.ST]: data.realPlayer.barcelona.p56,
    },
    bench: [
      data.realPlayer.barcelona.p31,
      data.realPlayer.barcelona.p26,
      data.realPlayer.barcelona.p50,
      data.realPlayer.barcelona.p32,
      data.realPlayer.barcelona.p8,
      data.realPlayer.barcelona.p44,
      data.realPlayer.barcelona.p11,
    ],
  },
  {
    _id: data.realTeams.bayrenMunchen,
    leagueId: data.leagues.bundesliga,
    clubName: 'Bayren Munchen',
    logoClub: 'bayren-munchen.png',
    main: {
      [EPlayerPositionName.GK]: data.realPlayer.bayrenMunchen.p1,
      [EPlayerPositionName.RWB]: data.realPlayer.bayrenMunchen.p16,
      [EPlayerPositionName.LCB]: data.realPlayer.bayrenMunchen.p27,
      [EPlayerPositionName.CB]: data.realPlayer.bayrenMunchen.p15,
      [EPlayerPositionName.RCB]: data.realPlayer.bayrenMunchen.p24,
      [EPlayerPositionName.LWB]: data.realPlayer.bayrenMunchen.p13,
      [EPlayerPositionName.LCM]: data.realPlayer.bayrenMunchen.p31,
      [EPlayerPositionName.CM]: data.realPlayer.bayrenMunchen.p37,
      [EPlayerPositionName.RCM]: data.realPlayer.bayrenMunchen.p23,
      [EPlayerPositionName.LCF]: data.realPlayer.bayrenMunchen.p52,
      [EPlayerPositionName.RCF]: data.realPlayer.bayrenMunchen.p47,
    },
    bench: [
      data.realPlayer.bayrenMunchen.p45,
      data.realPlayer.bayrenMunchen.p44,
      data.realPlayer.bayrenMunchen.p46,
      data.realPlayer.bayrenMunchen.p41,
      data.realPlayer.bayrenMunchen.p2,
      data.realPlayer.bayrenMunchen.p21,
      data.realPlayer.bayrenMunchen.p19,
    ],
  },
  {
    _id: data.realTeams.bvb,
    leagueId: data.leagues.bundesliga,
    clubName: 'BVB',
    logoClub: 'bvb.png',
    main: {
      [EPlayerPositionName.GK]: data.realPlayer.bvb.p1,
      [EPlayerPositionName.RB]: data.realPlayer.bvb.p17,
      [EPlayerPositionName.LCB]: data.realPlayer.bvb.p24,
      [EPlayerPositionName.RCB]: data.realPlayer.bvb.p16,
      [EPlayerPositionName.LB]: data.realPlayer.bvb.p9,
      [EPlayerPositionName.RM]: data.realPlayer.bvb.p19,
      [EPlayerPositionName.LCM]: data.realPlayer.bvb.p14,
      [EPlayerPositionName.RCM]: data.realPlayer.bvb.p37,
      [EPlayerPositionName.LM]: data.realPlayer.bvb.p40,
      [EPlayerPositionName.LCF]: data.realPlayer.bvb.p54,
      [EPlayerPositionName.RCF]: data.realPlayer.bvb.p53,
    },
    bench: [
      data.realPlayer.bvb.p45,
      data.realPlayer.bvb.p36,
      data.realPlayer.bvb.p12,
      data.realPlayer.bvb.p35,
      data.realPlayer.bvb.p42,
      data.realPlayer.bvb.p31,
      data.realPlayer.bvb.p49,
    ],
  },
  {
    _id: data.realTeams.chelsea,
    leagueId: data.leagues.englandPremierLeague,
    clubName: 'Chelsea',
    logoClub: 'chelsea.png',
    main: {
      [EPlayerPositionName.GK]: data.realPlayer.chelsea.p1,
      [EPlayerPositionName.RB]: data.realPlayer.chelsea.p19,
      [EPlayerPositionName.LCB]: data.realPlayer.chelsea.p25,
      [EPlayerPositionName.RCB]: data.realPlayer.chelsea.p23,
      [EPlayerPositionName.LB]: data.realPlayer.chelsea.p9,
      [EPlayerPositionName.CDM]: data.realPlayer.chelsea.p28,
      [EPlayerPositionName.LCM]: data.realPlayer.chelsea.p29,
      [EPlayerPositionName.RCM]: data.realPlayer.chelsea.p30,
      [EPlayerPositionName.AMC]: data.realPlayer.chelsea.p36,
      [EPlayerPositionName.LCF]: data.realPlayer.chelsea.p45,
      [EPlayerPositionName.RCF]: data.realPlayer.chelsea.p37,
    },
    bench: [
      data.realPlayer.chelsea.p41,
      data.realPlayer.chelsea.p21,
      data.realPlayer.chelsea.p15,
      data.realPlayer.chelsea.p40,
      data.realPlayer.chelsea.p33,
      data.realPlayer.chelsea.p12,
      data.realPlayer.chelsea.p49,
    ],
  },
  {
    _id: data.realTeams.inter,
    leagueId: data.leagues.italySeriaA,
    clubName: 'Inter',
    logoClub: 'inter.png',
    main: {
      [EPlayerPositionName.GK]: data.realPlayer.inter.p1,
      [EPlayerPositionName.RWB]: data.realPlayer.inter.p14,
      [EPlayerPositionName.LCB]: data.realPlayer.inter.p13,
      [EPlayerPositionName.CB]: data.realPlayer.inter.p18,
      [EPlayerPositionName.RCB]: data.realPlayer.inter.p17,
      [EPlayerPositionName.LWB]: data.realPlayer.inter.p5,
      [EPlayerPositionName.LCM]: data.realPlayer.inter.p25,
      [EPlayerPositionName.CM]: data.realPlayer.inter.p28,
      [EPlayerPositionName.RCM]: data.realPlayer.inter.p27,
      [EPlayerPositionName.LCF]: data.realPlayer.inter.p36,
      [EPlayerPositionName.RCF]: data.realPlayer.inter.p35,
    },
    bench: [
      data.realPlayer.inter.p37,
      data.realPlayer.inter.p2,
      data.realPlayer.inter.p30,
      data.realPlayer.inter.p16,
      data.realPlayer.inter.p9,
      data.realPlayer.inter.p31,
      data.realPlayer.inter.p11,
    ],
  },
  {
    _id: data.realTeams.juventus,
    leagueId: data.leagues.italySeriaA,
    clubName: 'Juventus',
    logoClub: 'juventus.png',
    main: {
      [EPlayerPositionName.GK]: data.realPlayer.juventus.p1,
      [EPlayerPositionName.RB]: data.realPlayer.juventus.p20,
      [EPlayerPositionName.LCB]: data.realPlayer.juventus.p14,
      [EPlayerPositionName.RCB]: data.realPlayer.juventus.p29,
      [EPlayerPositionName.LB]: data.realPlayer.juventus.p8,
      [EPlayerPositionName.RM]: data.realPlayer.juventus.p46,
      [EPlayerPositionName.LCM]: data.realPlayer.juventus.p22,
      [EPlayerPositionName.RCM]: data.realPlayer.juventus.p40,
      [EPlayerPositionName.LM]: data.realPlayer.juventus.p45,
      [EPlayerPositionName.LCF]: data.realPlayer.juventus.p62,
      [EPlayerPositionName.RCF]: data.realPlayer.juventus.p63,
    },
    bench: [
      data.realPlayer.juventus.p21,
      data.realPlayer.juventus.p33,
      data.realPlayer.juventus.p28,
      data.realPlayer.juventus.p37,
      data.realPlayer.juventus.p2,
      data.realPlayer.juventus.p12,
      data.realPlayer.juventus.p36,
    ],
  },
  {
    _id: data.realTeams.lazio,
    leagueId: data.leagues.italySeriaA,
    clubName: 'Lazio',
    logoClub: 'lazio.png',
    main: {
      [EPlayerPositionName.GK]: data.realPlayer.lazio.p1,
      [EPlayerPositionName.RB]: data.realPlayer.lazio.p18,
      [EPlayerPositionName.LCB]: data.realPlayer.lazio.p13,
      [EPlayerPositionName.RCB]: data.realPlayer.lazio.p12,
      [EPlayerPositionName.LB]: data.realPlayer.lazio.p8,
      [EPlayerPositionName.CDM]: data.realPlayer.lazio.p23,
      [EPlayerPositionName.LCM]: data.realPlayer.lazio.p30,
      [EPlayerPositionName.RCM]: data.realPlayer.lazio.p29,
      [EPlayerPositionName.RWM]: data.realPlayer.lazio.p32,
      [EPlayerPositionName.LWM]: data.realPlayer.lazio.p28,
      [EPlayerPositionName.ST]: data.realPlayer.lazio.p38,
    },
    bench: [
      data.realPlayer.lazio.p34,
      data.realPlayer.lazio.p6,
      data.realPlayer.lazio.p27,
      data.realPlayer.lazio.p9,
      data.realPlayer.lazio.p2,
      data.realPlayer.lazio.p21,
      data.realPlayer.lazio.p11,
    ],
  },
  {
    _id: data.realTeams.lille,
    leagueId: data.leagues.frenchLigue1,
    clubName: 'Lille',
    logoClub: 'lille.png',
    main: {
      [EPlayerPositionName.GK]: data.realPlayer.lille.p1,
      [EPlayerPositionName.RB]: data.realPlayer.lille.p12,
      [EPlayerPositionName.LCB]: data.realPlayer.lille.p14,
      [EPlayerPositionName.RCB]: data.realPlayer.lille.p11,
      [EPlayerPositionName.LB]: data.realPlayer.lille.p8,
      [EPlayerPositionName.CDM]: data.realPlayer.lille.p20,
      [EPlayerPositionName.LCM]: data.realPlayer.lille.p25,
      [EPlayerPositionName.RCM]: data.realPlayer.lille.p21,
      [EPlayerPositionName.AMC]: data.realPlayer.lille.p34,
      [EPlayerPositionName.LCF]: data.realPlayer.lille.p40,
      [EPlayerPositionName.RCF]: data.realPlayer.lille.p35,
    },
    bench: [
      data.realPlayer.lille.p32,
      data.realPlayer.lille.p13,
      data.realPlayer.lille.p27,
      data.realPlayer.lille.p2,
      data.realPlayer.lille.p29,
      data.realPlayer.lille.p30,
      data.realPlayer.lille.p15,
    ],
  },
  {
    _id: data.realTeams.liverpool,
    leagueId: data.leagues.englandPremierLeague,
    clubName: 'Liverpool',
    logoClub: 'liverpool.png',
    main: {
      [EPlayerPositionName.GK]: data.realPlayer.liverpool.p1,
      [EPlayerPositionName.RB]: data.realPlayer.liverpool.p15,
      [EPlayerPositionName.LCB]: data.realPlayer.liverpool.p21,
      [EPlayerPositionName.RCB]: data.realPlayer.liverpool.p20,
      [EPlayerPositionName.LB]: data.realPlayer.liverpool.p9,
      [EPlayerPositionName.CDM]: data.realPlayer.liverpool.p25,
      [EPlayerPositionName.LCM]: data.realPlayer.liverpool.p31,
      [EPlayerPositionName.RCM]: data.realPlayer.liverpool.p33,
      [EPlayerPositionName.AMC]: data.realPlayer.liverpool.p39,
      [EPlayerPositionName.LCF]: data.realPlayer.liverpool.p45,
      [EPlayerPositionName.RCF]: data.realPlayer.liverpool.p47,
    },
    bench: [
      data.realPlayer.liverpool.p41,
      data.realPlayer.liverpool.p48,
      data.realPlayer.liverpool.p49,
      data.realPlayer.liverpool.p11,
      data.realPlayer.liverpool.p19,
      data.realPlayer.liverpool.p27,
      data.realPlayer.liverpool.p13,
    ],
  },
  {
    _id: data.realTeams.manCity,
    leagueId: data.leagues.englandPremierLeague,
    clubName: 'Man City',
    logoClub: 'man-city.png',
    main: {
      [EPlayerPositionName.GK]: data.realPlayer.manCity.p1,
      [EPlayerPositionName.RB]: data.realPlayer.manCity.p7,
      [EPlayerPositionName.LCB]: data.realPlayer.manCity.p15,
      [EPlayerPositionName.RCB]: data.realPlayer.manCity.p10,
      [EPlayerPositionName.LB]: data.realPlayer.manCity.p8,
      [EPlayerPositionName.CDM]: data.realPlayer.manCity.p17,
      [EPlayerPositionName.LCM]: data.realPlayer.manCity.p20,
      [EPlayerPositionName.RCM]: data.realPlayer.manCity.p26,
      [EPlayerPositionName.AMC]: data.realPlayer.manCity.p21,
      [EPlayerPositionName.LCF]: data.realPlayer.manCity.p36,
      [EPlayerPositionName.RCF]: data.realPlayer.manCity.p37,
    },
    bench: [
      data.realPlayer.manCity.p12,
      data.realPlayer.manCity.p33,
      data.realPlayer.manCity.p22,
      data.realPlayer.manCity.p24,
      data.realPlayer.manCity.p9,
      data.realPlayer.manCity.p13,
      data.realPlayer.manCity.p18,
    ],
  },
  {
    _id: data.realTeams.manUnited,
    leagueId: data.leagues.englandPremierLeague,
    clubName: 'Man United',
    logoClub: 'man-united.png',
    main: {
      [EPlayerPositionName.GK]: data.realPlayer.manUnited.p1,
      [EPlayerPositionName.RB]: data.realPlayer.manUnited.p11,
      [EPlayerPositionName.LCB]: data.realPlayer.manUnited.p19,
      [EPlayerPositionName.RCB]: data.realPlayer.manUnited.p12,
      [EPlayerPositionName.LB]: data.realPlayer.manUnited.p7,
      [EPlayerPositionName.CDM]: data.realPlayer.manUnited.p25,
      [EPlayerPositionName.LCM]: data.realPlayer.manUnited.p28,
      [EPlayerPositionName.RCM]: data.realPlayer.manUnited.p15,
      [EPlayerPositionName.AMC]: data.realPlayer.manUnited.p38,
      [EPlayerPositionName.LCF]: data.realPlayer.manUnited.p42,
      [EPlayerPositionName.RCF]: data.realPlayer.manUnited.p37,
    },
    bench: [
      data.realPlayer.manUnited.p35,
      data.realPlayer.manUnited.p32,
      data.realPlayer.manUnited.p39,
      data.realPlayer.manUnited.p30,
      data.realPlayer.manUnited.p20,
      data.realPlayer.manUnited.p26,
      data.realPlayer.manUnited.p31,
    ],
  },
  {
    _id: data.realTeams.milan,
    leagueId: data.leagues.italySeriaA,
    clubName: 'Milan',
    logoClub: 'milan.png',
    main: {
      [EPlayerPositionName.GK]: data.realPlayer.milan.p1,
      [EPlayerPositionName.RB]: data.realPlayer.milan.p18,
      [EPlayerPositionName.LCB]: data.realPlayer.milan.p19,
      [EPlayerPositionName.RCB]: data.realPlayer.milan.p16,
      [EPlayerPositionName.LB]: data.realPlayer.milan.p8,
      [EPlayerPositionName.CDM]: data.realPlayer.milan.p20,
      [EPlayerPositionName.LCM]: data.realPlayer.milan.p26,
      [EPlayerPositionName.RCM]: data.realPlayer.milan.p28,
      [EPlayerPositionName.AMC]: data.realPlayer.milan.p39,
      [EPlayerPositionName.LCF]: data.realPlayer.milan.p46,
      [EPlayerPositionName.RCF]: data.realPlayer.milan.p47,
    },
    bench: [
      data.realPlayer.milan.p40,
      data.realPlayer.milan.p24,
      data.realPlayer.milan.p45,
      data.realPlayer.milan.p35,
      data.realPlayer.milan.p15,
      data.realPlayer.milan.p21,
      data.realPlayer.milan.p37,
    ],
  },
  {
    _id: data.realTeams.napoli,
    leagueId: data.leagues.italySeriaA,
    clubName: 'Napoli',
    logoClub: 'napoli.png',
    main: {
      [EPlayerPositionName.GK]: data.realPlayer.napoli.p2,
      [EPlayerPositionName.RB]: data.realPlayer.napoli.p12,
      [EPlayerPositionName.LCB]: data.realPlayer.napoli.p15,
      [EPlayerPositionName.RCB]: data.realPlayer.napoli.p11,
      [EPlayerPositionName.LB]: data.realPlayer.napoli.p6,
      [EPlayerPositionName.CDM]: data.realPlayer.napoli.p22,
      [EPlayerPositionName.LCM]: data.realPlayer.napoli.p24,
      [EPlayerPositionName.RCM]: data.realPlayer.napoli.p28,
      [EPlayerPositionName.AMC]: data.realPlayer.napoli.p27,
      [EPlayerPositionName.LCF]: data.realPlayer.napoli.p39,
      [EPlayerPositionName.RCF]: data.realPlayer.napoli.p40,
    },
    bench: [
      data.realPlayer.napoli.p34,
      data.realPlayer.napoli.p36,
      data.realPlayer.napoli.p35,
      data.realPlayer.napoli.p23,
      data.realPlayer.napoli.p7,
      data.realPlayer.napoli.p9,
      data.realPlayer.napoli.p41,
    ],
  },
  {
    _id: data.realTeams.newcastleUnited,
    leagueId: data.leagues.englandPremierLeague,
    clubName: 'Newcastle United',
    logoClub: 'newcastle-united.png',
    main: {
      [EPlayerPositionName.GK]: data.realPlayer.newcastleUnited.p1,
      [EPlayerPositionName.RB]: data.realPlayer.newcastleUnited.p16,
      [EPlayerPositionName.LCB]: data.realPlayer.newcastleUnited.p15,
      [EPlayerPositionName.RCB]: data.realPlayer.newcastleUnited.p22,
      [EPlayerPositionName.LB]: data.realPlayer.newcastleUnited.p12,
      [EPlayerPositionName.CDM]: data.realPlayer.newcastleUnited.p26,
      [EPlayerPositionName.LCM]: data.realPlayer.newcastleUnited.p33,
      [EPlayerPositionName.RCM]: data.realPlayer.newcastleUnited.p39,
      [EPlayerPositionName.AMC]: data.realPlayer.newcastleUnited.p36,
      [EPlayerPositionName.LCF]: data.realPlayer.newcastleUnited.p46,
      [EPlayerPositionName.RCF]: data.realPlayer.newcastleUnited.p38,
    },
    bench: [
      data.realPlayer.newcastleUnited.p37,
      data.realPlayer.newcastleUnited.p2,
      data.realPlayer.newcastleUnited.p14,
      data.realPlayer.newcastleUnited.p30,
      data.realPlayer.newcastleUnited.p43,
      data.realPlayer.newcastleUnited.p35,
      data.realPlayer.newcastleUnited.p3,
    ],
  },
  {
    _id: data.realTeams.parisSaintGermain,
    leagueId: data.leagues.frenchLigue1,
    clubName: 'PSG',
    logoClub: 'paris-saint-germain.png',
    main: {
      [EPlayerPositionName.GK]: data.realPlayer.parisSaintGermain.p1,
      [EPlayerPositionName.RB]: data.realPlayer.parisSaintGermain.p7,
      [EPlayerPositionName.LCB]: data.realPlayer.parisSaintGermain.p12,
      [EPlayerPositionName.RCB]: data.realPlayer.parisSaintGermain.p11,
      [EPlayerPositionName.LB]: data.realPlayer.parisSaintGermain.p5,
      [EPlayerPositionName.CDM]: data.realPlayer.parisSaintGermain.p14,
      [EPlayerPositionName.LCM]: data.realPlayer.parisSaintGermain.p20,
      [EPlayerPositionName.RCM]: data.realPlayer.parisSaintGermain.p21,
      [EPlayerPositionName.AMC]: data.realPlayer.parisSaintGermain.p24,
      [EPlayerPositionName.LCF]: data.realPlayer.parisSaintGermain.p27,
      [EPlayerPositionName.RCF]: data.realPlayer.parisSaintGermain.p28,
    },
    bench: [
      data.realPlayer.parisSaintGermain.p8,
      data.realPlayer.parisSaintGermain.p22,
      data.realPlayer.parisSaintGermain.p18,
      data.realPlayer.parisSaintGermain.p10,
      data.realPlayer.parisSaintGermain.p19,
      data.realPlayer.parisSaintGermain.p6,
      data.realPlayer.parisSaintGermain.p2,
    ],
  },
  {
    _id: data.realTeams.rbLeipzig,
    leagueId: data.leagues.bundesliga,
    clubName: 'Rb Leipzig',
    logoClub: 'rb-leipzig.png',
    main: {
      [EPlayerPositionName.GK]: data.realPlayer.rbLeipzig.p1,
      [EPlayerPositionName.RB]: data.realPlayer.rbLeipzig.p12,
      [EPlayerPositionName.LCB]: data.realPlayer.rbLeipzig.p6,
      [EPlayerPositionName.RCB]: data.realPlayer.rbLeipzig.p16,
      [EPlayerPositionName.LB]: data.realPlayer.rbLeipzig.p8,
      [EPlayerPositionName.CDM]: data.realPlayer.rbLeipzig.p13,
      [EPlayerPositionName.LCM]: data.realPlayer.rbLeipzig.p20,
      [EPlayerPositionName.RCM]: data.realPlayer.rbLeipzig.p27,
      [EPlayerPositionName.AMC]: data.realPlayer.rbLeipzig.p25,
      [EPlayerPositionName.LCF]: data.realPlayer.rbLeipzig.p30,
      [EPlayerPositionName.RCF]: data.realPlayer.rbLeipzig.p26,
    },
    bench: [
      data.realPlayer.rbLeipzig.p23,
      data.realPlayer.rbLeipzig.p24,
      data.realPlayer.rbLeipzig.p15,
      data.realPlayer.rbLeipzig.p10,
      data.realPlayer.rbLeipzig.p29,
      data.realPlayer.rbLeipzig.p11,
      data.realPlayer.rbLeipzig.p22,
    ],
  },
  {
    _id: data.realTeams.realMadrid,
    leagueId: data.leagues.spainLaLiga,
    clubName: 'Real Madrid',
    logoClub: 'real-madrid.png',
    main: {
      [EPlayerPositionName.GK]: data.realPlayer.realMadrid.p1,
      [EPlayerPositionName.RB]: data.realPlayer.realMadrid.p13,
      [EPlayerPositionName.LCB]: data.realPlayer.realMadrid.p15,
      [EPlayerPositionName.RCB]: data.realPlayer.realMadrid.p19,
      [EPlayerPositionName.LB]: data.realPlayer.realMadrid.p8,
      [EPlayerPositionName.CDM]: data.realPlayer.realMadrid.p31,
      [EPlayerPositionName.LCM]: data.realPlayer.realMadrid.p36,
      [EPlayerPositionName.RCM]: data.realPlayer.realMadrid.p29,
      [EPlayerPositionName.AMC]: data.realPlayer.realMadrid.p45,
      [EPlayerPositionName.LCF]: data.realPlayer.realMadrid.p54,
      [EPlayerPositionName.RCF]: data.realPlayer.realMadrid.p53,
    },
    bench: [
      data.realPlayer.realMadrid.p42,
      data.realPlayer.realMadrid.p32,
      data.realPlayer.realMadrid.p12,
      data.realPlayer.realMadrid.p34,
      data.realPlayer.realMadrid.p44,
      data.realPlayer.realMadrid.p9,
      data.realPlayer.realMadrid.p43,
    ],
  },
  {
    _id: data.realTeams.tottenham,
    leagueId: data.leagues.englandPremierLeague,
    clubName: 'Tottenham',
    logoClub: 'tottenham.png',
    main: {
      [EPlayerPositionName.GK]: data.realPlayer.tottenham.p1,
      [EPlayerPositionName.RB]: data.realPlayer.tottenham.p15,
      [EPlayerPositionName.LCB]: data.realPlayer.tottenham.p20,
      [EPlayerPositionName.RCB]: data.realPlayer.tottenham.p17,
      [EPlayerPositionName.LB]: data.realPlayer.tottenham.p8,
      [EPlayerPositionName.CDM]: data.realPlayer.tottenham.p14,
      [EPlayerPositionName.LCM]: data.realPlayer.tottenham.p29,
      [EPlayerPositionName.RCM]: data.realPlayer.tottenham.p28,
      [EPlayerPositionName.AMC]: data.realPlayer.tottenham.p35,
      [EPlayerPositionName.LCF]: data.realPlayer.tottenham.p33,
      [EPlayerPositionName.RCF]: data.realPlayer.tottenham.p39,
    },
    bench: [
      data.realPlayer.tottenham.p32,
      data.realPlayer.tottenham.p41,
      data.realPlayer.tottenham.p13,
      data.realPlayer.tottenham.p11,
      data.realPlayer.tottenham.p40,
      data.realPlayer.tottenham.p16,
      data.realPlayer.tottenham.p19,
    ],
  },
];
