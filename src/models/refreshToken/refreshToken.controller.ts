import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { RefreshTokenService } from './refreshToken.service';

@Controller('token')
export class RefreshTokenController {
  constructor(private readonly refreshTokenService: RefreshTokenService) {}

  @Post('/refresh')
  refresh(@Req() req: Request) {
    return this.refreshTokenService.refresh(req.cookies.refreshToken);
  }
}
