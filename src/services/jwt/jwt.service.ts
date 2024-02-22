import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { sign, TokenExpiredError, verify } from 'jsonwebtoken';
import { EEnvVariables } from 'src/common/constants/env-variables.enum';
import { UserJtwDataDto } from 'src/common/dto/user-jwt-data.dto';

export const hoursData = 3;

@Injectable()
export class JwtService {
  constructor(private readonly configService: ConfigService) {}

  private verifyToken(token: string, secret: string) {
    try {
      const decoded = verify(token, secret);
      return decoded;
    } catch (err) {
      if (err instanceof TokenExpiredError) {
        // Refresh token has expired
        throw new UnauthorizedException('Your Session has expired, please login again');
      }

      throw new UnauthorizedException(err.message);
    }
  }

  verifyAccessToken(token: string) {
    try {
      const SECRET_ACCESS = this.configService.get<string>(EEnvVariables.SECRET_ACCESS);
      const decoded = this.verifyToken(token, SECRET_ACCESS);
      return decoded;
    } catch (err) {
      throw err;
    }
  }

  verifyRefreshToken(token: string) {
    try {
      const SECRET_REFRESH = this.configService.get<string>(EEnvVariables.SECRET_REFRESH);
      const decoded = this.verifyToken(token, SECRET_REFRESH);
      return decoded;
    } catch (err) {
      throw err;
    }
  }

  verifyEmailActivationToken(token: string) {
    try {
      const SECRET_EMAIL_ACTIVATION = this.configService.get<string>(EEnvVariables.SECRET_EMAIL_ACTIVATION);
      const decoded = this.verifyToken(token, SECRET_EMAIL_ACTIVATION);
      return decoded;
    } catch (err) {
      throw new HttpException('Activation link expired', 498);
    }
  }

  verifyNewEmailActivationToken(token: string) {
    try {
      const SECRET_EMAIL_ACTIVATION = this.configService.get<string>(EEnvVariables.SECRET_NEW_EMAIL_ACTIVATION);
      const decoded = this.verifyToken(token, SECRET_EMAIL_ACTIVATION);
      return decoded;
    } catch (err) {
      throw new HttpException('Activation link expired', 498);
    }
  }

  verifyRestorePasswordToken(token: string) {
    try {
      const SECRET_EMAIL_ACTIVATION = this.configService.get<string>(EEnvVariables.SECRET_RESTORE_PASSWORD);
      const decoded = this.verifyToken(token, SECRET_EMAIL_ACTIVATION);
      return decoded;
    } catch (err) {
      throw new HttpException('Activation link expired', 498);
    }
  }

  createRestorePasswordToken(userId: string) {
    const SECRET_EMAIL_ACTIVATION = this.configService.get<string>(EEnvVariables.SECRET_RESTORE_PASSWORD);
    const token = sign({ _id: userId }, SECRET_EMAIL_ACTIVATION, { expiresIn: `${hoursData}h` });
    return token;
  }

  createEmailActivationToken(userId: string) {
    const SECRET_EMAIL_ACTIVATION = this.configService.get<string>(EEnvVariables.SECRET_EMAIL_ACTIVATION);
    const token = sign({ _id: userId }, SECRET_EMAIL_ACTIVATION, { expiresIn: `${hoursData}h` });
    return token;
  }

  private createToken(jwtData: UserJtwDataDto, secret: string, expiresIn: string) {
    return sign(jwtData, secret, {
      expiresIn,
    });
  }

  createTokens(jwtData: UserJtwDataDto) {
    const SECRET_ACCESS = this.configService.get<string>(EEnvVariables.SECRET_ACCESS);
    const SECRET_REFRESH = this.configService.get<string>(EEnvVariables.SECRET_REFRESH);

    const accessToken = this.createToken(jwtData, SECRET_ACCESS, '30m');
    const refreshToken = this.createToken(jwtData, SECRET_REFRESH, '4h');

    return { accessToken, refreshToken };
  }
}
