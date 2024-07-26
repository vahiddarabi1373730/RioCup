import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function CalculateTotalPercentageFn(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let total = 0
    Object.keys(control.value).forEach(key => {
      total += Number(control.value[key])

    })
    return total > 100 ? {'over-head': {overHead: true}} : null
  }
}
