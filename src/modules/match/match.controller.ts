import { Controller, Get } from '@nestjs/common';
import { ComposeErrorsDecorator } from 'src/common/decorators/compose-errors.decorator';

import { MatchRepository } from './match.repository';

@Controller('match')
@ComposeErrorsDecorator()
export class MatchController {
  constructor(private readonly matchRepository: MatchRepository) {}

  /**
   * get leagues
   * @returns {Promise<GetLeaguesResDto[]>}
   */
  @Get('/')
  async findAll() {
    await this.matchRepository.checkExistInMatch('64ee63566cfe398fb2511bd1');
    return null;
  }
}
