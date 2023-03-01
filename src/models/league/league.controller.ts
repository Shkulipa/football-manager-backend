import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
  UploadedFile,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { LeagueService } from './league.service';
import { CreateLeagueDto } from './dto/createLeague.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Roles } from 'src/common/decorators/roles.decorator';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { EUserRoles } from 'src/common/interfaces/userRoles.interfaces';
import { fileTypeGuard } from 'src/common/guards/fileType.guard';
import { maxSizeMB, fileTypes } from 'src/common/constants/file.constants';
import { fileSizeGuard } from 'src/common/guards/fileSize.guard';
import { QueryParams } from 'src/common/decorators/query.decorator';
import { IParsedQuery } from 'src/common/interfaces/query.interfaces';
import { IsObjectIdPipe } from 'src/common/pipes/isObjectId.pipe';
import { UpdateLeagueDto } from './dto/updateLeague.dto';
import { CountryService } from '../country/country.service';

const leagueImgField = 'imgLeague';

@Controller('/league')
export class LeagueController {
  constructor(
    private readonly leagueService: LeagueService,
    private readonly countryService: CountryService,
  ) {}

  @Get('/')
  findAll(@QueryParams() query: IParsedQuery) {
    return this.leagueService.findAll(query);
  }

  @Get('/:id')
  findById(@Param('id', new IsObjectIdPipe()) id: string) {
    return this.leagueService.findById(id);
  }

  @Post('/')
  @Roles(EUserRoles.LEAGUE_CREATE)
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  @UseInterceptors(FileInterceptor(leagueImgField))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createLeagueDto: CreateLeagueDto,
  ) {
    await this.countryService.findById(createLeagueDto.countryId);

    if (!file)
      throw new HttpException("File wasn't provided", HttpStatus.BAD_REQUEST);
    fileSizeGuard(file.size, maxSizeMB);
    fileTypeGuard(file.mimetype, fileTypes);

    return this.leagueService.create(file, createLeagueDto);
  }

  @Patch('/:id')
  @Roles(EUserRoles.LEAGUE_UPDATE)
  @UseGuards(AuthGuard, RolesGuard)
  @UsePipes(new ValidationPipe())
  @UseInterceptors(FileInterceptor(leagueImgField))
  async update(
    @Param('id', new IsObjectIdPipe()) id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() updateCountryDto: UpdateLeagueDto,
  ) {
    await this.countryService.findById(updateCountryDto.countryId);

    if (file) {
      fileSizeGuard(file.size, maxSizeMB);
      fileTypeGuard(file.mimetype, fileTypes);
    }
    return this.leagueService.update(file, updateCountryDto, id);
  }

  @Delete('/:id')
  @Roles(EUserRoles.LEAGUE_DELETE)
  @UseGuards(AuthGuard, RolesGuard)
  delete(@Param('id', new IsObjectIdPipe()) id: string) {
    return this.leagueService.delete(id);
  }
}
