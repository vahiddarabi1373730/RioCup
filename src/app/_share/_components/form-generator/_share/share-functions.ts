import {DynamicControlInterface} from "../../../_models/share.interface";
import {Validators} from "@angular/forms";

export function resolveValidators({validators = {}}: DynamicControlInterface) {
  return (Object.keys(validators) as Array<keyof typeof validators>).map(validatorKey => {
    const validatorValue = validators[validatorKey]
    if (validatorKey === 'required') {
      return Validators.required
    }
    if (validatorKey === 'email') {
      return Validators.email
    }
    if (validatorKey === 'minLength' && typeof validatorValue === 'number') {
      return Validators.minLength(validatorValue)
    }
    if (validatorKey === 'maxLength' && typeof validatorValue === 'number') {
      return Validators.maxLength(validatorValue)
    }
    return Validators.nullValidator

  })
}
