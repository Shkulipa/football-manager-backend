import { applyDecorators, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiUnauthorizedResponse } from '@nestjs/swagger';

import { EErrors } from '../constants/errors.enum';
import { EUserRoles } from '../constants/user-roles.enum';
import { AuthGuard } from '../guards/auth.guard';
import { RolesGuard } from '../guards/roles.guard';

/**
 * ComposeAuthDecorator decorator - composing decorators for auth: Guards, ApiBearerAuth, ApiUnauthorizedResponse
 * @param {EUserRoles[]} allowedRoles - optional parameter
 */
export function ComposeAuthDecorator(...allowedRoles: EUserRoles[]) {
  const decorators = [
    ApiBearerAuth(),
    ApiUnauthorizedResponse({
      type: Error,
      description: EErrors.UNAUTHORIZED,
    }),
  ];

  const guards: any = [AuthGuard, RolesGuard(...allowedRoles)];

  return applyDecorators(...decorators, UseGuards(...guards));
}
