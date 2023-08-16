import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EErrors } from 'src/common/constants/errors.enum';
import { FileImages } from 'src/common/constants/file.constants';
import { OperationIds } from 'src/common/constants/operations-ids.enum';
import { REAL_TEAM_TAG } from 'src/common/constants/tags';
import { EUserRoles } from 'src/common/constants/user-roles.enum';
import { ComposeAuthDecorator } from 'src/common/decorators/compose-auth.decorator';
import { ComposeOthersErrorsDecorator } from 'src/common/decorators/compose-others-errors.decorator';
import { CommonPathReqDto } from 'src/common/dto/common-path-req.dto';
import { CommonSuccessResDto } from 'src/common/dto/common-success-res.dto';
import { uploadFilesLimits } from 'src/common/helpers/files.helper';

import { CreateRealTeamReqDto } from './dto/create-real-team-req.dto';
import { GetRealTeamResDto } from './dto/get-real-team-res.dto';
import { GetRealTeamsResDto } from './dto/get-real-teams-res.dto';
import { QueryGetRealTeamsReqDto } from './dto/query-get-real-teams-req.dto';
import { RealTeamDbDto } from './dto/real-team.db.dto';
import { UpdateRealTeamReqDto } from './dto/update-real-team-req.dto';
import { RealTeamService } from './real-team.service';

const realTeamImgField = 'realTeamImg';

@ApiTags(REAL_TEAM_TAG)
@Controller(REAL_TEAM_TAG)
export class RealTeamController {
  constructor(private readonly realTeamService: RealTeamService) {}

  /**
   * get real teams
   * @returns {Promise<GetRealTeamsResDto>}
   */
  @Get()
  @ApiOperation({
    description: 'get real teams',
    operationId: OperationIds.REAL_TEAM_GET_MANY,
  })
  @ApiResponse({ status: 200, type: GetRealTeamsResDto, description: 'OK' })
  async findAll(@Query() query: QueryGetRealTeamsReqDto): Promise<GetRealTeamsResDto> {
    return await this.realTeamService.findAll(query);
  }

  /**
   * get real team
   * @returns {Promise<RealTeamDbDto>}
   */
  @Get('/:id')
  @ApiOperation({
    description: 'get real team',
    operationId: OperationIds.REAL_TEAM_GET_BY_ID,
  })
  @ApiResponse({ status: 200, type: GetRealTeamResDto, description: 'OK' })
  @ComposeOthersErrorsDecorator(EErrors.NOT_FOUND_ERROR)
  async findById(@Param() { id }: CommonPathReqDto): Promise<RealTeamDbDto> {
    return await this.realTeamService.findById(id);
  }

  /**
   * create real team
   * @returns {Promise<CommonSuccessResDto>}
   */
  @Post()
  @ApiOperation({
    description: 'delete league',
    operationId: OperationIds.REAL_TEAM_CREATE,
  })
  @ComposeAuthDecorator(EUserRoles.COUNTRY_CREATE)
  @UseInterceptors(FileInterceptor(realTeamImgField, uploadFilesLimits(FileImages, 1)))
  @ApiResponse({ status: 200, type: CommonSuccessResDto, description: 'OK' })
  @ComposeOthersErrorsDecorator(EErrors.FORBIDDEN_ERROR, EErrors.NOT_FOUND_ERROR)
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createRealTeamDto: CreateRealTeamReqDto,
  ): Promise<CommonSuccessResDto> {
    return await this.realTeamService.create(file, createRealTeamDto);
  }

  /**
   * update real team
   * @returns {Promise<CommonSuccessResDto>}
   */
  @Patch('/:id')
  @ApiOperation({
    description: 'delete real team',
    operationId: OperationIds.REAL_TEAM_UPDATE,
  })
  @ComposeAuthDecorator(EUserRoles.COUNTRY_CREATE)
  @UseInterceptors(FileInterceptor(realTeamImgField, uploadFilesLimits(FileImages, 1)))
  @ApiResponse({ status: 200, type: CommonSuccessResDto, description: 'OK' })
  @ComposeOthersErrorsDecorator(EErrors.FORBIDDEN_ERROR, EErrors.NOT_FOUND_ERROR)
  async update(
    @Param() { id }: CommonPathReqDto,
    @UploadedFile() file: Express.Multer.File,
    @Body() updateRealTeamDto: UpdateRealTeamReqDto,
  ): Promise<CommonSuccessResDto> {
    return await this.realTeamService.update(file, updateRealTeamDto, id);
  }

  /**
   * delete real team
   * @returns {Promise<CommonSuccessResDto>}
   */
  @Delete('/:id')
  @ApiOperation({
    description: 'delete real team',
    operationId: OperationIds.REAL_TEAM_DELETE,
  })
  @ComposeAuthDecorator(EUserRoles.COUNTRY_CREATE)
  @ApiResponse({ status: 200, type: CommonSuccessResDto, description: 'OK' })
  @ComposeOthersErrorsDecorator(EErrors.FORBIDDEN_ERROR, EErrors.NOT_FOUND_ERROR)
  async delete(@Param() { id }: CommonPathReqDto): Promise<CommonSuccessResDto> {
    return await this.realTeamService.delete(id);
  }
}
