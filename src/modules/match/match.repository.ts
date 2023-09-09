import { BadRequestException, Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Redis } from 'ioredis';
import { omit } from 'lodash';
import { Types } from 'mongoose';
import { randomIntFromInterval } from 'src/common/helpers/random-int-from-interval.helper';
import { IORedisKey } from 'src/services/redis/redis.module';

import { TSquad } from '../real-team/interfaces/squad.interface';
import { UserPoll } from '../search-opponent/dto/user-poll.dto';
import { UserRepository } from '../user/user.repository';
import { UserTeamRepository } from '../user-team/user-team.repository';
import { NameKeys } from './constants/name-keys.enum';
import { getNewRatingElo } from './helpers/get-new-rating-elo.helper';
import { EStatusMatch, IMatchDetail } from './interfaces/match-detail.interface';

@Injectable()
export class MatchRepository {
  // to use time-to-live from configuration
  private readonly logger = new Logger(MatchRepository.name);

  constructor(
    @Inject(IORedisKey) private readonly redisClient: Redis,
    private readonly userTeamRepository: UserTeamRepository,
    private readonly userRepository: UserRepository,
  ) {}

  async checkExistInMatch(userId: string) {
    const keysMatches = await this.redisClient.keys(`${NameKeys.MATCH}:*`);
    for (const key of keysMatches) {
      const matchStatus = await this.redisClient.call('JSON.GET', key, '.status');
      if (matchStatus === `"${EStatusMatch.FINISHED}"`) continue;

      const player1UserId = await this.redisClient.call('JSON.GET', key, '.player1.user._id');
      const player2UserId = await this.redisClient.call('JSON.GET', key, '.player2.user._id');

      userId = `"${userId}"`;

      if (player1UserId === userId || player2UserId === userId)
        throw new BadRequestException('You are already in match');
    }
  }

  async updateSquad(matchId: string, playerKey: string, main: TSquad, bench: (string | Types.ObjectId)[]) {
    const key = `${NameKeys.MATCH}:${matchId}`;
    await this.redisClient
      .multi([
        ['call', 'JSON.SET', key, `.${playerKey}.team.main`, JSON.stringify(main)],
        ['call', 'JSON.SET', key, `.${playerKey}.team.bench`, JSON.stringify(bench.map((i) => i.toString()))],
      ])
      .exec();
  }

  async setReplacementsUpdated(matchId: string) {
    const key = `${NameKeys.MATCH}:${matchId}`;
    await this.redisClient
      .multi([
        ['call', 'JSON.SET', key, `.player1.isNeedUpdateSquad`, JSON.stringify(false)],
        ['call', 'JSON.SET', key, `.player2.isNeedUpdateSquad`, JSON.stringify(false)],
      ])
      .exec();
  }

  async setPlayerReady(match: IMatchDetail, matchId: string, userId: string) {
    const key = `${NameKeys.MATCH}:${matchId}`;
    if (match.player1.user._id === userId) {
      await this.redisClient.call('JSON.SET', key, '.player1.isReady', JSON.stringify(true));
    }
    if (match.player2.user._id === userId) {
      await this.redisClient.call('JSON.SET', key, '.player2.isReady', JSON.stringify(true));
    }
  }

  async setStatusMatch(matchId: string, nweStatus: EStatusMatch, ttl?: number) {
    const key = `${NameKeys.MATCH}:${matchId}`;
    await this.redisClient.call('JSON.SET', key, '.status', JSON.stringify(nweStatus));
    if (ttl) await this.redisClient.expire(key, ttl);
  }

