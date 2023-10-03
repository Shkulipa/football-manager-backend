import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OperationIds } from 'src/common/constants/operations-ids.enum';
import { SHOP_TAG } from 'src/common/constants/tags';
import { ComposeAuthDecorator } from 'src/common/decorators/compose-auth.decorator';
import { ComposeErrorsDecorator } from 'src/common/decorators/compose-errors.decorator';
import { User } from 'src/common/decorators/user.decorator';
import { IUserData } from 'src/common/interfaces/user-data.interfaces';
import { CreateSessionBuyingProductReqDto } from 'src/services/stripe/dto/create-session-buying-product-req.dto';
import { CreateSessionBuyingProductResDto } from 'src/services/stripe/dto/create-session-buying-product-res.dto';
import { StripeService } from 'src/services/stripe/stripe.service';

@ApiTags(SHOP_TAG)
@Controller(SHOP_TAG)
@ComposeErrorsDecorator()
export class ShopController {
  constructor(private readonly stripeService: StripeService) {}

  /**
   * @info
   * webhook of stripe is in app.controller
   */

  /**
   * create session for buying product
   * @returns {Promise<CreateSessionBuyingProductResDto>}
   */
  @Post('/create-session-buying-product')
  @ApiOperation({
    description: 'create session for buying product',
    operationId: OperationIds.USER_TEAM_CREATE,
  })
  @ApiResponse({ status: 200, type: CreateSessionBuyingProductResDto, description: 'OK' })
  @ComposeAuthDecorator()
  async createSessionBuyingProduct(
    @User() user: IUserData,
    @Body() createSessionBuyingProductReqDto: CreateSessionBuyingProductReqDto,
  ): Promise<CreateSessionBuyingProductResDto> {
    return await this.stripeService.createSessionBuyingProduct(user, createSessionBuyingProductReqDto);
  }
}
