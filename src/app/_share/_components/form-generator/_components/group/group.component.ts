import {Component, inject} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {BaseDirective} from "../base.directive";
import {CommonModule} from "@angular/common";
import {DynamicControlResolverService} from "../../_share/dynamic-control-resolver.service";
import {ControlInjectorPipe} from "../../_share/contolr-injector.pipe";

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ControlInjectorPipe,
  ],
  templateUrl: './group.component.html',
  styleUrl: './group.component.scss'
})
export class GroupComponent extends BaseDirective {
  protected dynamicControlResolverService = inject(DynamicControlResolverService)
}