  async setResult(matchId: string, matchInfo: any) {
    const key = `${NameKeys.MATCH}:${matchId}`;

    const statistics = {
      host: { clubName: matchInfo.kickOffTeam.name, ...matchInfo.kickOffTeamStatistics },
      guests: { clubName: matchInfo.secondTeam.name, ...matchInfo.secondTeamStatistics },
    };

    await this.redisClient.call('JSON.SET', key, '.statistics', JSON.stringify(statistics));

    // add money for win and defeat;

    // re-count rating elo fro players
    const match = await this.getMatchById(matchId);
    const team1 = {
      // secondTeam in engine simulator
      rating: match.player1.team.ratingElo,
      money: 0,
    };
    const team2 = {
      // kickOffTeam in engine simulator
      rating: match.player2.team.ratingElo,
      money: 0,
    };

    const won = randomIntFromInterval(700, 1000);
    const defeat = randomIntFromInterval(200, 400);
    const draw = randomIntFromInterval(400, 700);

    if (matchInfo.kickOffTeamStatistics.goals > matchInfo.secondTeamStatistics.goals) {
      const { ratingTeam1, ratingTeam2 } = getNewRatingElo(
        match.player1.team.ratingElo,
        match.player2.team.ratingElo,
        0,
      );
      team1.rating = ratingTeam1;
      team1.money = defeat;

      team2.rating = ratingTeam2;
      team2.money = won;
      this.logger.debug(
        `Team(kickOffTeam) ${match.player2.team.clubName}(rating: ${match.player2.team.ratingElo} -> ${ratingTeam2}) Won ${match.player1.team.clubName}(rating: ${match.player1.team.ratingElo} -> ${ratingTeam1})`,
      );
    } else if (matchInfo.kickOffTeamStatistics.goals < matchInfo.secondTeamStatistics.goals) {
      const { ratingTeam1, ratingTeam2 } = getNewRatingElo(
        match.player1.team.ratingElo,
        match.player2.team.ratingElo,
        1,
      );
      team1.rating = ratingTeam1;
      team1.money = won;

      team2.rating = ratingTeam2;
      team2.money = defeat;
      this.logger.debug(
        `Team(secondTeam) ${match.player1.team.clubName}(rating: ${match.player1.team.ratingElo} -> ${ratingTeam1}) Won ${match.player2.team.clubName}(rating: ${match.player2.team.ratingElo} -> ${ratingTeam2})`,
      );
    } else if (matchInfo.kickOffTeamStatistics.goals === matchInfo.secondTeamStatistics.goals) {
      const { ratingTeam1, ratingTeam2 } = getNewRatingElo(
        match.player1.team.ratingElo,
        match.player2.team.ratingElo,
        0.5,
      );
      team1.rating = ratingTeam1;
      team2.rating = ratingTeam2;
      team1.money = draw;
      team2.money = draw;
      this.logger.debug(
        `Draw between teams: ${match.player1.team.clubName}(rating: ${match.player1.team.ratingElo} -> ${ratingTeam1}) & ${match.player2.team.clubName}(rating: ${match.player2.team.ratingElo} -> ${ratingTeam2})`,
      );
    }

    await this.userTeamRepository.findByIdAndUpdate(
      { _id: new Types.ObjectId(match.player1.team._id) },
      { ratingElo: team1.rating },
    );
    await this.userRepository.findByIdAndUpdate(
      { _id: new Types.ObjectId(match.player1.user._id) },
      { $inc: { money: team1.money } },
    );

    await this.userTeamRepository.findByIdAndUpdate(
      { _id: new Types.ObjectId(match.player2.team._id) },
      { ratingElo: team2.rating },
    );
    await this.userRepository.findByIdAndUpdate(
      { _id: new Types.ObjectId(match.player2.user._id) },
      { $inc: { money: team2.money } },
    );
  }

  async getMatchById(id: string) {
    const key = `${NameKeys.MATCH}:${id}`;
    const match = (await this.redisClient.call('JSON.GET', key, '.')) as string;
    if (!match) throw new NotFoundException(`Match with id(${id}) wasn't found`);
    return JSON.parse(match) as IMatchDetail;
  }

  async createMatch(player1: UserPoll, player2: UserPoll): Promise<string> {
    const matchId = new Types.ObjectId().toString();

    const key = `${NameKeys.MATCH}:${matchId}`;
    const commonPlayerData = { isReady: false, replacements: [], isNeedUpdateSquad: false };
    const matchDetail: IMatchDetail = {
      player1: { ...omit(player1, ['socketId']), ...commonPlayerData },
      player2: { ...omit(player2, ['socketId']), ...commonPlayerData },
      status: EStatusMatch.PREPARE,
    };

    await this.redisClient.call('JSON.SET', key, '.', JSON.stringify(matchDetail));
    await this.redisClient.expire(key, 120);

    return matchId;
  }
}
