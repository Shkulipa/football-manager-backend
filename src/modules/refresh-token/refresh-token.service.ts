import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { pick } from 'lodash';
import { UserJtwDataDto } from 'src/common/dto/user-jwt-data.dto';
import { IUserData } from 'src/common/interfaces/user-data.interfaces';

import { User, UserModel } from '../user/entities/user.entity';
import { JwtService } from './../../services/jwt/jwt.service';

@Injectable()
export class RefreshTokenService {
  constructor(@InjectModel(User.name) private readonly userModel: UserModel, private readonly jwtService: JwtService) {}

  async refresh(token: string) {
    if (!token) throw new BadRequestException("Token wasn't provided");

    const tokenData = this.jwtService.verifyRefreshToken(token) as UserJtwDataDto;

    const tokenDB = await this.userModel.findOne({
      refreshToken: token,
    });
    if (!tokenDB) throw new NotFoundException("Token in DB wasn't find");

    const user = await this.userModel
      .findOne({
        _id: tokenData._id,
      })
      .lean();
    if (!user) throw new NotFoundException(`User with email:${user.email} didn't found`);

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
    };

    await this.userModel.findOneAndUpdate({ userId: user._id }, { refreshToken });

    return res;
  }
}
