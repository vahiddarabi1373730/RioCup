import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {DynamicControlInterface, DynamicFormConfigInterface} from "../../_models/share.interface";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {DynamicControlResolverService} from "./_share/dynamic-control-resolver.service";
import {ControlInjectorPipe} from "./_share/contolr-injector.pipe";
import {resolveValidators} from "./_share/share-functions";

@Component({
  selector: 'app-form-generator',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ControlInjectorPipe
  ],
  templateUrl: './form-generator.component.html',
  styleUrl: './form-generator.component.scss'
})
export class FormGeneratorComponent {
  @Output() formReady = new EventEmitter<FormGroup>()
  protected dynamicControlResolverService = inject(DynamicControlResolverService)
  protected form!: FormGroup;
  private _config!: DynamicFormConfigInterface
  @Input() set config(config: DynamicFormConfigInterface) {
    this._config = config
    this.buildForm(config.controls)
    this.formReady.emit(this.form)

  }

  get config() {
    return this._config
  }

  private buildForm(controls: DynamicFormConfigInterface['controls']): void {
    this.form = new FormGroup({})
    Object.keys(controls).forEach(controlKey => this.buildControls(controlKey, controls[controlKey], this.form))
  }

  private buildControls(controlKey: string, config: DynamicControlInterface, formGroup: FormGroup) {
    if (config.controlType === 'group') {
      this.buildGroup(controlKey, config['controls'], formGroup)
      return
    }
    const validators = resolveValidators(config)
    formGroup.addControl(controlKey, new FormControl(config.value, validators))
  }

  private buildGroup(controlKey: string, controls: DynamicControlInterface['controls'], parentFormGroup: FormGroup) {
    const nestedForm = new FormGroup({});
    if (!controls) return
    Object.keys(controls).forEach(controlKey => {
      this.buildControls(controlKey, controls[controlKey], nestedForm)
    })
    parentFormGroup.addControl(controlKey, nestedForm)
  }

}
