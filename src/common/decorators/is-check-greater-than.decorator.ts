import { applyDecorators, BadRequestException } from '@nestjs/common';
import { ValidateIf } from 'class-validator';

export function IsCheckGreaterThan(from: string, to: string) {
  const validateIf = ValidateIf((item) => {
    if (item[to]) {
      if (item[from] > item[to]) throw new BadRequestException(`${from} must not be greater than ${to}`);
    }
    return true;
  });

  return applyDecorators(validateIf);
}
