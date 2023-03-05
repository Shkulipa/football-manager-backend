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
import {
  ApiTags,
  ApiCreatedResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import { ErrorDto } from 'src/common/dto/error.dto';
import { SignupDto } from './dto/signup.dto';

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
