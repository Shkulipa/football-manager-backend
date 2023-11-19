import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { compare } from 'bcrypt';
import { omit } from 'lodash';
import { Types } from 'mongoose';
import { EEnvVariables } from 'src/common/constants/env-variables.enum';
import { toId } from 'src/common/helpers/transform.helper';
import { IUserData } from 'src/common/interfaces/user-data.interfaces';
import { JwtService } from 'src/services/jwt/jwt.service';
import { EMailTemplatesType } from 'src/services/mailer/dto/mail-template.enum';
import { EmailService } from 'src/services/mailer/email.service';
import { ActivationRepository } from 'src/services/repositories/activation/activation.repository';
import { UserRepository } from 'src/services/repositories/user/user.repository';
import { v4 as uuidV4 } from 'uuid';

import { CreateUserDto } from '../auth/dto/create-user.dto';
import { UpdateEmailReqDto } from './dto/update-email-req.dto';
import { UpdatePasswordReqDto } from './dto/update-password-req.dto';
import { UpdateUsernameReqDto } from './dto/update-username-req.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly activationRepository: ActivationRepository,
    private readonly configService: ConfigService,
    private readonly emailService: EmailService,
    private readonly jwtService: JwtService,
  ) {}

  async findById(id: string | Types.ObjectId) {
    return await this.userRepository.validation(id);
  }

  async createUser(createUserDto: CreateUserDto): Promise<string> {
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

    return activationId;
  }

  async updatePassword(user: IUserData, updatePasswordReqDto: UpdatePasswordReqDto) {
    const { _id: userId } = user;
    const { newPassword, oldPassword } = updatePasswordReqDto;

    const userData = await this.userRepository.validation(userId, { lean: false });

    const isEqualOldPass = await compare(oldPassword, userData.password);
    if (!isEqualOldPass) throw new ForbiddenException('Old Password is incorrect');

    const isSamePass = await compare(newPassword, userData.password);
    if (isSamePass) throw new BadRequestException('New and old password must not match');

    userData.password = newPassword;
    await userData.save();

    return { success: true };
  }

  async updateUsername(user: IUserData, updateUsernameReqDto: UpdateUsernameReqDto) {
    const { _id: userId } = user;
    const { username } = updateUsernameReqDto;

    const isUsername = await this.userRepository.findOne({ username });
    if (isUsername) throw new BadRequestException('Username has already taken');

    await this.userRepository.findByIdAndUpdate(new Types.ObjectId(userId), { $set: { username } });

    return { success: true };
  }

  async updateEmail(user: IUserData, updateEmailReqDto: UpdateEmailReqDto) {
    const { _id, email: currentEmail, username } = user;
    const { email: newEmail } = updateEmailReqDto;

    const isEmail = await this.userRepository.findOne({ email: newEmail });
    if (isEmail) throw new BadRequestException('Email has already taken');

    const token = this.jwtService.createNewEmailActivationToken(_id.toString(), newEmail);
    const activationId = uuidV4();

    await this.activationRepository.deleteOne({ userId: toId(_id) }); // delete old records
    await this.activationRepository.create({
      activationId,
      token,
      userId: toId(_id),
    });

    const CLIENT_URL = this.configService.get<string>(EEnvVariables.CLIENT_URL);
    const activationLink = `${CLIENT_URL}/confirm-new-email/${activationId}?email=${newEmail}`;

    /** send activate link to email */
    this.emailService.sendEmail(
      currentEmail,
      username,
      EMailTemplatesType.NEW_EMAIL_CONFIRMATION,
      activationLink,
      newEmail,
    );

    return { success: true };
  }
}
