import { BadRequestException } from '@nestjs/common';
import { TransformFnParams } from 'class-transformer';
import { Types } from 'mongoose';

export const commonArrayNullIdValidator = ({ key, value }: TransformFnParams) => {
  value = value.split(',');

  if (!Array.isArray(value)) {
    throw new BadRequestException(`${key} must be an array`);
  }

  for (const val of value) {
    if (val === 'null') {
      return value;
    }

    if (val !== 'null' && !Types.ObjectId.isValid(val)) {
      throw new BadRequestException(`${key} must be a valid MongoDB id or null`);
    }
  }

  return value;
};
