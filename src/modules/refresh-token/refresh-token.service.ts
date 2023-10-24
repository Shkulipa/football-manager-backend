import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { pick } from 'lodash';
import { User } from 'src/common/decorators/user.decorator';
import { UserJtwDataDto } from 'src/common/dto/user-jwt-data.dto';
import { toId } from 'src/common/helpers/transform.helper';
import { IUserData } from 'src/common/interfaces/user-data.interfaces';
import { UserModel } from 'src/services/repositories/user/entities/user.entity';

import { JwtService } from './../../services/jwt/jwt.service';

@Injectable()
export class RefreshTokenService {
  constructor(@InjectModel(User.name) private readonly userModel: UserModel, private readonly jwtService: JwtService) {}

  async refresh(token: string) {
    if (!token) {
      // Token wasn't provided
      throw new UnauthorizedException('Not Authorized! Please login');
    }

    const tokenData = this.jwtService.verifyRefreshToken(token) as UserJtwDataDto;

    const tokenDB = await this.userModel.findOne({
      refreshToken: token,
    });
    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGVlNjM0ZGQwZmMyNjM5NmYwZjI3MTUiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiYWRtaW4iLCJyb2xlcyI6WyJDT1VOVFJZX0NSRUFURSIsIkNPVU5UUllfREVMRVRFIiwiQ09VTlRSWV9VUERBVEUiLCJMRUFHVUVfQ1JFQVRFIiwiTEVBR1VFX0RFTEVURSIsIkxFQUdVRV9VUERBVEUiLCJSRUFMX1RFQU1fQ1JFQVRFIiwiUkVBTF9URUFNX1VQREFURSIsIlJFQUxfVEVBTV9ERUxFVEUiLCJSRUFMX1BMQVlFUl9DUkVBVEUiLCJSRUFMX1BMQVlFUl9VUERBVEUiLCJSRUFMX1BMQVlFUl9ERUxFVEUiXSwiaWF0IjoxNjk3NzUzMjQ3LCJleHAiOjE2OTc3NTMyNjd9.gDnaUwDZA2BC9tw9InS47e7-ef0p8OxRdY5yQNeTvwY
    if (!tokenDB) {
      // Token in DB wasn't find
      throw new UnauthorizedException('Not Authorized! Please login again');
    }

    const user = await this.userModel
      .findOne({
        _id: tokenData._id,
      })
      .lean();
    if (!user) {
      // user doesn't exist already
      throw new NotFoundException(`Sorry, user with email:${user.email} was removed or doesn't exist already`);
    }

    const userData: IUserData = {
      ...pick(user, ['_id', 'email', 'username', 'roles']),
    };
    const { refreshToken, accessToken } = this.jwtService.createTokens({
      _id: user._id.toString(),
      email: user.email,
      username: user.username,
      roles: user.roles,
    });

    const res = {
      ...userData,
      accessToken,
      refreshToken,
    };

    await this.userModel.findOneAndUpdate({ _id: toId(user._id) }, { refreshToken });

    return res;
  }
}
