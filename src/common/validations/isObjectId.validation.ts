import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Types } from 'mongoose';

/**
 * @info
 * https://github.com/typestack/class-validator
 */
@ValidatorConstraint()
export class IsObjectIdValidation implements ValidatorConstraintInterface {
  validate(id: string) {
    const isValid = Types.ObjectId.isValid(id);
    return isValid;
  }

  defaultMessage() {
    return "ID of country isn't valid";
  }
}
