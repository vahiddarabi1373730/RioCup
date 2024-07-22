import {Component} from '@angular/core';
import {InputGroupModule} from "primeng/inputgroup";
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import {ReactiveFormsModule} from "@angular/forms";
import {BaseDirective} from "../base.directive";

@Component({
  selector: 'app-input-group',
  standalone: true,
  imports: [
    InputGroupModule,
    InputGroupAddonModule,
    ReactiveFormsModule
  ],
  templateUrl: './input-group.component.html',
  styleUrl: './input-group.component.scss'
})
export class InputGroupComponent extends BaseDirective {

}
