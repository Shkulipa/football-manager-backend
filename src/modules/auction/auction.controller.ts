import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EErrors } from 'src/common/constants/errors.enum';
import { OperationIds } from 'src/common/constants/operations-ids.enum';
import { AUCTION_TAG } from 'src/common/constants/tags';
import { ComposeAuthDecorator } from 'src/common/decorators/compose-auth.decorator';
import { ComposeErrorsDecorator } from 'src/common/decorators/compose-errors.decorator';
import { ComposeOthersErrorsDecorator } from 'src/common/decorators/compose-others-errors.decorator';
import { User } from 'src/common/decorators/user.decorator';
import { CommonPathReqDto } from 'src/common/dto/common-path-req.dto';
import { CommonSuccessResDto } from 'src/common/dto/common-success-res.dto';
import { IUserData } from 'src/common/interfaces/user-data.interfaces';

import { AuctionService } from './auction.service';
import { CreateLotReqDto } from './dto/create-lot-req.dto';
import { GetQueryLotsReqDto } from './dto/get-lots-req.dto';

@ApiTags(AUCTION_TAG)
@Controller(AUCTION_TAG)
@ComposeErrorsDecorator()
export class AuctionController {
  constructor(private readonly auctionService: AuctionService) {}

  /**
   * get lots
   * @returns {Promise<CommonSuccessResDto>}
   */
  @Get('/')
  @ApiOperation({
    description: 'get lots',
    operationId: OperationIds.AUCTION_GET_LOTS,
  })
  @ApiResponse({ status: 200, type: CommonSuccessResDto, description: 'OK' })
  async getLots(@Query() getQueryLotsReqDto: GetQueryLotsReqDto): Promise<any> {
    return this.auctionService.getLots(getQueryLotsReqDto);
  }

  /**
   * create lot
   * @returns {Promise<CommonSuccessResDto>}
   */
  @Post('/')
  @ApiOperation({
    description: 'create lot',
    operationId: OperationIds.AUCTION_CREATE_LOT,
  })
  @ApiResponse({ status: 200, type: CommonSuccessResDto, description: 'OK' })
  @ComposeAuthDecorator()
  async createLot(@User() user: IUserData, @Body() createLotReqDto: CreateLotReqDto): Promise<CommonSuccessResDto> {
    return this.auctionService.createLot(user, createLotReqDto);
  }

  /**
   * buy lot
   * @returns {Promise<CommonSuccessResDto>}
   */
  @Post('/:id')
  @ApiOperation({
    description: 'buy lot',
    operationId: OperationIds.AUCTION_CREATE_LOT,
  })
  @ApiResponse({ status: 200, type: CommonSuccessResDto, description: 'OK' })
  @ComposeAuthDecorator()
  @ComposeOthersErrorsDecorator(EErrors.NOT_FOUND_ERROR)
  async buyLot(@User() user: IUserData, @Param() { id }: CommonPathReqDto): Promise<CommonSuccessResDto> {
    return await this.auctionService.buyLot(id, user);
  }

  /**
   * cancel lot
   * @returns {Promise<CommonSuccessResDto>}
   */
  @Delete('/:id')
  @ApiOperation({
    description: 'cancel lot',
    operationId: OperationIds.AUCTION_CANCEL_LOT,
  })
  @ApiResponse({ status: 200, type: CommonSuccessResDto, description: 'OK' })
  @ComposeAuthDecorator()
  @ComposeOthersErrorsDecorator(EErrors.NOT_FOUND_ERROR, EErrors.FORBIDDEN_ERROR)
  async cancelLot(@User() user: IUserData, @Param() { id }: CommonPathReqDto): Promise<CommonSuccessResDto> {
    return await this.auctionService.cancelLot(id, user);
  }
}
