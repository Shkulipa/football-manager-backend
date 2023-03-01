import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  UseGuards,
  Get,
  Param,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
import { IsConfirmPassword } from './guards/isConfirmPassword';
import { LoginUserDto } from './dto/loginUser.dto';
import { Response } from 'express';

@Controller('/auth')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/signup')
  @UsePipes(new ValidationPipe())
  @UseGuards(IsConfirmPassword)
  signup(@Body() createUserDto: CreateUserDto) {
    return this.userService.signup(createUserDto);
  }

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
