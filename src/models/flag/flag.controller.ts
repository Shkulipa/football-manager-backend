import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Delete,
  Param,
  UseGuards,
  Body,
  Get,
  UsePipes,
  ValidationPipe,
  Patch,
} from '@nestjs/common';
import { FlagService } from './flag.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { CreateFlagDto } from './dto/createFlag.dto';
import { fileSizeGuard } from 'src/common/guards/fileSize.guard';
import { fileTypes, maxSizeMB } from 'src/common/constants/file.constants';
import { fileTypeGuard } from 'src/common/guards/fileType.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { EUserRoles } from 'src/common/interfaces/userRoles.interfaces';
import { ObjectIdPipe } from 'src/common/pipes/objectId.pipe';
import { QueryParams } from 'src/common/decorators/query.decorator';
import { IParsedQuery } from 'src/common/interfaces/query.interfaces';
import { UpdateFlagDto } from './dto/updateFlag.dto';

const flagImgField = 'imgFlag';

@Controller('/flag')
export class FlagController {
  constructor(private readonly flagService: FlagService) {}

  @Get('/')
  getAll(@QueryParams() query: IParsedQuery) {
    return this.flagService.getAll(query);
  }

  @Get('/:id')
  findById(@Param('id', new ObjectIdPipe()) id: string) {
    return this.flagService.findById(id);
  }

  @Post('/')
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  @UseInterceptors(FileInterceptor(flagImgField))
  create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createFlagDto: CreateFlagDto,
  ) {
    fileSizeGuard(file.size, maxSizeMB);
    fileTypeGuard(file.mimetype, fileTypes);

    return this.flagService.create(file, createFlagDto);
  }

  @Patch('/:id')
  @UseGuards(AuthGuard)
  @Roles(EUserRoles.UPDATE_FLAG)
  @UseGuards(RolesGuard)
  @UsePipes(new ValidationPipe())
  @UseInterceptors(FileInterceptor(flagImgField))
  update(
    @Param('id', new ObjectIdPipe()) id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() updateFlagDto: UpdateFlagDto,
  ) {
    if (file) {
      fileSizeGuard(file.size, maxSizeMB);
      fileTypeGuard(file.mimetype, fileTypes);
    }
    return this.flagService.update(file, updateFlagDto, id);
  }

  @Delete('/:id')
  @UseGuards(AuthGuard)
  @Roles(EUserRoles.DELETE_FLAG)
  @UseGuards(RolesGuard)
  delete(@Param('id', new ObjectIdPipe()) id: string) {
    return this.flagService.delete(id);
  }
}
