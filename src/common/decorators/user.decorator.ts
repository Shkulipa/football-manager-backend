import { createParamDecorator, ExecutionContext, UnauthorizedException } from '@nestjs/common';

import { IUserData } from '../interfaces/user-data.interfaces';

/**
 * @User param decorator from the request;
 */
export const User = createParamDecorator((data: never, ctx: ExecutionContext) => {
  const user: IUserData = ctx.switchToHttp().getRequest().user;
  if (!user) {
    throw new UnauthorizedException();
  }

  return user;
});
