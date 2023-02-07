import { sign, verify } from 'jsonwebtoken';
import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IUserJtwData } from 'src/common/interfaces/userJwtData.interfaces';

@Injectable()
export class JwtService {
  constructor(private readonly configService: ConfigService) {}

  private readonly logger = new Logger(JwtService.name);

  verifyToken(token: string) {
    try {
      const SECRET_REFRESH = this.configService.get<string>('SECRET_REFRESH');
      const decoded = verify(token, SECRET_REFRESH);

      return decoded;
    } catch (err) {
      this.logger.error(err);
      throw new HttpException(err.message, HttpStatus.UNAUTHORIZED);
    }
  }

  private createToken(
    jwtData: IUserJtwData,
    secret: string,
    expiresIn: string,
  ) {
    return sign(jwtData, secret, {
      expiresIn,
    });
  }

  createTokens(jwtData: IUserJtwData) {
    const SECRET_ACCESS = this.configService.get<string>('SECRET_ACCESS');
    const SECRET_REFRESH = this.configService.get<string>('SECRET_REFRESH');

    const accessToken = this.createToken(jwtData, SECRET_ACCESS, '4h');
    const refreshToken = this.createToken(jwtData, SECRET_REFRESH, '2d');

    return { accessToken, refreshToken };
  }
}
