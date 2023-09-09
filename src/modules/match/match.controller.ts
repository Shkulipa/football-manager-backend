import { Body, Controller, Param, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { EErrors } from 'src/common/constants/errors.enum';
import { OperationIds } from 'src/common/constants/operations-ids.enum';
import { MATCH_TAG, REAL_PLAYER_TAG } from 'src/common/constants/tags';
import { ComposeAuthDecorator } from 'src/common/decorators/compose-auth.decorator';
import { ComposeErrorsDecorator } from 'src/common/decorators/compose-errors.decorator';
import { ComposeOthersErrorsDecorator } from 'src/common/decorators/compose-others-errors.decorator';
import { User } from 'src/common/decorators/user.decorator';
import { CommonPathReqDto } from 'src/common/dto/common-path-req.dto';
import { CommonSuccessResDto } from 'src/common/dto/common-success-res.dto';
import { IUserData } from 'src/common/interfaces/user-data.interfaces';

import { UpdateSquadsReqDto } from './dto/update-squads-req.dto';
import { MatchRepository } from './match.repository';
import { MatchService } from './match.service';

@Controller(MATCH_TAG)
@Controller(REAL_PLAYER_TAG)
@ComposeErrorsDecorator()
export class MatchController {
  constructor(private readonly matchRepository: MatchRepository, private readonly matchService: MatchService) {}

  /**
   * updateMainSquad
   * @returns {Promise<CommonSuccessResDto>}
   */
  @Put('/squad/:id')
  @ApiOperation({
    description: 'Update squads in match online',
    operationId: OperationIds.MATCH_UPDATE_SQUADS,
  })
  @ComposeAuthDecorator()
  @ApiResponse({ status: 200, type: CommonSuccessResDto, description: 'OK' })
  @ComposeOthersErrorsDecorator(EErrors.FORBIDDEN_ERROR, EErrors.NOT_FOUND_ERROR)
  async updateSquads(
    @Param() { id }: CommonPathReqDto,
    @Body() updateSquadsReqDto: UpdateSquadsReqDto,
    @User() user: IUserData,
  ): Promise<CommonSuccessResDto> {
    return this.matchService.updateSquads(id, user, updateSquadsReqDto);
  }
}
