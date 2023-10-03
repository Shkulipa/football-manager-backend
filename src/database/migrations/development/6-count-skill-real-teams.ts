import './../../../../env.setup';

import { MigrationInterface } from 'mongo-migrate-ts/dist/lib/MigrationInterface';
import { Db } from 'mongodb/mongodb';

import { ECollectionName } from './../../../common/constants/collection-name.enum';
import { PlayerGroupDto } from './../../../modules/real-player/dto/player-group.dto';
import averageSkillPlayerHelper from './../../../modules/real-player/helpers/average-skills-players-helper';
import {
  attackers,
  defenders,
  midfielders,
} from './../../../modules/real-player/helpers/group-players-by-position.helper';
import data from './../../constants/ids';

export class CountSkillRealTeams implements MigrationInterface {
  public async up(db: Db) {
    const arrObjRealTeams = Object.values(data.realTeams);
    const teams = await db
      .collection(ECollectionName.REAL_TEAMS)
      .aggregate([
        {
          $match: { _id: { $in: arrObjRealTeams } },
        },
        {
          $project: {
            _id: 1,
            main: { $objectToArray: '$main' },
            bench: 1,
          },
        },
        {
          $unwind: '$main',
        },
        {
          $lookup: {
            from: ECollectionName.REAL_PLAYERS,
            localField: 'main.v',
            foreignField: '_id',
            as: 'playerMain',
          },
        },
        {
          $unwind: '$playerMain',
        },
        {
          $addFields: {
            'main.positions': '$main.k',
            'main.skills': '$playerMain.skills',
          },
        },
        {
          $group: {
            _id: '$_id',
            main: { $push: '$main' }, // create array key-value 'k' & 'v'
            bench: { $first: '$bench' },
          },
        },
        {
          $lookup: {
            from: ECollectionName.REAL_PLAYERS,
            localField: 'bench',
            foreignField: '_id',
            as: 'playerBench',
          },
        },
        {
          $project: {
            _id: 1,
            main: 1,
            bench: { skills: '$playerBench.skills', positions: '$playerBench.positions' },
          },
        },
      ])
      .toArray();

    // maping teams
    const requests = [];
    for (const team of teams) {
      const playersMain: PlayerGroupDto[] = team.main.map((p: PlayerGroupDto) => ({
        positions: [p.positions],
        skills: p.skills,
      }));
      const playersBench: PlayerGroupDto[] = team.bench.map((p: PlayerGroupDto) => ({
        positions: [p.positions],
        skills: p.skills,
      }));
      const players = [...playersMain, ...playersBench];

      const att = averageSkillPlayerHelper(attackers(players));
      const mid = averageSkillPlayerHelper(midfielders(players));
      const def = averageSkillPlayerHelper(defenders(players));

      const request = db.collection(ECollectionName.REAL_TEAMS).updateOne(
        { _id: team._id },
        {
          $set: {
            skills: { att, mid, def },
          },
        },
      );

      requests.push(request);
    }

    Promise.allSettled(requests);
  }

  public async down(db: Db) {
    const arrObjRealTeams = Object.values(data.realTeams);
    await db.collection(ECollectionName.REAL_TEAMS).updateMany(
      { _id: { $in: arrObjRealTeams } },
      {
        $set: {
          skills: { att: 0, mid: 0, def: 0 },
        },
      },
    );
  }
}
