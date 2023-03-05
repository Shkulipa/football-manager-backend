import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
  HttpException,
  HttpStatus,
  UploadedFile,
} from '@nestjs/common';
import { RealTeamService } from './realTeam.service';
import { CreateRealTeamDto } from './dto/createRealTeam.dto';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { EUserRoles } from 'src/common/interfaces/userRoles.interfaces';
import { maxSizeMB, fileTypes } from 'src/common/constants/file.constants';
import { fileSizeGuard } from 'src/common/guards/fileSize.guard';
import { fileTypeGuard } from 'src/common/guards/fileType.guard';
import { QueryParams } from 'src/common/decorators/query.decorator';
import { IParsedQuery } from 'src/common/interfaces/query.interfaces';
import { IsObjectIdPipe } from 'src/common/pipes/isObjectId.pipe';
import { UpdateRealTeamDto } from './dto/updateRealTeam.dto';
import { LeagueService } from '../league/league.service';
import { pick } from 'lodash';
import { ApiTags } from '@nestjs/swagger';

const realTeamImgField = 'realTeamImg';

@ApiTags('real-team')
@Controller('/real-team')
export class RealTeamController {
  constructor(
    private readonly realTeamService: RealTeamService,
    private readonly leagueService: LeagueService,
  ) {}

  @Get()
  findAll(@QueryParams() query: IParsedQuery) {
    return this.realTeamService.findAll(query);
  }

  @Get('/:id')
  @UseGuards(AuthGuard)
  findById(@Param('id', new IsObjectIdPipe()) id: string) {
    return this.realTeamService.findById(id);
  }

  @Post()
  @Roles(EUserRoles.REAL_TEAM_CREATE)
  @UseGuards(AuthGuard, RolesGuard)
  @UsePipes(new ValidationPipe())
  @UseInterceptors(FileInterceptor(realTeamImgField))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createRealTeamDto: CreateRealTeamDto,
  ) {
    await this.leagueService.findById(createRealTeamDto.leagueId);

    if (!file)
      throw new HttpException("File wasn't provided", HttpStatus.BAD_REQUEST);
    fileSizeGuard(file.size, maxSizeMB);
    fileTypeGuard(file.mimetype, fileTypes);

    return this.realTeamService.create(file, createRealTeamDto);
  }

  @Patch('/:id')
  @Roles(EUserRoles.REAL_TEAM_UPDATE)
  @UseGuards(AuthGuard, RolesGuard)
  @UsePipes(new ValidationPipe())
  @UseInterceptors(FileInterceptor(realTeamImgField))
  async update(
    @Param('id', new IsObjectIdPipe()) id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() updateRealTeamDto: UpdateRealTeamDto,
  ) {
    const league = await this.leagueService.findById(
      updateRealTeamDto.leagueId,
    );
    const leagueId = pick(league, ['_id'])._id;

    if (file) {
      fileSizeGuard(file.size, maxSizeMB);
      fileTypeGuard(file.mimetype, fileTypes);
    }
    return this.realTeamService.update(file, updateRealTeamDto, id, leagueId);
  }

  @Delete('/:id')
  @Roles(EUserRoles.REAL_TEAM_DELETE)
  @UseGuards(AuthGuard, RolesGuard)
  delete(@Param('id', new IsObjectIdPipe()) id: string) {
    return this.realTeamService.delete(id);
  }
}
