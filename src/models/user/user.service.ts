import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { compare } from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserDto } from './dto/createUser.dto';
import { User, UserDocument } from './entities/user.entity';
import { omit, pick } from 'lodash';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { JwtService } from 'src/models/jwt/jwt.service';
import { LoginUserDto } from './dto/loginUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,

    private readonly configService: ConfigService,
    private readonly mailerService: MailerService,
    private readonly jwtService: JwtService,
  ) {}

  private readonly logger = new Logger(UserService.name);

  async create(createUserDto: CreateUserDto) {
    try {
      const newUser = omit(createUserDto, ['confirmPassword']);

      const userByEmail = await this.userModel.findOne({
        email: createUserDto.email,
      });
      const userByUsername = await this.userModel.findOne({
        username: createUserDto.username,
      });
      if (userByEmail)
        throw new HttpException(
          'Email already been taken',
          HttpStatus.NOT_FOUND,
        );
      if (userByUsername)
        throw new HttpException(
          'Username already been taken',
          HttpStatus.NOT_FOUND,
        );

      const activationId = uuidv4();
      const createUser = await this.userModel.create({
        ...newUser,
        activationId,
      });

      const CLIENT_URL = this.configService.get<string>('CLIENT_URL');
      const activationLink = `${CLIENT_URL}/confirm-email/${activationId}`;

      this.mailerService.sendMail({
        to: 'caspernumlock@gmail.com', // list of receivers
        from: 'noreply', // sender address
        subject: 'Verification email in Soccer Manager', // Subject line

        template: 'verification',
        context: {
          email: createUserDto.email,
          username: createUserDto.username,
          activationLink,
        },
      });

      const result = {
        ...pick(createUser, [
          '_id',
          'email',
          'username',
          'isConfirmEmail',
          'roles',
        ]),
      };
      return result;
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  }

  async login(loginUserDto: LoginUserDto) {
    try {
      const { username, password } = loginUserDto;

      const user = await this.userModel
        .findOne()
        .or([{ username }, { email: username }]);
      if (!user)
        throw new HttpException('User wasn\t found', HttpStatus.NOT_FOUND);

      const isEqualPassword = await compare(password, user.password);
      if (!isEqualPassword)
        throw new HttpException('Password incorrect', HttpStatus.UNAUTHORIZED);

      const userData = { ...pick(user, ['_id', 'email', 'username', 'roles']) };
      const tokens = this.jwtService.createTokens(userData);

      user.refreshToken = tokens.refreshToken;
      user.save();

      return { ...userData, ...tokens };
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  }

  async activate(activationId: string) {
    try {
      const userWithActivationId = await this.userModel
        .findOne({
          activationId,
        })
        .exec();

      if (!userWithActivationId)
        throw new HttpException(
          "Activation id wasn't found",
          HttpStatus.NOT_FOUND,
        );

      const userData = pick(userWithActivationId, [
        '_id',
        'email',
        'username',
        'isConfirmEmail',
      ]);

      if (userWithActivationId.isConfirmEmail)
        return {
          isAlreadyConfirm: true,
          ...userData,
        };

      userWithActivationId.isConfirmEmail = true;
      userWithActivationId.save();

      const result = {
        isAlreadyConfirm: false,
        isConfirmEmail: true,
        ...userData,
      };
      return result;
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  }

  async findById(id: string) {
    try {
      const user = await this.userModel.findById(new Types.ObjectId(id));
      if (!user)
        throw new HttpException("User wasn't found", HttpStatus.NOT_FOUND);

      return user;
    } catch (err) {
      throw err;
    }
  }
}
