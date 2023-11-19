import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ManyRequestsMiddleware implements NestMiddleware {
  private requestCounts = new Map<string, number>();

  use(req: Request, res: Response, next: NextFunction) {
    const ip = req.ip;

    const countAvailableRequests = 20;
    if (!this.requestCounts.has(ip)) {
      this.requestCounts.set(ip, 1);
    } else {
      const count = this.requestCounts.get(ip);
      if (count >= countAvailableRequests) {
        throw new HttpException('Too Many Requests, please try later', HttpStatus.TOO_MANY_REQUESTS);
      }
      this.requestCounts.set(ip, count + 1);
    }

    const seconds = 10;
    setTimeout(() => {
      this.requestCounts.set(ip, this.requestCounts.get(ip) - 1);
    }, 1000 * seconds);

    next();
  }
}
