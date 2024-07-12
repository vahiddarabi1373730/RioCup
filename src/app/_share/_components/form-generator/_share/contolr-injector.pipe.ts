import {inject, Injector, Pipe, PipeTransform} from '@angular/core';
import {DynamicControlInterface} from "../../../_models/share.interface";
import {CONTROL_DATA} from "./control-data.token";

@Pipe({
  name: 'controlInjector',
  standalone: true
})
export class ControlInjectorPipe implements PipeTransform {
  private injector = inject(Injector)

  transform(controlKey: unknown, config: DynamicControlInterface): Injector {

    return Injector.create({
      parent: this.injector,
      providers: [{provide: CONTROL_DATA, useValue: {config, controlKey}}]
    })
  }

}
