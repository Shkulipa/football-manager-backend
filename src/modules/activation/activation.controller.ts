import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EErrors } from 'src/common/constants/errors.enum';
import { OperationIds } from 'src/common/constants/operations-ids.enum';
import { ACTIVATION_TAG } from 'src/common/constants/tags';
import { ComposeErrorsDecorator } from 'src/common/decorators/compose-errors.decorator';
import { ComposeOthersErrorsDecorator } from 'src/common/decorators/compose-others-errors.decorator';
import { CommonServerErrorResDto } from 'src/common/dto/common-server-error-res.dto';
import { CommonSuccessResDto } from 'src/common/dto/common-success-res.dto';

import { ActivationService } from './activation.service';
import { SendActivationEmailReqDto } from './dto/send-activation-email-req.dto';

@ApiTags(ACTIVATION_TAG)
@Controller(ACTIVATION_TAG)
@ComposeErrorsDecorator()
export class ActivationController {
  constructor(private readonly activationService: ActivationService) {}

  /**
   * confirm email
   * @returns {Promise<CommonSuccessResDto>}
   */
  @Post('/confirm-email/:activationId')
  @ApiOperation({
    operationId: OperationIds.AUTH_CONFIRM_EMAIL,
    description: 'confirm email',
  })
  @ApiResponse({ status: 200, type: CommonSuccessResDto, description: 'OK' })
  @ApiResponse({ status: 498, type: CommonServerErrorResDto, description: 'Link expired' })
  @ComposeOthersErrorsDecorator(EErrors.NOT_FOUND_ERROR)
  async activate(@Param('activationId') activationId: string): Promise<CommonSuccessResDto> {
    return await this.activationService.activate(activationId);
  }

  /**
   * send email activate account
   * @returns {Promise<CommonSuccessResDto>}
   */
  @Post()
  @ApiOperation({
    summary: 'Resend activation email',
    description: 'Resend activation email',
    operationId: OperationIds.RESEND_EMAIL,
  })
  @ApiResponse({ status: 200, type: CommonSuccessResDto, description: 'OK' })
  async activateSend(@Body() sendReqDto: SendActivationEmailReqDto): Promise<CommonSuccessResDto> {
    return await this.activationService.activateSend(sendReqDto);
  }

  /**
   * confirm update email
   * @returns {Promise<CommonSuccessResDto>}
   */
  @Patch('/confirm-update-email/:activationId')
  @ApiOperation({
    description: 'confirm update email',
    operationId: OperationIds.UPDATE_CONFIRM_EMAIL,
  })
  @ApiResponse({ status: 200, type: CommonSuccessResDto, description: 'OK' })
  @ComposeOthersErrorsDecorator(EErrors.NOT_FOUND_ERROR)
  async confirmUpdateEmail(@Param('activationId') activationId: string): Promise<CommonSuccessResDto> {
    return await this.activationService.confirmUpdateEmail(activationId);
  }
}
