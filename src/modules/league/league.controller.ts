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
import { LEAGUE_TAG } from 'src/common/constants/tags';
import { EUserRoles } from 'src/common/constants/user-roles.enum';
import { ComposeAuthDecorator } from 'src/common/decorators/compose-auth.decorator';
import { ComposeErrorsDecorator } from 'src/common/decorators/compose-errors.decorator';
import { ComposeOthersErrorsDecorator } from 'src/common/decorators/compose-others-errors.decorator';
import { CommonPathReqDto } from 'src/common/dto/common-path-req.dto';
import { CommonSuccessResDto } from 'src/common/dto/common-success-res.dto';
import { uploadFilesLimits } from 'src/common/helpers/files.helper';

import { CreateLeagueReqDto } from './dto/create-league-req.dto';
import { GetLeagueByIdResDto } from './dto/get-league-by-id-res.dto';
import { GetLeaguesResDto } from './dto/get-leagues-res.dto';
import { QueryGetLeaguesReqDto } from './dto/query-get-leagues-req.dto';
import { UpdateLeagueReqDto } from './dto/update-league-req.dto';
import { LeagueService } from './league.service';

const leagueImgField = 'imgLeague';

@ApiTags(LEAGUE_TAG)
@Controller(LEAGUE_TAG)
@ComposeErrorsDecorator()
export class LeagueController {
  constructor(private readonly leagueService: LeagueService) {}

  /**
   * get leagues
   * @returns {Promise<GetLeaguesResDto[]>}
   */
  @Get('/')
  @ApiOperation({
    description: 'get leagues',
    operationId: OperationIds.LEAGUE_GET_MANY,
  })
  @ApiResponse({ status: 200, type: GetLeaguesResDto, description: 'OK' })
  async findAll(@Query() query: QueryGetLeaguesReqDto): Promise<GetLeaguesResDto[]> {
    return await this.leagueService.findAll(query);
  }

  /**
   * get league by id
   * @returns {Promise<LeagueDbDto>}
   */
  @Get('/:id')
  @ApiOperation({
    description: 'get league by id',
    operationId: OperationIds.LEAGUE_GET_BY_ID,
  })
  @ApiResponse({ status: 200, type: GetLeagueByIdResDto, description: 'OK' })
  @ComposeOthersErrorsDecorator(EErrors.NOT_FOUND_ERROR)
  async findById(@Param() { id }: CommonPathReqDto): Promise<GetLeagueByIdResDto> {
    return await this.leagueService.findById(id);
  }

  @Post('/test')
  @ComposeAuthDecorator(EUserRoles.LEAGUE_CREATE)
  @ComposeOthersErrorsDecorator(EErrors.FORBIDDEN_ERROR, EErrors.NOT_FOUND_ERROR)
  async createasd(): Promise<string> {
    return 'test';
  }

  /**
   * create league
   * @returns {Promise<CommonSuccessResDto>}
   */
  @Post('/')
  @ApiOperation({
    description: 'create league',
    operationId: OperationIds.LEAGUE_CREATE,
  })
  @ApiConsumes('multipart/form-data')
  @ComposeAuthDecorator(EUserRoles.LEAGUE_CREATE)
  @UseInterceptors(FileInterceptor(leagueImgField, uploadFilesLimits(FileImages, 1)))
  @ApiResponse({ status: 200, type: CommonSuccessResDto, description: 'OK' })
  @ComposeOthersErrorsDecorator(EErrors.FORBIDDEN_ERROR, EErrors.NOT_FOUND_ERROR)
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createLeagueDto: CreateLeagueReqDto,
  ): Promise<CommonSuccessResDto> {
    return this.leagueService.create(file, createLeagueDto);
  }

  /**
   * update league
   * @returns {Promise<CommonSuccessResDto>}
   */
  @Patch('/:id')
  @ApiOperation({
    description: 'update league',
    operationId: OperationIds.LEAGUE_UPDATE,
  })
  @ApiConsumes('multipart/form-data')
  @ComposeAuthDecorator(EUserRoles.LEAGUE_UPDATE)
  @UseInterceptors(FileInterceptor(leagueImgField, uploadFilesLimits(FileImages, 1)))
  @ApiResponse({ status: 200, type: CommonSuccessResDto, description: 'OK' })
  @ComposeOthersErrorsDecorator(EErrors.FORBIDDEN_ERROR, EErrors.NOT_FOUND_ERROR)
  async update(
    @Param() { id }: CommonPathReqDto,
    @UploadedFile() file: Express.Multer.File,
    @Body() updateCountryDto: UpdateLeagueReqDto,
  ): Promise<CommonSuccessResDto> {
    return this.leagueService.update(id, updateCountryDto, file);
  }

  /**
   * delete league
   * @returns {Promise<CommonSuccessResDto>}
   */
  @Delete('/:id')
  @ApiOperation({
    description: 'delete league',
    operationId: OperationIds.LEAGUE_DELETE,
  })
  @ComposeAuthDecorator(EUserRoles.LEAGUE_DELETE)
  @UseInterceptors(FileInterceptor(leagueImgField, uploadFilesLimits(FileImages, 1)))
  @ApiResponse({ status: 200, type: CommonSuccessResDto, description: 'OK' })
  @ComposeOthersErrorsDecorator(EErrors.FORBIDDEN_ERROR, EErrors.NOT_FOUND_ERROR)
  delete(@Param() { id }: CommonPathReqDto): Promise<CommonSuccessResDto> {
    return this.leagueService.delete(id);
  }
}
