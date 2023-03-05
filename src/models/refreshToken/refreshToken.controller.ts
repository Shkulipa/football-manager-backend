import { Controller, Post, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { RefreshTokenService } from './refreshToken.service';

@ApiTags('Refresh token')
@Controller('token')
export class RefreshTokenController {
  constructor(private readonly refreshTokenService: RefreshTokenService) {}

  @Post('/refresh')
  refresh(@Req() req: Request) {
    return this.refreshTokenService.refresh(req.cookies.refreshToken);
  }
}
