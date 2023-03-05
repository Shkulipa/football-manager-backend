import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

/**
 * @info
 * https://github.com/typestack/class-validator
 */
@ValidatorConstraint()
export class Range implements ValidatorConstraintInterface {
  validate(value: string, validationArguments: ValidationArguments) {
    const [min, max] = validationArguments?.constraints || [];

    if (value < min) {
      validationArguments?.object[validationArguments?.property]?.errors?.push(
        `Value is too low. Minimum allowed is ${min}.`,
      );
      return false;
    }

    if (value > max) {
      validationArguments?.object[validationArguments?.property]?.errors?.push(
        `Value is too high. Maximum allowed is ${max}.`,
      );
      return false;
    }

    return true;
  }

  defaultMessage(validationArguments?: ValidationArguments) {
    const [min, max] = validationArguments?.constraints || [];
    return `Value must be between ${min} and ${max}.`;
  }
}
