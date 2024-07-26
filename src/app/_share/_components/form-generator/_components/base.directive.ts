import {Directive, inject, OnInit} from '@angular/core';
import {CONTROL_DATA} from "../_share/control-data.token";
import {ControlContainer, FormGroup} from "@angular/forms";
import {ChangeConfigPropertyService} from "../_share/change-config-property.service";
import {ChangeConfigPropertyInterface} from "../../../_models/share.interface";

@Directive()
export class BaseDirective implements OnInit {
  public control = inject(CONTROL_DATA)
  public changeConfigPropertyService = inject(ChangeConfigPropertyService)
  protected parentFormGroup = inject(ControlContainer)

  get form() {
    return this.parentFormGroup.control as FormGroup
  }

  ngOnInit() {
    this.changeConfigPropertyService.changeConfigProperty$.subscribe((res: ChangeConfigPropertyInterface) => {
      this.control.config[res.propertyName] = res.newValue
    })
  }


}
