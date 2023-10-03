import { UnauthorizedException } from '@nestjs/common';
import { pick } from 'lodash';
import { Socket } from 'socket.io';
import { UserService } from 'src/modules/user/user.service';
import { JwtService } from 'src/services/jwt/jwt.service';

import { UserJtwDataDto } from '../dto/user-jwt-data.dto';
import { SocketUserData } from '../interfaces/socket-user-data.interface';

export type SocketMiddleware = (socket: Socket, next: (err?: Error) => void) => void;

export const WSAuthMiddleware = (jwtService: JwtService, userService: UserService) => {
  return async (socket: SocketUserData, next) => {
    const token = socket.handshake.auth.token || socket.handshake.headers['token'];
    if (!token) {
      next(new UnauthorizedException('Token not provided'));
      return;
    }

    try {
      const { _id } = jwtService.verifyAccessToken(token) as UserJtwDataDto;

      const user = await userService.findById(_id);

      const userData = {
        ...pick(user, ['_id', 'email', 'username', 'roles']),
      };

      socket.user = userData;
      next();
    } catch (error) {
      next(new Error(error));
    }
  };
};
