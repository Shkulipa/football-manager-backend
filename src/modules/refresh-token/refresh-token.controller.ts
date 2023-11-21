import { Controller, Post, Req, Res } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { EEnvVariables } from 'src/common/constants/env-variables.enum';
import { EErrors } from 'src/common/constants/errors.enum';
import { EMode } from 'src/common/constants/mode.enum';
import { OperationIds } from 'src/common/constants/operations-ids.enum';
import { TOKEN_TAG } from 'src/common/constants/tags';
import { ComposeErrorsDecorator } from 'src/common/decorators/compose-errors.decorator';
import { ComposeOthersErrorsDecorator } from 'src/common/decorators/compose-others-errors.decorator';

import { RefreshResDto } from './dto/refresh-res.dto';
import { RefreshTokenService } from './refresh-token.service';

@ApiTags(TOKEN_TAG)
@Controller(TOKEN_TAG)
@ComposeErrorsDecorator()
export class RefreshTokenController {
  constructor(
    private readonly refreshTokenService: RefreshTokenService,
    private readonly configService: ConfigService,
  ) {}

  /**
   * refresh access token
   * @returns {Promise<RefreshResDto>}
   */
  @Post('/refresh')
  @ApiOperation({
    description: 'refresh tokens',
    operationId: OperationIds.REFRESH_TOKENS,
  })
  @ApiResponse({ status: 200, type: RefreshResDto, description: 'OK' })
  @ComposeOthersErrorsDecorator(EErrors.NOT_FOUND_ERROR)
  async refresh(@Req() req: Request, @Res({ passthrough: true }) res: Response): Promise<RefreshResDto> {
    const { refreshToken, ...rest } = await this.refreshTokenService.refresh(req.cookies.refreshToken);

    const mode = this.configService.get(EEnvVariables.NODE_ENV);

    // set cookies
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      ...(mode === EMode.DEVELOPMENT
        ? {}
        : {
            sameSite: 'none',
            secure: false,
          }),
    });

    return rest;
  }
}
