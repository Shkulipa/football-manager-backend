import { Body, Controller, Patch } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EErrors } from 'src/common/constants/errors.enum';
import { OperationIds } from 'src/common/constants/operations-ids.enum';
import { USER_TAG } from 'src/common/constants/tags';
import { ComposeAuthDecorator } from 'src/common/decorators/compose-auth.decorator';
import { ComposeErrorsDecorator } from 'src/common/decorators/compose-errors.decorator';
import { ComposeOthersErrorsDecorator } from 'src/common/decorators/compose-others-errors.decorator';
import { User } from 'src/common/decorators/user.decorator';
import { CommonSuccessResDto } from 'src/common/dto/common-success-res.dto';
import { IUserData } from 'src/common/interfaces/user-data.interfaces';

import { UpdateEmailReqDto } from './dto/update-email-req.dto';
import { UpdatePasswordReqDto } from './dto/update-password-req.dto';
import { UpdateUsernameReqDto } from './dto/update-username-req.dto';
import { UserService } from './user.service';

@ApiTags(USER_TAG)
@Controller(USER_TAG)
@ComposeErrorsDecorator()
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * update password
   * @returns {Promise<CommonSuccessResDto>}
   */
  @Patch('/password')
  @ApiOperation({
    description: 'update password',
    operationId: OperationIds.USER_UPDATE_PASSWORD,
  })
  @ApiResponse({ status: 200, type: CommonSuccessResDto, description: 'OK' })
  @ComposeAuthDecorator()
  @ComposeOthersErrorsDecorator(EErrors.FORBIDDEN_ERROR, EErrors.NOT_FOUND_ERROR)
  async updatePassword(
    @User() user: IUserData,
    @Body() updatePasswordReqDto: UpdatePasswordReqDto,
  ): Promise<CommonSuccessResDto> {
    return await this.userService.updatePassword(user, updatePasswordReqDto);
  }

  /**
   * update username
   * @returns {Promise<CommonSuccessResDto>}
   */
  @Patch('/username')
  @ApiOperation({
    description: 'update username',
    operationId: OperationIds.USER_UPDATE_USERNAME,
  })
  @ApiResponse({ status: 200, type: CommonSuccessResDto, description: 'OK' })
  @ComposeAuthDecorator()
  @ComposeOthersErrorsDecorator(EErrors.NOT_FOUND_ERROR)
  async updateUsername(
    @User() user: IUserData,
    @Body() updateUsernameReqDto: UpdateUsernameReqDto,
  ): Promise<CommonSuccessResDto> {
    return await this.userService.updateUsername(user, updateUsernameReqDto);
  }

  /**
   * update email
   * @returns {Promise<CommonSuccessResDto>}
   */
  @Patch('/email')
  @ApiOperation({
    description: 'update email',
    operationId: OperationIds.USER_UPDATE_EMAIL,
  })
  @ApiResponse({ status: 200, type: CommonSuccessResDto, description: 'OK' })
  @ComposeAuthDecorator()
  @ComposeOthersErrorsDecorator(EErrors.NOT_FOUND_ERROR)
  async updateEmail(
    @User() user: IUserData,
    @Body() updateEmailReqDto: UpdateEmailReqDto,
  ): Promise<CommonSuccessResDto> {
    return await this.userService.updateEmail(user, updateEmailReqDto);
  }
}
