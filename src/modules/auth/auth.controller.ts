import { Body, Controller, Get, Patch, Post, Req, Res, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { EEnvVariables } from 'src/common/constants/env-variables.enum';
import { EErrors } from 'src/common/constants/errors.enum';
import { OperationIds } from 'src/common/constants/operations-ids.enum';
import { ComposeOthersErrorsDecorator } from 'src/common/decorators/compose-others-errors.decorator';

import { AUTH_TAG } from './../../common/constants/tags';
import { ComposeErrorsDecorator } from './../../common/decorators/compose-errors.decorator';
import { CommonSuccessResDto } from './../../common/dto/common-success-res.dto';
import { AuthService } from './auth.service';
import { AuthLoginResDto } from './dto/auth-login-res.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserReqDto } from './dto/login-user-req.dto';
import { RstrPassEmailReqDto } from './dto/rstr-pass-email-req.dto';
import { UpdateRstrPassReqDto } from './dto/update-rstr-pass-req.dto';
import { ISocialAuth } from './interfaces/social-auth-req.interface';

@ApiTags(AUTH_TAG)
@Controller(AUTH_TAG)
@ComposeErrorsDecorator()
@ComposeOthersErrorsDecorator(EErrors.NOT_FOUND_ERROR)
export class AuthController {
  private readonly clientUrl: string;

  constructor(private readonly authService: AuthService, private readonly configService: ConfigService) {
    this.clientUrl = this.configService.get(EEnvVariables.CLIENT_URL);
  }

  /**
   * signup
   * @returns {Promise<CommonSuccessResDto>}
   */
  @Post('/signup')
  @ApiOperation({
    description: 'creation user',
    operationId: OperationIds.SIGNUP,
  })
  @ApiCreatedResponse({
    status: 200,
    description: 'OK',
    type: CommonSuccessResDto,
  })
  async signup(@Body() createUserDto: CreateUserDto): Promise<CommonSuccessResDto> {
    return await this.authService.signup(createUserDto);
  }

  /**
   * login
   * @returns {Promise<CommonSuccessResDto>}
   */
  @Post('/login')
  @ApiOperation({
    description: 'login user',
    operationId: OperationIds.LOGIN,
  })
  @ApiOkResponse({
    type: AuthLoginResDto,
  })
  async login(
    @Body() LoginUseReqDto: LoginUserReqDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<AuthLoginResDto> {
    const user = await this.authService.login(LoginUseReqDto);

    res.cookie('refreshToken', user.refreshToken, {
      httpOnly: true,
    });
    delete user.refreshToken;

    return user;
  }

  /**
   * logout
   * @returns {Promise<CommonSuccessResDto>}
   */
  @Post('/logout')
  @ApiOperation({
    description: 'logout user',
    operationId: OperationIds.LOGOUT,
  })
  @ApiOkResponse({
    type: CommonSuccessResDto,
  })
  async logout(@Req() req: Request, @Res({ passthrough: true }) res: Response): Promise<CommonSuccessResDto> {
    const refreshToken = req.cookies['refreshToken'];
    await this.authService.logout(refreshToken);
    res.clearCookie('refreshToken');
    return { success: true };
  }

  /**
   * rstrPass - restore password
   * send restore password to email
   * @returns {Promise<CommonSuccessResDto>}
   */
  @Post('restore-password')
  @ApiOperation({
    summary: 'restore password send',
    description: 'send restore password to email',
    operationId: OperationIds.SEND_RESTORE_PASS,
  })
  @ApiOkResponse({ type: CommonSuccessResDto })
  async rstrPassEmail(@Body() rstrPassEmailReqDto: RstrPassEmailReqDto): Promise<CommonSuccessResDto> {
    return await this.authService.rstrPassEmail(rstrPassEmailReqDto);
  }

  /**
   * update password by token from email
   * @returns {Promise<CommonSuccessResDto>}
   */
  @Patch('restore-password')
  @ApiOperation({
    summary: 'restore pass by token',
    description: 'restore password by token from email',
    operationId: OperationIds.UPDATE_RESTORED_PASS,
  })
  @ApiResponse({ status: 200, type: CommonSuccessResDto, description: 'OK' })
  async updateRsrtPass(@Body() updateRstrPassReqDto: UpdateRstrPassReqDto): Promise<CommonSuccessResDto> {
    return await this.authService.updateRstrPass(updateRstrPassReqDto);
  }

  /**
   * Google login
   */
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {
    return 'Google auth';
  }

  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req: ISocialAuth, @Res() res: Response) {
    const email = req.user.email;
    const user = await this.authService.socialAuth(email);

    res.cookie('refreshToken', user.refreshToken, {
      httpOnly: true,
    });
    return res.redirect(`${this.clientUrl}/social-auth?accessToken=${user.accessToken}`);
  }

  /**
   * Facebook login
   */
  @Get('/facebook')
  @UseGuards(AuthGuard('facebook'))
  async facebookLogin(): Promise<any> {
    return 'Facebook auth';
  }

  @Get('/facebook/redirect')
  @UseGuards(AuthGuard('facebook'))
  async facebookLoginRedirect(@Req() req: ISocialAuth, @Res() res: Response): Promise<any> {
    const email = req.user.email;
    const user = await this.authService.socialAuth(email);

    res.cookie('refreshToken', user.refreshToken, {
      httpOnly: true,
    });
    return res.redirect(`${this.clientUrl}/social-auth?accessToken=${user.accessToken}`);
  }
}
