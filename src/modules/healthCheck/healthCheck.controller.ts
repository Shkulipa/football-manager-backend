import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OperationIds } from 'src/common/constants/operations-ids.enum';
import { HEALTH_TAG } from 'src/common/constants/tags';
import { ComposeErrorsDecorator } from 'src/common/decorators/compose-errors.decorator';
import { CommonSuccessResDto } from 'src/common/dto/common-success-res.dto';

/**
 * HealthCheckController
 * responsible for healthCheck
 */
@ApiTags(HEALTH_TAG)
@ComposeErrorsDecorator()
@Controller()
export class HealthCheckController {
  /**
   * /health endpoint handler - checks if the server is alive
   * @returns {CommonSuccessResDto}
   */
  @Get('health')
  @ApiOperation({
    description: 'check if service is healthy and able to respond requests',
    operationId: OperationIds.HEALTH_CHECK,
  })
  @ApiResponse({
    status: 200,
    type: CommonSuccessResDto,
    description: 'healthy',
  })
  getHealth(): CommonSuccessResDto {
    return { success: true };
  }
}
