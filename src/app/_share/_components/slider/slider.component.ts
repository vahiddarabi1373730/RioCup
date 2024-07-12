import {Component, Input} from '@angular/core';
import {SliderModule} from "primeng/slider";
import {FormsModule} from "@angular/forms";
import {ValueLabelInterface} from "../../_models/share.interface";

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    SliderModule,
    FormsModule
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  @Input() slider!: ValueLabelInterface;
}
