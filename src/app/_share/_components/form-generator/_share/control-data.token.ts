import {InjectionToken} from "@angular/core";
import {DynamicControlInterface} from "../../../_models/share.interface";

interface ControlDataInterface {
  controlKey: string,
  config: DynamicControlInterface
}

export const CONTROL_DATA = new InjectionToken<ControlDataInterface>('CONTROL_DATA');
