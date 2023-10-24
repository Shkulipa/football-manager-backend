import { Body, Controller, Get, Headers, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { OperationIds } from 'src/common/constants/operations-ids.enum';
import { ComposeErrorsDecorator } from 'src/common/decorators/compose-errors.decorator';
import { CommonSuccessResDto } from 'src/common/dto/common-success-res.dto';
import { StripeService } from 'src/services/stripe/stripe.service';

import { AppService } from './app.service';

@Controller()
@ComposeErrorsDecorator()
export class AppController {
  constructor(private readonly appService: AppService, private readonly stripeService: StripeService) {}

  /**
   * get readme.md
   * @returns {string}
   */
  @Get()
  @ApiOperation({
    description: 'Get content of <b>README.md</b> file',
    operationId: OperationIds.APP_DOC,
  })
  @ApiResponse({ status: 200, type: 'string', description: 'OK' })
  readme(): string {
    return this.appService.getReadme();
  }

  /**
   * receive webhooks from stripe
   * @returns {Promise<CommonSuccessResDto>}
   */
  @Post('/webhook')
  @ApiOperation({
    summary: 'stripe webhook',
    description: 'webhook for handling actions from stripe',
    operationId: OperationIds.STRIPE_WEBHOOK,
  })
  @ApiResponse({ status: 200, type: CommonSuccessResDto, description: 'OK' })
  stripeWebhookHandler(
    @Body() rawBody: Buffer,
    @Headers('stripe-signature') signature: string,
  ): Promise<CommonSuccessResDto> {
    return this.stripeService.stripeWebhookHandler(signature, rawBody);
  }
}
