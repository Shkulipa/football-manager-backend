import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';
import { ErrorDto } from 'src/common/dto/error.dto';

import { CreateUserDto } from './dto/createUser.dto';
import { LoginUserDto } from './dto/loginUser.dto';
import { SignupDto } from './dto/signup.dto';
import { IsConfirmPassword } from './guards/isConfirmPassword';
import { UserService } from './user.service';

@ApiTags('auth')
@Controller('/auth')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiCreatedResponse({
    description: 'User success created.',
    type: SignupDto,
  })
  @ApiBadRequestResponse({
    description: 'Validation Failure.',
    type: ErrorDto,
  })
  @Post('/signup')
  @UsePipes(new ValidationPipe())
  @UseGuards(IsConfirmPassword)
  async signup(@Body() createUserDto: CreateUserDto): Promise<SignupDto> {
    return await this.userService.signup(createUserDto);
  }

  @ApiCreatedResponse({
    description: 'User success created.',
  })
  @ApiBadRequestResponse({
    description: 'Validation Failure.',
    type: ErrorDto,
  })
  @Post('/signin')
  @UsePipes(new ValidationPipe())
  async signin(
    @Body() loginUserDto: LoginUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const userData = await this.userService.signin(loginUserDto);
    res.cookie('refreshToken', userData.refreshToken, {
      httpOnly: true,
    });

    delete userData.refreshToken;
    return userData;
  }

  @Get('/activate/:activationId')
  async activate(@Param('activationId') activationId: string) {
    const result = await this.userService.activate(activationId);
    return result;
  }
}
