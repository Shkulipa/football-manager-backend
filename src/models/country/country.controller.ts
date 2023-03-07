import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseFilters,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { fileTypes, maxSizeMB } from 'src/common/constants/file.constants';
import { AllExceptionFilter } from 'src/common/decorators/allExceptionFilter.decorator';
import { QueryParams } from 'src/common/decorators/query.decorator';
import { Roles } from 'src/common/decorators/roles.decorator';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { fileSizeGuard } from 'src/common/guards/fileSize.guard';
import { fileTypeGuard } from 'src/common/guards/fileType.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { IParsedQuery } from 'src/common/interfaces/query.interfaces';
import { EUserRoles } from 'src/common/interfaces/userRoles.interfaces';
import { IsObjectIdPipe } from 'src/common/pipes/isObjectId.pipe';

import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/createCountry.dto';
import { UpdateCountryDto } from './dto/updateCountry.dto';

const countryImgField = 'imgCountry';

@ApiTags('country')
@UseFilters(new AllExceptionFilter())
@Controller('/country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get('/')
  getAll(@QueryParams() query: IParsedQuery) {
    return this.countryService.getAll(query);
  }

  @Get('/:id')
  findById(@Param('id', new IsObjectIdPipe()) id: string) {
    return this.countryService.findById(id);
  }

  @Post('/')
  @Roles(EUserRoles.COUNTRY_CREATE)
  @UseGuards(AuthGuard, RolesGuard)
  @UsePipes(new ValidationPipe())
  @UseInterceptors(FileInterceptor(countryImgField))
  create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createCountryDto: CreateCountryDto,
  ) {
    if (!file)
      throw new HttpException("File wasn't provided", HttpStatus.BAD_REQUEST);
    fileSizeGuard(file.size, maxSizeMB);
    fileTypeGuard(file.mimetype, fileTypes);

    return this.countryService.create(file, createCountryDto);
  }

  @Patch('/:id')
  @Roles(EUserRoles.COUNTRY_UPDATE)
  @UseGuards(AuthGuard, RolesGuard)
  @UsePipes(new ValidationPipe())
  @UseInterceptors(FileInterceptor(countryImgField))
  update(
    @Param('id', new IsObjectIdPipe()) id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() updateCountryDto: UpdateCountryDto,
  ) {
    if (file) {
      fileSizeGuard(file.size, maxSizeMB);
      fileTypeGuard(file.mimetype, fileTypes);
    }
    return this.countryService.update(file, updateCountryDto, id);
  }

  @Delete('/:id')
  @Roles(EUserRoles.COUNTRY_DELETE)
  @UseGuards(AuthGuard, RolesGuard)
  delete(@Param('id', new IsObjectIdPipe()) id: string) {
    return this.countryService.delete(id);
  }
}
