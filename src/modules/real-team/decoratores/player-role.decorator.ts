import { BadRequestException } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { ValidationOptions } from 'joi';
import { Types } from 'mongoose';
import { EPlayerPositionName } from 'src/modules/real-player/constants/player-position-name.enum';

const name = 'playerRole';
@ValidatorConstraint({ name, async: false })
class validator implements ValidatorConstraintInterface {
  validate(value: object, args: ValidationArguments) {
    const keys = Object.keys(value);
    const values = Object.values(value);
    const validPositions = Object.values(EPlayerPositionName) as string[];

    const isValidKeys = keys.every((key: string) => validPositions.includes(key));
    if (!isValidKeys)
      throw new BadRequestException(`Keys in ${args.property} have to includes: ${validPositions.join(',')}`);

    const isValidValues = values.every((val) => typeof val === 'string' && Types.ObjectId.isValid(val));
    if (!isValidValues) throw new BadRequestException(`Values in ${args.property} have to be a valid mongo id`);

    return true;
  }
}

export function IsValidPlayerRole(options?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name,
      target: object.constructor,
      propertyName,
      constraints: [],
      options,
      validator,
    });
  };
}
