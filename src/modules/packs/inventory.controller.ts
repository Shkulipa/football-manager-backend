import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OperationIds } from 'src/common/constants/operations-ids.enum';
import { INVENTORY_TAG } from 'src/common/constants/tags';
import { ComposeAuthDecorator } from 'src/common/decorators/compose-auth.decorator';
import { ComposeErrorsDecorator } from 'src/common/decorators/compose-errors.decorator';
import { User } from 'src/common/decorators/user.decorator';
import { IUserData } from 'src/common/interfaces/user-data.interfaces';

import { GetRandomPlayerForPackDto } from '../real-player/dto/get-random-player-for-pack.dto';
import { GetInventoryResDto } from './dto/get-inventory-res.dto';
import { OpenPacksReqDto } from './dto/open-packs-req.dto';
import { InventoryService } from './inventory.service';

@ApiTags(INVENTORY_TAG)
@Controller(INVENTORY_TAG)
@ComposeErrorsDecorator()
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  /**
   * get packs of player
   * @returns {Promise<GetInventoryResDto>}
   */
  @Get()
  @ApiOperation({
    description: 'get inventory of player',
    operationId: OperationIds.INVENTORY_GET,
  })
  @ApiResponse({ status: 200, type: GetInventoryResDto, description: 'OK' })
  @ComposeAuthDecorator()
  async getInventory(@User() user: IUserData): Promise<GetInventoryResDto> {
    return await this.inventoryService.getInventory(user);
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
    return await this.inventoryService.openPack(user, openPacksReqDto);
  }
}
