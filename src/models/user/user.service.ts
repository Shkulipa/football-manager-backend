import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/createUser.dto';
import { User, UserDocument } from './entities/user.entity';
import { omit, pick } from 'lodash';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private usersModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = omit(createUserDto, ['confirmPassword']);

    const userByEmail = await this.usersModel.findOne({
      email: createUserDto.email,
    });
    const userByUsername = await this.usersModel.findOne({
      username: createUserDto.username,
    });
    if (userByEmail)
      throw new HttpException(
        'Email already been taken',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    if (userByUsername)
      throw new HttpException(
        'Username already been taken',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );

    const createUser = new this.usersModel(newUser);
    await createUser.save();

    const result = pick(createUser, ['_id', 'email', 'username']);
    return result;
  }
}
