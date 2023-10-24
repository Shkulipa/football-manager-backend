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
import { ApiConsumes, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
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
import { GetRealTeamsFullResDto } from './dto/get-teams-full-info.res.dto';
import { QueryGetRealTeamsReqDto } from './dto/query-get-real-teams-req.dto';
import { RealTeamShortResDto } from './dto/real-team-short-info-res.dto';
import { UpdateRealTeamReqDto } from './dto/update-real-team-req.dto';
import { RealTeamService } from './real-team.service';

const realTeamImgField = 'realTeamImg';

@ApiTags(REAL_TEAM_TAG)
@Controller(REAL_TEAM_TAG)
export class RealTeamController {
  constructor(private readonly realTeamService: RealTeamService) {}

  /**
   * get all real teams with short data(without squad, using in teams, single match)
   * @returns {Promise<RealTeamShortResDto[]>}
   */
  @Get('/short-info')
  @ApiOperation({
    description:
      'get all real teams with short data(without squads(main, bench), using in pages(on front): teams, single match)',
    operationId: OperationIds.REAL_TEAM_GET_MANY,
  })
  @ApiResponse({ status: 200, type: [RealTeamShortResDto], description: 'OK' })
  async getTeamsShortInfo(): Promise<RealTeamShortResDto[]> {
    return await this.realTeamService.getTeamsShortInfo();
  }

  /**
   * get real teams full data(with squads)
   * @returns {Promise<GetRealTeamsFullResDto>}
   */
  @Get('/full-info')
  @ApiOperation({
    description: 'get real teams full data(with squads)',
    operationId: OperationIds.REAL_TEAM_GET_MANY_INFO,
  })
  @ApiResponse({ status: 200, type: GetRealTeamsFullResDto, description: 'OK' })
  async getTeamsFullInfo(@Query() query: QueryGetRealTeamsReqDto): Promise<GetRealTeamsFullResDto> {
    return await this.realTeamService.getTeamsFullInfo(query);
  }

  /**
   * get real team
   * @returns {Promise<GetRealTeamsFullResDto>}
   */
  @Get('/:id')
  @ApiOperation({
    description: 'get real team',
    operationId: OperationIds.REAL_TEAM_GET_BY_ID,
  })
  @ApiResponse({ status: 200, type: GetRealTeamsFullResDto, description: 'OK' })
  @ComposeOthersErrorsDecorator(EErrors.NOT_FOUND_ERROR)
  async findById(@Param() { id }: CommonPathReqDto): Promise<GetRealTeamsFullResDto> {
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
  @ApiConsumes('multipart/form-data')
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
