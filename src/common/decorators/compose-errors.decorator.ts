import { applyDecorators } from '@nestjs/common';
import { ApiBadRequestResponse, ApiInternalServerErrorResponse } from '@nestjs/swagger';

import { EErrors } from '../constants/errors.enum';
import { CommonServerErrorResDto } from '../dto/common-server-error-res.dto';

/**
 * ComposeErrorsDecorator decorator - composing decorators for errors
 */
export function ComposeErrorsDecorator() {
  const decorators = [
    ApiBadRequestResponse({
      type: CommonServerErrorResDto,
      description: EErrors.BAD_REQUEST_ERROR,
    }),
    ApiInternalServerErrorResponse({
      type: CommonServerErrorResDto,
      description: EErrors.INTERNAL_SERVER_ERROR,
    }),
  ];

  return applyDecorators(...decorators);
}
