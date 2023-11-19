import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EEnvVariables } from 'src/common/constants/env-variables.enum';
import { CommonDecodedTokenJwtDto } from 'src/common/dto/common-decoded-token-jwt.dto';
import { toId } from 'src/common/helpers/transform.helper';
import { hoursData, JwtService } from 'src/services/jwt/jwt.service';
import { EMailTemplatesType } from 'src/services/mailer/dto/mail-template.enum';
import { EmailService } from 'src/services/mailer/email.service';
import { ActivationRepository } from 'src/services/repositories/activation/activation.repository';
import { UserRepository } from 'src/services/repositories/user/user.repository';
import { v4 as uuidV4 } from 'uuid';

import { SendActivationEmailReqDto } from './dto/send-activation-email-req.dto';
import { VerifyNewEmailDto } from './dto/verify-new-email.dto';

@Injectable()
export class ActivationService {
  constructor(
    private readonly activationRepository: ActivationRepository,
    private readonly userRepository: UserRepository,
    private readonly configService: ConfigService,
    private readonly emailService: EmailService,
    private readonly jwtService: JwtService,
  ) {}

  // resend activation
  async activateSend(sendReqDto: SendActivationEmailReqDto) {
    const { username } = sendReqDto;

    /** user should be exist and not been activated adn not deleted */
    // const user = await this.userModel
    //   .findOne()
    //   .or([{ username }, { email: username }])
    //   .lean();
    const user = await this.userRepository.findOne({ $or: [{ email: username }, { username }] });
    if (!user) throw new NotFoundException('User not found');
    if (user.isConfirmEmail) throw new ConflictException('User has activated yet');

    await this.activationRepository.deleteMany({ userId: toId(user._id) });
    const token = this.jwtService.createEmailActivationToken(user._id.toString());
    const activationId = uuidV4();
    await this.activationRepository.create({
      activationId,
      token,
      userId: toId(user._id),
    });

    const CLIENT_URL = this.configService.get<string>(EEnvVariables.CLIENT_URL);
    const activationLink = `${CLIENT_URL}/confirm-email/${activationId}?username=${user.username}`;

    /** send activate link to email */
    this.emailService.sendEmail(user.email, user.username, EMailTemplatesType.ACTIVATION, activationLink);

    return { success: true };
  }

  async activate(activationId: string) {
    const activation = await this.activationRepository.validateActivation(activationId);

    // check expires
    const jwtDecoded = this.jwtService.verifyEmailActivationToken(activation.token) as CommonDecodedTokenJwtDto;

    // remove data about activation and update user
    await this.userRepository.validation(jwtDecoded._id);
    await this.activationRepository.deleteOne({ activationId });
    await this.userRepository.findByIdAndUpdate({ _id: toId(jwtDecoded._id) }, { isConfirmEmail: true });

    return { success: true };
  }

  async confirmUpdateEmail(activationId: string) {
    const activation = await this.activationRepository.validateActivation(activationId);

    // check expires
    const jwtDecoded = this.jwtService.verifyNewEmailActivationToken(activation.token) as VerifyNewEmailDto;

    await this.userRepository.findByIdAndUpdate(toId(activation.userId), { $set: { email: jwtDecoded.email } });
    await this.activationRepository.deleteOne({ activationId });

    return { success: true };
  }

  async regularDataCleanup() {
    const filesForDelete = await this.activationRepository.regularDataCleanup(hoursData + 1);
    return filesForDelete;
  }
}
