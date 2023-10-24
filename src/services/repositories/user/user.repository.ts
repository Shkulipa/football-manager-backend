import { BadRequestException, ForbiddenException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { compare } from 'bcrypt';
import { Model } from 'mongoose';
import { BaseMongoRepository } from 'src/database/base-repository/base-mongo.repository';
import { LoginUserReqDto } from 'src/modules/auth/dto/login-user-req.dto';
import { LoginDto } from 'src/modules/user/dto/login.dto';
import { UsersDbDto } from 'src/services/repositories/user-team/dto/user-db.dto';

import { User } from './entities/user.entity';

@Injectable()
export class UserRepository extends BaseMongoRepository<UsersDbDto> {
  protected readonly logger = new Logger(UserRepository.name);

  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UsersDbDto>,
  ) {
    super(userModel, 'User');
  }

  async validateLogin(loginUseReqDto: LoginUserReqDto) {
    const { username, password } = loginUseReqDto;

    const user = await this.userModel
      .findOne()
      .or([{ username }, { email: username }])
      .lean();
    if (!user) throw new NotFoundException("User wasn't found");
    if (!user.isConfirmEmail) throw new ForbiddenException('You need activate your account');

    /** compare pass */
    const isEqualPassword = await compare(password, user.password);
    if (!isEqualPassword) throw new ForbiddenException('Password incorrect');

    const res: LoginDto = {
      _id: user._id,
      email: user.email,
      username: user.username,
      roles: user.roles,
    };

    return res;
  }

  async validateSignup(email: string, username: string) {
    const userByEmail = await this.userModel
      .findOne({
        email,
      })
      .lean();
    const userByUsername = await this.userModel
      .findOne({
        username,
      })
      .lean();
    if (userByEmail) throw new BadRequestException('Email already been taken');
    if (userByUsername) throw new BadRequestException('Username already been taken');
  }
}
