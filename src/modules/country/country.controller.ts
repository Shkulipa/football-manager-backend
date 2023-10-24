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
import { COUNTRY_TAG } from 'src/common/constants/tags';
import { EUserRoles } from 'src/common/constants/user-roles.enum';
import { ComposeAuthDecorator } from 'src/common/decorators/compose-auth.decorator';
import { ComposeErrorsDecorator } from 'src/common/decorators/compose-errors.decorator';
import { ComposeOthersErrorsDecorator } from 'src/common/decorators/compose-others-errors.decorator';
import { CommonPathReqDto } from 'src/common/dto/common-path-req.dto';
import { CommonSuccessResDto } from 'src/common/dto/common-success-res.dto';
import { QueryDto } from 'src/common/dto/query.dto';
import { uploadFilesLimits } from 'src/common/helpers/files.helper';
import { CountryDbDto } from 'src/services/repositories/country/dto/country.db.dto';

import { CountryService } from './country.service';
import { CreateCountryReqDto } from './dto/create-country-req.dto';
import { GetCountriesResDto } from './dto/get-countries-res.dto';
import { UpdateCountryReqDto } from './dto/update-country-req.dto';

const countryImgField = 'imgCountry';

@ApiTags(COUNTRY_TAG)
@Controller(COUNTRY_TAG)
@ComposeErrorsDecorator()
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  /**
   * get countries
   * @returns {Promise<GetCountriesResDto>}
   */
  @Get()
  @ApiOperation({
    description: 'get countries',
    operationId: OperationIds.COUNTRY_GET_MANY,
  })
  @ApiResponse({ status: 200, type: GetCountriesResDto, description: 'OK' })
  @ComposeOthersErrorsDecorator(EErrors.BAD_REQUEST_ERROR)
  async getAll(@Query() query: QueryDto): Promise<GetCountriesResDto> {
    return await this.countryService.getAll(query);
  }

  /**
   * get country by id
   * @returns {Promise<CountryDbDto>}
   */
  @Get('/:id')
  @ApiOperation({
    description: 'get country by id',
    operationId: OperationIds.COUNTRY_GET_BY_ID,
  })
  @ApiResponse({ status: 200, type: CountryDbDto, description: 'OK' })
  @ComposeOthersErrorsDecorator(EErrors.NOT_FOUND_ERROR)
  async findById(@Param() { id }: CommonPathReqDto): Promise<CountryDbDto> {
    return await this.countryService.findById(id);
  }

  /**
   * create country
   * @returns {Promise<CommonSuccessResDto>}
   */
  @Post()
  @ApiOperation({
    description: 'create new country',
    operationId: OperationIds.COUNTRY_CREATE,
  })
  @ApiConsumes('multipart/form-data')
  @ComposeAuthDecorator(EUserRoles.COUNTRY_CREATE)
  @UseInterceptors(FileInterceptor(countryImgField, uploadFilesLimits(FileImages, 1)))
  @ApiResponse({ status: 200, type: CommonSuccessResDto, description: 'OK' })
  @ComposeOthersErrorsDecorator(EErrors.FORBIDDEN_ERROR, EErrors.NOT_FOUND_ERROR)
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createCountryReqDto: CreateCountryReqDto,
  ): Promise<CommonSuccessResDto> {
    return await this.countryService.create(file, createCountryReqDto);
  }

  /**
   * update country
   * @returns {Promise<CommonSuccessResDto>}
   */
  @Patch('/:id')
  @ApiOperation({
    description: 'update country',
    operationId: OperationIds.COUNTRY_UPDATE,
  })
  @ApiConsumes('multipart/form-data')
  @ComposeAuthDecorator(EUserRoles.COUNTRY_UPDATE)
  @UseInterceptors(FileInterceptor(countryImgField, uploadFilesLimits(FileImages, 1)))
  @ApiResponse({ status: 200, type: CommonSuccessResDto, description: 'OK' })
  @ComposeOthersErrorsDecorator(EErrors.FORBIDDEN_ERROR, EErrors.NOT_FOUND_ERROR)
  update(
    @Param() { id }: CommonPathReqDto,
    @UploadedFile() file: Express.Multer.File,
    @Body() updateCountryDto: UpdateCountryReqDto,
  ): Promise<CommonSuccessResDto> {
    return this.countryService.update(file, updateCountryDto, id);
  }

  /**
   * delete country
   * @returns {Promise<CommonSuccessResDto>}
   */
  @Delete('/:id')
  @ApiOperation({
    description: 'delete country',
    operationId: OperationIds.COUNTRY_DELETE,
  })
  @ComposeAuthDecorator(EUserRoles.COUNTRY_DELETE)
  @ApiResponse({ status: 200, type: CommonSuccessResDto, description: 'OK' })
  @ComposeOthersErrorsDecorator(EErrors.FORBIDDEN_ERROR, EErrors.NOT_FOUND_ERROR)
  delete(@Param() { id }: CommonPathReqDto): Promise<CommonSuccessResDto> {
    return this.countryService.delete(id);
  }
}
