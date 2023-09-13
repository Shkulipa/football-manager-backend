import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OperationIds } from 'src/common/constants/operations-ids.enum';
import { PACKS_TAG } from 'src/common/constants/tags';
import { ComposeAuthDecorator } from 'src/common/decorators/compose-auth.decorator';
import { ComposeErrorsDecorator } from 'src/common/decorators/compose-errors.decorator';
import { User } from 'src/common/decorators/user.decorator';
import { IUserData } from 'src/common/interfaces/user-data.interfaces';

import { GetRandomPlayerForPackDto } from '../real-player/dto/get-random-player-for-pack.dto';
import { GetPacksResDto } from './dto/get-packs-res.dto';
import { OpenPacksReqDto } from './dto/open-packs-req.dto';
import { PacksService } from './packs.service';

@ApiTags(PACKS_TAG)
@Controller(PACKS_TAG)
@ComposeErrorsDecorator()
export class PacksController {
  constructor(private readonly packsService: PacksService) {}

  /**
   * get packs of player
   * @returns {Promise<GetPacksResDto>}
   */
  @Get()
  @ApiOperation({
    description: 'get packs of player',
    operationId: OperationIds.PACK_GET,
  })
  @ApiResponse({ status: 200, type: GetPacksResDto, description: 'OK' })
  @ComposeAuthDecorator()
  async getPacks(@User() user: IUserData): Promise<GetPacksResDto> {
    return await this.packsService.getPacks(user);
  }

  /**
   * open one pack of player
   * @returns {Promise<GetRandomPlayerForPackDto>}
   */
  @Post()
  @ApiOperation({
    description: 'open one pack of player',
    operationId: OperationIds.PACK_OPEN,
  })
  @ApiResponse({ status: 200, type: GetRandomPlayerForPackDto, description: 'OK' })
  @ComposeAuthDecorator()
  async openPack(
    @User() user: IUserData,
    @Body() openPacksReqDto: OpenPacksReqDto,
  ): Promise<GetRandomPlayerForPackDto> {
    return await this.packsService.openPack(user, openPacksReqDto);
  }
}
