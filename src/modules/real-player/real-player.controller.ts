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
import { REAL_PLAYER_TAG } from 'src/common/constants/tags';
import { EUserRoles } from 'src/common/constants/user-roles.enum';
import { ComposeAuthDecorator } from 'src/common/decorators/compose-auth.decorator';
import { ComposeErrorsDecorator } from 'src/common/decorators/compose-errors.decorator';
import { ComposeOthersErrorsDecorator } from 'src/common/decorators/compose-others-errors.decorator';
import { CommonPathReqDto } from 'src/common/dto/common-path-req.dto';
import { CommonSuccessResDto } from 'src/common/dto/common-success-res.dto';
import { uploadFilesLimits } from 'src/common/helpers/files.helper';

import { CreateRealPlayerReqDto } from './dto/create-real-player-req.dto';
import { GetRealPlayerResDto } from './dto/get-real-player-res.dto';
import { GetRealPlayersResDto } from './dto/get-real-players-res.dto';
import { QueryGetRealPlayersReqDto } from './dto/query-get-real-players-req.dto';
import { UpdateRealPlayerReqDto } from './dto/update-real-player-req.dto';
import { RealPlayerService } from './real-player.service';

const playerPhotoField = 'playerPhotoField';

@ApiTags(REAL_PLAYER_TAG)
@Controller(REAL_PLAYER_TAG)
@ComposeErrorsDecorator()
export class RealPlayerController {
  constructor(private readonly realPlayerService: RealPlayerService) {}

  /**
   * get real players
   * @returns {Promise<GetRealPlayersResDto>}
   */
  @Get('/')
  @ApiOperation({
    description: 'get real players',
    operationId: OperationIds.REAL_PLAYER_GET_MANY,
  })
  @ApiResponse({ status: 200, type: GetRealPlayersResDto, description: 'OK' })
  async findAll(@Query() query: QueryGetRealPlayersReqDto): Promise<GetRealPlayersResDto> {
    return this.realPlayerService.findAll(query);
  }

  /**
   * get real player
   * @returns {Promise<GetRealPlayerResDto>}
   */
  @Get(':id')
  @ApiOperation({
    description: 'get real player',
    operationId: OperationIds.REAL_PLAYER_GET_BY_ID,
  })
  @ApiResponse({ status: 200, type: GetRealPlayerResDto, description: 'OK' })
  @ComposeOthersErrorsDecorator(EErrors.NOT_FOUND_ERROR)
  async findById(@Param() { id }: CommonPathReqDto): Promise<GetRealPlayerResDto> {
    return await this.realPlayerService.findById(id);
  }

  /**
   * create real player
   * @returns {Promise<CommonSuccessResDto>}
   */
  @Post()
  @ApiOperation({
    description: 'create real player',
    operationId: OperationIds.REAL_PLAYER_CREATE,
  })
  @ApiConsumes('multipart/form-data')
  @ComposeAuthDecorator(EUserRoles.REAL_PLAYER_CREATE)
  @UseInterceptors(FileInterceptor(playerPhotoField, uploadFilesLimits(FileImages, 1)))
  @ApiResponse({ status: 200, type: CommonSuccessResDto, description: 'OK' })
  @ComposeOthersErrorsDecorator(EErrors.FORBIDDEN_ERROR, EErrors.NOT_FOUND_ERROR)
  async create(
    @Body() createPlayerDto: CreateRealPlayerReqDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<CommonSuccessResDto> {
    return await this.realPlayerService.create(createPlayerDto, file);
  }

  /**
   * update real player
   * @returns {Promise<CommonSuccessResDto>}
   */
  @Patch(':id')
  @ApiOperation({
    description: 'update real player',
    operationId: OperationIds.REAL_PLAYER_UPDATE,
  })
  @ApiConsumes('multipart/form-data')
  @ComposeAuthDecorator(EUserRoles.REAL_PLAYER_CREATE)
  @UseInterceptors(FileInterceptor(playerPhotoField, uploadFilesLimits(FileImages, 1)))
  @ApiResponse({ status: 200, type: CommonSuccessResDto, description: 'OK' })
  @ComposeOthersErrorsDecorator(EErrors.FORBIDDEN_ERROR, EErrors.NOT_FOUND_ERROR)
  async update(
    @Param() { id }: CommonPathReqDto,
    @Body() updateRealPlayerReqDto: UpdateRealPlayerReqDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<CommonSuccessResDto> {
    return await this.realPlayerService.update(id, updateRealPlayerReqDto, file);
  }

  /**
   * delete real player
   * @returns {Promise<CommonSuccessResDto>}
   */
  @Delete(':id')
  @ApiOperation({
    description: 'delete real player',
    operationId: OperationIds.REAL_PLAYER_DELETE,
  })
  @ComposeAuthDecorator(EUserRoles.REAL_PLAYER_CREATE)
  @ApiResponse({ status: 200, type: CommonSuccessResDto, description: 'OK' })
  @ComposeOthersErrorsDecorator(EErrors.FORBIDDEN_ERROR, EErrors.NOT_FOUND_ERROR)
  async delete(@Param() { id }: CommonPathReqDto): Promise<CommonSuccessResDto> {
    return this.realPlayerService.delete(id);
  }
}
