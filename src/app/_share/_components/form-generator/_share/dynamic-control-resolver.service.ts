import {Injectable} from '@angular/core';
import {ControlType, DynamicControlsMap} from "../../../_models/share.interface";
import {InputComponent} from "../_components/input/input.component";
import {SelectComponent} from "../_components/select/select.component";
import {SliderComponent} from "../_components/slider/slider.component";

@Injectable({
  providedIn: 'root'
})
export class DynamicControlResolverService {

  constructor() {
  }

  private controlComponents: DynamicControlsMap = {
    input: InputComponent,
    select: SelectComponent,
    slider: SliderComponent
  }

  resolve(controlType: ControlType) {
    return this.controlComponents[controlType]
  }
}
