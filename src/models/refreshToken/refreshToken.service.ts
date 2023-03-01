import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { pick } from 'lodash';
import { Model } from 'mongoose';
import { IUserData } from 'src/common/interfaces/userData.interfaces';
import { IUserJtwData } from 'src/common/interfaces/userJwtData.interfaces';
import { JwtService } from 'src/models/jwt/jwt.service';
import { User, UserDocument } from '../user/entities/user.entity';

@Injectable()
export class RefreshTokenService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    private readonly jwtService: JwtService,
  ) {}

  private readonly logger = new Logger(RefreshTokenService.name);

  async refresh(token: string) {
    try {
      if (!token)
        throw new HttpException(
          "Token wasn't provided",
          HttpStatus.BAD_REQUEST,
        );

      const tokenData = this.jwtService.verifyRefreshToken(
        token,
      ) as IUserJtwData;

      const tokenDB = await this.userModel.findOne({
        refreshToken: token,
      });
      if (!tokenDB)
        throw new HttpException(
          "Token in DB wasn't find",
          HttpStatus.BAD_REQUEST,
        );

      const user = await this.userModel.findOne({
        _id: tokenData._id,
      });
      if (!user)
        throw new HttpException(
          `User with email:${user.email} didn't found`,
          HttpStatus.BAD_REQUEST,
        );

      const userData: IUserData = {
        ...pick(user, ['_id', 'email', 'username', 'roles']),
      };
      const { refreshToken, accessToken } = this.jwtService.createTokens(
        userData._id,
      );
      const res = {
        ...userData,
        accessToken,
      };

      await this.userModel.findOneAndUpdate(
        { userId: user._id },
        { refreshToken },
      );

      return res;
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  }
}
