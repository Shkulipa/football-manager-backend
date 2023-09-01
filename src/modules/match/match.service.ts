import { BadRequestException, Logger } from '@nestjs/common';
import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';

import { EStatusMatch } from './interfaces/match-detail.interface';
import { MatchRepository } from './match.repository';

@Injectable()
export class MatchService {
  private readonly logger = new Logger(MatchRepository.name);

  constructor(private readonly matchRepository: MatchRepository) {}

  async validationStartMatch(matchId: string) {
    const match = await this.matchRepository.getMatchById(matchId);

    if (match.status === EStatusMatch.IN_PROCESS)
      throw new BadRequestException("Match has already started, subscribe to 'match-simulation'");

    if (match.status === EStatusMatch.FINISHED) throw new BadRequestException('Match has already finished');

    if (!match.player1.isReady || !match.player1.isReady)
      throw new BadRequestException(`For starting match(${matchId}) need be ready for both players`);

    await this.matchRepository.setStatusMatch(matchId, EStatusMatch.IN_PROCESS, 900);

    this.logger.debug(`Match with id: ${matchId} was started!`);
  }
}
