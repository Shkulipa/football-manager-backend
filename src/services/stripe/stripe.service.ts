/// <reference types="stripe-event-types" />
import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectStripe } from 'nestjs-stripe';
import { EEnvVariables } from 'src/common/constants/env-variables.enum';
import { CommonSuccessResDto } from 'src/common/dto/common-success-res.dto';
import { IUserData } from 'src/common/interfaces/user-data.interfaces';
import { EProductsPrices } from 'src/modules/shop/constants/products.enum';
import Stripe from 'stripe';

import { UserRepository } from '../repositories/user/user.repository';
import { CreateSessionBuyingProductReqDto } from './dto/create-session-buying-product-req.dto';
import { CreateSessionBuyingProductResDto } from './dto/create-session-buying-product-res.dto';

@Injectable()
export class StripeService {
  private readonly logger = new Logger(StripeService.name);

  constructor(
    @InjectStripe() private readonly stripeClient: Stripe,
    private readonly configService: ConfigService,
    private readonly userRepository: UserRepository,
  ) {}

  /**
   * @method createSessionBuyingProduct - creating session to place an order for a product
   * @param {IUserData} user - authorized user which wants to order product
   * @param {CreateSessionBuyingProductReqDto} createSessionBuyingProductReqDto - this dto has a price and others items that you need, you can check price in stripe.com: product -> price -> add other prices
   * @returns {Promise<CreateSessionBuyingProductResDto>} - {success:true}
   */
  async createSessionBuyingProduct(
    user: IUserData,
    createSessionBuyingProductReqDto: CreateSessionBuyingProductReqDto,
  ): Promise<CreateSessionBuyingProductResDto> {
    const { price } = createSessionBuyingProductReqDto;
    const { email } = user;

    const client = this.configService.get(EEnvVariables.CLIENT_URL);

    const session = await this.stripeClient.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price,
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: email,
      metadata: {
        email: email,
        price,
      },
      // success_url: `${client}/success`,
      // cancel_url: `${client}/cancel`,
      success_url: 'http://localhost:5001/success',
      cancel_url: `http://localhost:5001/cancel`,
    });

    return { url: session.url };
  }

  /**
   * @method stripeWebhookHandler - incoming webhooks from stripe handler
   * @param {string} signature - 'stripe-signature' value from headers
   * @param {Buffer} rawBody - raw request body
   * @returns {Promise<CommonSuccessResDto>} - {success:true}
   */
  async stripeWebhookHandler(signature: string, rawBody: Buffer): Promise<CommonSuccessResDto> {
    // Retrieve the event by verifying the signature using the raw body and secret.

    let event: Stripe.DiscriminatedEvent;
    const webhookEndpointSecret = this.configService.get(EEnvVariables.STRIPE_WEBHOOK_ENDPOINT_SECRET);

    try {
      event = this.stripeClient.webhooks.constructEvent(
        rawBody,
        signature,
        webhookEndpointSecret,
      ) as Stripe.DiscriminatedEvent;
    } catch (err) {
      this.logger.error(JSON.stringify(err));
      throw new BadRequestException('Webhook signature verification failed');
    }

    switch (event.type) {
      case 'checkout.session.completed':
        const { email, price } = event.data.object.metadata;
        if (price === EProductsPrices.MONEY1000) {
          this.logger.debug(`user ${email} want buy MONEY1000`);
          await this.userRepository.findOneAndUpdate({ email }, { $inc: { money: 1000 } });
          break;
        }

        if (price === EProductsPrices.PACK_BRONZE) {
          this.logger.debug(`user ${email} want buy PACK_BRONZE`);
          await this.userRepository.findOneAndUpdate({ email }, { $inc: { 'packs.bronze': 1 } });
          break;
        }

        if (price === EProductsPrices.PACK_SILVER) {
          this.logger.debug(`user ${email} want buy PACK_SILVER`);
          await this.userRepository.findOneAndUpdate({ email }, { $inc: { 'packs.silver': 1 } });
          break;
        }

        if (price === EProductsPrices.PACK_GOLD) {
          this.logger.debug(`user ${email} want buy PACK_GOLD`);
          await this.userRepository.findOneAndUpdate({ email }, { $inc: { 'packs.gold': 1 } });
          break;
        }

        this.logger.error(`user ${email} want buy not handler price(${price})`);

        break;
      default:
        break;
    }

    return { success: true };
  }
}
