import { applyDecorators } from '@nestjs/common';
import { ApiBadRequestResponse, ApiForbiddenResponse, ApiNotFoundResponse } from '@nestjs/swagger';

import { EErrors } from '../constants/errors.enum';
import { CommonServerErrorResDto } from '../dto/common-server-error-res.dto';

/**
 * ComposeOthersErrorsDecorator decorator - composing different decorators
 */
export function ComposeOthersErrorsDecorator(...errorResponses: EErrors[]) {
  const type = CommonServerErrorResDto;
  const decorators = errorResponses.map((errorResponse) => {
    if (errorResponse === EErrors.FORBIDDEN_ERROR) {
      return ApiForbiddenResponse({
        type,
        description: EErrors.FORBIDDEN_ERROR,
      });
    }

    if (errorResponse === EErrors.NOT_FOUND_ERROR) {
      return ApiNotFoundResponse({
        type,
        description: EErrors.NOT_FOUND_ERROR,
      });
    }

    if (errorResponse === EErrors.BAD_REQUEST_ERROR) {
      return ApiBadRequestResponse({
        type,
        description: EErrors.BAD_REQUEST_ERROR,
      });
    }
  });
  return applyDecorators(...decorators);
}
