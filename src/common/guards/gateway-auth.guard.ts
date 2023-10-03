import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from 'src/services/jwt/jwt.service';

import { SocketUserData } from '../interfaces/socket-user-data.interface';

@Injectable()
export class GatewayAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const socket: SocketUserData = context.switchToWs().getClient();

    const token = socket.handshake.auth.token || socket.handshake.headers['token'];
    if (!token) throw new UnauthorizedException('Token not provided');

    try {
      this.jwtService.verifyAccessToken(token);

      return true;
    } catch (err) {
      throw err;
    }
  }
}
