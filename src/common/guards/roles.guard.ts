import { CanActivate, ExecutionContext, Type } from '@nestjs/common';

import { EUserRoles } from '../constants/user-roles.enum';
import { IUserData } from '../interfaces/user-data.interfaces';

export const RolesGuard = (...needAvailable: EUserRoles[]): Type<CanActivate> => {
  return class RolesGuardMixin implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
      const req = context.switchToHttp().getRequest();
      const user: IUserData = req.user;

      if (needAvailable.length === 0) {
        // allowed to all exists roles
        return true;
      } else {
        return needAvailable.every((role) => user.roles.includes(role));
      }
    }
  };
};
