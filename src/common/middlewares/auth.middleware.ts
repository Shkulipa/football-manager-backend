import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { NextFunction, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { pick } from 'lodash';
import { ExpressRequestInterface } from 'src/common/interfaces/expressRequest.interface';
import { IUserJtwData } from 'src/common/interfaces/userJwtData.interfaces';
import { UserService } from 'src/models/user/user.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
  ) {}

  async use(req: ExpressRequestInterface, res: Response, next: NextFunction) {
    if (!req.headers.authorization) {
      req.user = null;
      next();
      return;
    }

    const token = req.headers.authorization.split(' ')[1];
    const SECRET_ACCESS = this.configService.get<string>('SECRET_ACCESS');

    try {
      const { _id } = verify(token, SECRET_ACCESS) as IUserJtwData;
      const user = await this.userService.findById(String(_id));
      const userData = {
        ...pick(user, ['_id', 'email', 'username', 'roles']),
      };
      req.user = userData;
    } catch (err) {
      req.user = null;
    }

    next();
  }
}
