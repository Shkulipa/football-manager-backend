import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EErrors } from 'src/common/constants/errors.enum';
import { FileImages } from 'src/common/constants/file.constants';
import { OperationIds } from 'src/common/constants/operations-ids.enum';
import { CREATE_USER_TEAM } from 'src/common/constants/tags';
import { ComposeAuthDecorator } from 'src/common/decorators/compose-auth.decorator';
import { ComposeErrorsDecorator } from 'src/common/decorators/compose-errors.decorator';
import { ComposeOthersErrorsDecorator } from 'src/common/decorators/compose-others-errors.decorator';
import { User } from 'src/common/decorators/user.decorator';
import { CommonPathReqDto } from 'src/common/dto/common-path-req.dto';
import { CommonSuccessResDto } from 'src/common/dto/common-success-res.dto';
import { uploadFilesLimits } from 'src/common/helpers/files.helper';
import { IUserData } from 'src/common/interfaces/user-data.interfaces';

import { CreateUserTeamReqDto } from './dto/create-user-team-req.dto';
import { GetUserTeamResDto } from './dto/get-user-team-res.dto';
import { UpdateUserTeamReqDto } from './dto/update-user-team-req.dto';
import { UserTeamService } from './user-team.service';

const userTeamImgField = 'userTeamImgField';

@ApiTags(CREATE_USER_TEAM)
@Controller(CREATE_USER_TEAM)
@ComposeErrorsDecorator()
export class UserTeamController {
  constructor(private readonly userTeamService: UserTeamService) {}

  /**
   * create user team
   * @returns {Promise<CommonSuccessResDto>}
   */
  @Post()
  @ApiOperation({
    description: 'create user team',
    operationId: OperationIds.USER_TEAM_CREATE,
  })
  @ApiResponse({ status: 200, type: CommonSuccessResDto, description: 'OK' })
  @ApiConsumes('multipart/form-data')
  @ComposeAuthDecorator()
  @UseInterceptors(FileInterceptor(userTeamImgField, uploadFilesLimits(FileImages, 1)))
  create(
    @Body() createUserTeamDto: CreateUserTeamReqDto,
    @UploadedFile() file: Express.Multer.File,
    @User() user: IUserData,
  ): Promise<CommonSuccessResDto> {
    return this.userTeamService.create(user, createUserTeamDto, file);
  }

  /**
   * get team squad, and what a user manages this team
   * @returns {Promise<GetUserTeamResDto>}
   */
  @Get(':id')
  @ApiOperation({
    description: 'get team squad, and what a user manages this team',
    operationId: OperationIds.USER_TEAM_GET_BY_ID,
  })
  @ComposeOthersErrorsDecorator(EErrors.NOT_FOUND_ERROR)
  @ApiResponse({ status: 200, type: GetUserTeamResDto, description: 'OK' })
  findById(@Param() { id }: CommonPathReqDto): Promise<GetUserTeamResDto> {
    return this.userTeamService.findById(id);
  }

  /**
   * get own team
   * @returns {Promise<GetUserTeamResDto>}
   */
  @Get()
  @ApiOperation({
    description: 'get own team',
    operationId: OperationIds.USER_TEAM_GET_BY_ID,
  })
  @ComposeAuthDecorator()
  @ComposeOthersErrorsDecorator(EErrors.NOT_FOUND_ERROR)
  @ApiResponse({ status: 200, type: GetUserTeamResDto, description: 'OK' })
  getOwnTeam(@User() user: IUserData): Promise<GetUserTeamResDto> {
    return this.userTeamService.getOwnTeam(user);
  }

  /**
   * update user team
   * @returns {Promise<CommonSuccessResDto>}
   */
  @Patch(':id')
  @ApiOperation({
    description: 'update user team',
    operationId: OperationIds.USER_TEAM_UPDATE,
  })
  @ApiResponse({ status: 200, type: CommonSuccessResDto, description: 'OK' })
  @ApiConsumes('multipart/form-data')
  @ComposeAuthDecorator()
  @UseInterceptors(FileInterceptor(userTeamImgField, uploadFilesLimits(FileImages, 1)))
  update(
    @Param() { id }: CommonPathReqDto,
    @Body() updateUserTeamDto: UpdateUserTeamReqDto,
    @User() user: IUserData,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<CommonSuccessResDto> {
    return this.userTeamService.update(id, user, updateUserTeamDto, file);
  }

  /**
   * delete user team
   * @returns {Promise<CommonSuccessResDto>}
   */
  @Delete(':id')
  @ApiOperation({
    description: 'delete user team',
    operationId: OperationIds.USER_TEAM_DELETE,
  })
  @ApiResponse({ status: 200, type: CommonSuccessResDto, description: 'OK' })
  @ComposeAuthDecorator()
  delete(@Param() { id }: CommonPathReqDto, @User() user: IUserData): Promise<CommonSuccessResDto> {
    return this.userTeamService.delete(id, user);
  }
}
