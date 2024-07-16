import {Component, Input} from '@angular/core';
import {SvgIconComponent} from "../svg-icon/svg-icon.component";
import {DeviceInterface} from "../../_models/share.interface";
import {SliderComponent} from "../slider/slider.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-device',
  standalone: true,
  imports: [
    CommonModule,
    SvgIconComponent,
    SliderComponent,
  ],
  templateUrl: './device.component.html',
  styleUrl: './device.component.scss'
})
export class DeviceComponent {
  @Input() device!: DeviceInterface
}
