import { BadRequestException, NotFoundException, UnauthorizedException } from '@nestjs/common';

import { CommonServerErrorResDto } from '../dto/common-server-error-res.dto';

export const wsExceptionFilterHelper = (exception: Error) => {
  const error: CommonServerErrorResDto = {
    statusCode: 500,
    message: 'Unknown error',
    error: 'Unknown',
  };

  if (exception instanceof BadRequestException) {
    const exceptionData = exception.getResponse();
    const msg = exceptionData['message'] || exception.message;

    error.statusCode = exception.getStatus() || 400;
    error.message = msg;
    error.error = 'Bad Request';
  }

  if (exception instanceof UnauthorizedException) {
    const exceptionData = exception.getResponse();
    const msg = exceptionData['message'] || exception.message;

    error.statusCode = exception.getStatus() || 401;
    error.message = msg;
    error.error = 'Unauthorized';
  }

  if (exception instanceof NotFoundException) {
    const exceptionData = exception.getResponse();
    const msg = exceptionData['message'] || exception.message;

    error.statusCode = exception.getStatus() || 404;
    error.message = msg;
    error.error = 'Not Found';
  }

  return error;
};
