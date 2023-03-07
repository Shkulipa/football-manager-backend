import { Controller, Get } from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger/dist/decorators/api-response.decorator';
import { ApiTags } from '@nestjs/swagger/dist/decorators/api-use-tags.decorator';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiTags('Home')
  @ApiCreatedResponse({
    status: 200,
    description: 'Get content of <b>README.md</b> file',
  })
  @Get()
  readme() {
    return this.appService.getReamde();
  }
}
