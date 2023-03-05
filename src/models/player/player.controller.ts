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
} from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './dto/createPlayer.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Roles } from 'src/common/decorators/roles.decorator';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { EUserRoles } from 'src/common/interfaces/userRoles.interfaces';

const playerPhotoField = 'playerPhotoField';

@Controller('/player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post()
  @Roles(EUserRoles.PLAYER_CREATE)
  @UseGuards(AuthGuard, RolesGuard)
  @UsePipes(new ValidationPipe())
  @UseInterceptors(FileInterceptor(playerPhotoField))
  create(@Body() createPlayerDto: CreatePlayerDto) {
    console.log(createPlayerDto);
    return this.playerService.create(createPlayerDto);
  }

  @Get()
  findAll() {
    return this.playerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto) {
    return this.playerService.update(+id, updatePlayerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerService.remove(+id);
  }
}
