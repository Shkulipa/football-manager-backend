import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-facebook';
import { EEnvVariables } from 'src/common/constants/env-variables.enum';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor(private readonly configService: ConfigService) {
    super({
      clientID: configService.get<string>(EEnvVariables.AUTH_CLIENT_ID_FACEBOOK),
      clientSecret: configService.get<string>(EEnvVariables.AUTH_CLIENT_SECRET_FACEBOOK),
      callbackURL: `${configService.get<string>(EEnvVariables.SERVER_URL)}/api/auth/facebook/redirect`,
      scope: 'email',
      profileFields: ['emails', 'name'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (error: any, user?: any, info?: any) => void,
  ) {
    const { emails } = profile;
    const user = {
      email: emails[0].value,
    };

    done(null, user);
  }
}
