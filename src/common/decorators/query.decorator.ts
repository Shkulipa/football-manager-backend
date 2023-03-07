import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { queryHelper } from 'src/common/helpers/query.helper';
import { ExpressRequestInterface } from 'src/common/interfaces/expressRequest.interfaces';

export const QueryParams = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<ExpressRequestInterface>();
    const query = queryHelper(request.query);
    return query;
  },
);
