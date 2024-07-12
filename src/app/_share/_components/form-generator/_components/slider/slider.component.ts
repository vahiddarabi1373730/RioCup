import {Component} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {SliderModule} from "primeng/slider";
import {BaseDirective} from "../base.directive";

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    SliderModule
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent extends BaseDirective {

}
