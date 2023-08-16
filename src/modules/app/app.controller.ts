import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { OperationIds } from 'src/common/constants/operations-ids.enum';
import { ComposeErrorsDecorator } from 'src/common/decorators/compose-errors.decorator';

import { AppService } from './app.service';

@Controller()
@ComposeErrorsDecorator()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    description: 'Get content of <b>README.md</b> file',
    operationId: OperationIds.APP_DOC,
  })
  @ApiResponse({ status: 200, type: 'string', description: 'OK' })
  readme() {
    return this.appService.getReadme();
  }
}
