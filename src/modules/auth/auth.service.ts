import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { omit } from 'lodash';
import { Types } from 'mongoose';
import { CommonDecodedTokenJwtDto } from 'src/common/dto/common-decoded-token-jwt.dto';
import { generatePassword } from 'src/common/helpers/generate-password.helper';
import { hashPasswordHelper } from 'src/common/helpers/hash-password.helper';
import { toId } from 'src/common/helpers/transform.helper';
import { hoursData, JwtService } from 'src/services/jwt/jwt.service';
import { ActivationRepository } from 'src/services/repositories/activation/activation.repository';
import { RestorePasswordRepository } from 'src/services/repositories/restore-password/restore-password.repository';
import { UserRepository } from 'src/services/repositories/user/user.repository';
import { v4 as uuidV4 } from 'uuid';

import { LoginDto } from '../user/dto/login.dto';
import { EEnvVariables } from './../../common/constants/env-variables.enum';
import { CommonSuccessResDto } from './../../common/dto/common-success-res.dto';
import { EMailTemplatesType } from './../../services/mailer/dto/mail-template.enum';
import { EmailService } from './../../services/mailer/email.service';
import { AuthLoginResDto } from './dto/auth-login-res.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserReqDto } from './dto/login-user-req.dto';
import { RstrPassEmailReqDto } from './dto/rstr-pass-email-req.dto';
import { UpdateRstrPassReqDto } from './dto/update-rstr-pass-req.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly restorePasswordRepository: RestorePasswordRepository,
    private readonly activationRepository: ActivationRepository,
    private readonly userRepository: UserRepository,
    private readonly configService: ConfigService,
    private readonly emailService: EmailService,
    private readonly jwtService: JwtService,
  ) {}

  async signup(createUserDto: CreateUserDto): Promise<CommonSuccessResDto> {
    const { email, username } = createUserDto;

    /** check if username or email has already taken */
    await this.userRepository.validateSignup(email, username);

    /** create activation link & account */
    const newUserData = omit(createUserDto, ['confirmPassword']);

    const activationId = uuidV4();

    const newUser = await this.userRepository.create({
      ...newUserData,
    });

    const token = this.jwtService.createEmailActivationToken(newUser._id.toString());

    await this.activationRepository.create({
      activationId,
      token,
      userId: toId(newUser._id),
    });

    const CLIENT_URL = this.configService.get<string>(EEnvVariables.CLIENT_URL);
    const activationLink = `${CLIENT_URL}/confirm-email/${activationId}?username=${username}`;

    /** send activate link to email */
    this.emailService.sendEmail(email, username, EMailTemplatesType.ACTIVATION, activationLink);

    return { success: true };
  }

  async login(loginUseReqDto: LoginUserReqDto): Promise<AuthLoginResDto> {
    const user = await this.userRepository.validateLogin(loginUseReqDto);
    return this.getAuthLoginResponse(user);
  }

  async logout(refreshToken: string): Promise<void> {
    await this.userRepository.logout(refreshToken);
  }

  async socialAuth(email: string) {
    const user = await this.userRepository.findOne({ email });

    if (user) {
      return await this.getAuthLoginResponse(user);
    }

    let username: string;
    while (!username) {
      const generatedUsername = 'username' + Math.floor(Math.random() * 1000000000);
      const isUsername = await this.userRepository.findOne({ username: generatedUsername });
      if (!isUsername) username = generatedUsername;
    }

    await this.userRepository.create({
      email,
      username,
      password: generatePassword(),
      isConfirmEmail: true,
    });

    const createdUser = await this.userRepository.findOne({ email });
    return await this.getAuthLoginResponse(createdUser);
  }

  private async getAuthLoginResponse(user: LoginDto): Promise<AuthLoginResDto> {
    const tokens = this.jwtService.createTokens({
      _id: user._id.toString(),
      email: user.email,
      username: user.username,
      roles: user.roles,
    });

    await this.userRepository.findByIdAndUpdate(
      new Types.ObjectId(user._id),
      {
        $set: {
          refreshToken: tokens.refreshToken,
        },
      },
      {
        new: true,
      },
    );

    const res: AuthLoginResDto = {
      ...user,
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    };

    return res;
  }

  async rstrPassEmail(rstrPassEmailReqDto: RstrPassEmailReqDto): Promise<CommonSuccessResDto> {
    const { email } = rstrPassEmailReqDto;
    const user = await this.userRepository.findOne({ email });
    if (!user) throw new NotFoundException('Email not found');

    const token = this.jwtService.createRestorePasswordToken(user._id.toString());

    const activationId = uuidV4();
    await this.restorePasswordRepository.create({
      activationId,
      token,
      userId: toId(user._id),
    });

    const CLIENT_URL = this.configService.get<string>(EEnvVariables.CLIENT_URL);
    const activationLink = `${CLIENT_URL}/auth/restore-password/${activationId}`;

    /** send activate link to email */
    this.emailService.sendEmail(email, user.username, EMailTemplatesType.RESTORE_PASSWORD, activationLink);

    return { success: true };
  }

  async updateRstrPass(updateRstrPassReqDto: UpdateRstrPassReqDto): Promise<CommonSuccessResDto> {
    const { activationId, newPassword } = updateRstrPassReqDto;

    const activation = await this.restorePasswordRepository.validateRestorePassword(activationId);

    // check expires
    const jwtDecoded = this.jwtService.verifyRestorePasswordToken(activation.token) as CommonDecodedTokenJwtDto;

    // remove data about activation and update user
    await this.userRepository.validation(jwtDecoded._id);
    await this.restorePasswordRepository.deleteOne({ activationId });

    const hashedPass = await hashPasswordHelper(newPassword);
    await this.userRepository.findByIdAndUpdate({ _id: toId(jwtDecoded._id) }, { password: hashedPass });

    return { success: true };
  }

  async regularDataCleanup() {
    const filesForDelete = await this.restorePasswordRepository.regularDataCleanup(hoursData + 1);
    return filesForDelete;
  }
}
