import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy, VerifyCallback } from 'passport-google-oauth20';
import { EEnvVariables } from 'src/common/constants/env-variables.enum';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly configService: ConfigService) {
    super({
      clientID: configService.get<string>(EEnvVariables.AUTH_CLIENT_ID_GOOGLE),
      clientSecret: configService.get<string>(EEnvVariables.AUTH_CLIENT_SECRET_GOOGLE),
      callbackURL: `${configService.get<string>(EEnvVariables.SERVER_URL)}/auth/google/redirect`,
      scope: ['email', 'profile'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) {
    const { emails } = profile;
    const user = {
      email: emails[0].value,
    };

    done(null, user);
  }
}
