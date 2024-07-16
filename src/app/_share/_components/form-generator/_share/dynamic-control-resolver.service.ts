import {Injectable} from '@angular/core';
import {ControlType, DynamicControlsMap} from "../../../_models/share.interface";
import {InputComponent} from "../_components/input/input.component";
import {SelectComponent} from "../_components/select/select.component";
import {SliderComponent} from "../_components/slider/slider.component";
import {GroupComponent} from "../_components/group/group.component";
import {InputGroupComponent} from "../_components/input-group/input-group.component";

@Injectable({
  providedIn: 'root'
})
export class DynamicControlResolverService {

  constructor() {
  }

  private controlComponents: DynamicControlsMap = {
    input: InputComponent,
    select: SelectComponent,
    slider: SliderComponent,
    group: GroupComponent,
    'input-group': InputGroupComponent
  }

  resolve(controlType: ControlType) {
    return this.controlComponents[controlType]
  }
}
