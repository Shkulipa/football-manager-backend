import { Controller, Post, Req } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { EErrors } from 'src/common/constants/errors.enum';
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
  constructor(private readonly refreshTokenService: RefreshTokenService) {}

  /**
   * refresh access token
   * @returns {Promise<RefreshResDto>}
   */
  @Post('/refresh')
  @ApiOperation({
    description: 'get real teams',
    operationId: OperationIds.REAL_TEAM_GET_MANY,
  })
  @ApiResponse({ status: 200, type: RefreshResDto, description: 'OK' })
  @ComposeOthersErrorsDecorator(EErrors.NOT_FOUND_ERROR)
  async refresh(@Req() req: Request): Promise<RefreshResDto> {
    return this.refreshTokenService.refresh(req.cookies.refreshToken);
  }
}
