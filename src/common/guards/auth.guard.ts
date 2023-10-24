import { UnauthorizedException } from '@nestjs/common';
import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { CanActivate } from '@nestjs/common/interfaces/features/can-activate.interface';
import { ExecutionContext } from '@nestjs/common/interfaces/features/execution-context.interface';
import { pick } from 'lodash';
import { ExpressRequestInterface } from 'src/common/interfaces/express-req.interfaces';
import { UserService } from 'src/modules/user/user.service';
import { JwtService } from 'src/services/jwt/jwt.service';

import { UserJtwDataDto } from '../dto/user-jwt-data.dto';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService, private readonly userService: UserService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<ExpressRequestInterface>();
    const headerAuthorization = request.headers.authorization;

    if (!headerAuthorization) throw new UnauthorizedException('User unauthorized, please login');

    const token = headerAuthorization.split(' ')[1];
    if (!token) throw new UnauthorizedException('User unauthorized, please login');

    try {
      const { _id } = this.jwtService.verifyAccessToken(token) as UserJtwDataDto;
      const user = await this.userService.findById(_id);

      const userData = {
        ...pick(user, ['_id', 'email', 'username', 'roles']),
      };

      request.user = userData;

      return true;
    } catch (err) {
      throw err;
    }
  }
}
