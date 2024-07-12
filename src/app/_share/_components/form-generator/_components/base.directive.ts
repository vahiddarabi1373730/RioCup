import {Directive, inject} from '@angular/core';
import {CONTROL_DATA} from "../_share/control-data.token";
import {ControlContainer, FormGroup} from "@angular/forms";

@Directive()
export class BaseDirective {

  constructor() {
  }

  protected control = inject(CONTROL_DATA)
  protected parentFormGroup = inject(ControlContainer)

  get form() {
    return this.parentFormGroup.control as FormGroup
  }

}
