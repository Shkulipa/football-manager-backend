import { BadRequestException, Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Redis } from 'ioredis';
import { omit } from 'lodash';
import { EEnvVariables } from 'src/common/constants/env-variables.enum';
import { IORedisKey } from 'src/services/redis/redis.module';
import { v4 as uuidv4 } from 'uuid';

import { UserPoll } from '../search-opponent/dto/user-poll.dto';
import { EStatusMatch, IMatchDetail } from './interfaces/match-detail.interface';

@Injectable()
export class MatchRepository {
  // to use time-to-live from configuration
  private readonly ttl: string;

  constructor(configService: ConfigService, @Inject(IORedisKey) private readonly redisClient: Redis) {
    /**
     * @info
     * ttl doc: https://redis.io/commands/ttl/
     * ttl is in seconds
     * 900 second => 15 min
     */
    this.ttl = configService.get(EEnvVariables.MATCH_DURATION_LIVE);
  }

  async checkExistInMatch(userId: string) {
    const keysMatches = await this.redisClient.keys('match:*');
    for (const key of keysMatches) {
      const matchStatus = await this.redisClient.call('JSON.GET', key, '.status');
      if (matchStatus === EStatusMatch.FINISHED) continue;

      const player1UserId = await this.redisClient.call('JSON.GET', key, '.player1.user._id');
      const player2UserId = await this.redisClient.call('JSON.GET', key, '.player2.user._id');

      userId = `"${userId}"`;

      if (player1UserId === userId || player2UserId === userId)
        throw new BadRequestException('You are already in match');
    }
  }

  async setPlayerReady(match: IMatchDetail, matchId: string, userId: string) {
    const key = `match:${matchId}`;
    if (match.player1.user._id === userId) {
      await this.redisClient.call('JSON.SET', key, '.player1.isReady', JSON.stringify(true));
    }
    if (match.player2.user._id === userId) {
      await this.redisClient.call('JSON.SET', key, '.player2.isReady', JSON.stringify(true));
    }
  }

  async setStatusMatch(matchId: string, nweStatus: EStatusMatch, ttl?: number) {
    const key = `match:${matchId}`;
    await this.redisClient.call('JSON.SET', key, '.status', JSON.stringify(nweStatus));
    if (ttl) await this.redisClient.expire(key, ttl);
  }

  async getMatchById(id: string) {
    const key = `match:${id}`;
    const match = (await this.redisClient.call('JSON.GET', key, '.')) as string;
    if (!match) throw new NotFoundException(`Match with id(${id}) wasn't found`);
    return JSON.parse(match) as IMatchDetail;
  }

  async createMatch(player1: UserPoll, player2: UserPoll): Promise<string> {
    const matchId = uuidv4();

    const key = `match:${matchId}`;
    const commonPlayerData = { isReady: false };
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
