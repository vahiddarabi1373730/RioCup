import {Component} from '@angular/core';
import {DescriptionComponent} from "../../_share/_components/description/description.component";
import {DeviceComponent} from "../../_share/_components/device/device.component";
import {CommonModule} from "@angular/common";
import {Observable, of} from "rxjs";
import {DeviceInterface} from "../../_share/_models/share.interface";
import {preparerDevices} from "../../../assets/fake-data/fake-data";

@Component({
  selector: 'app-device-device',
  standalone: true,
  imports: [
    CommonModule,
    DescriptionComponent,
    DeviceComponent,
  ],
  templateUrl: './preparer-device.component.html',
  styleUrl: './preparer-device.component.scss'
})
export class PreparerDeviceComponent {
  preparerDevices$: Observable<DeviceInterface[]> = of(preparerDevices)
  protected description = 'وقتشه بگی با چه وسیله ای قهوه رو آماده می کنی یا بدونی که طعم این قهوه با وسایل دیگه چطوری میشه و یه وسیله ی جدید بخری'

  private selectedDevice: DeviceInterface | undefined;

  protected selectDevice(device: DeviceInterface, devices: DeviceInterface[], index: number) {
    devices.forEach(device => device.class = '')
    if (this.selectedDevice) {
      if (this.selectedDevice.id === device.id) {
        device.class = ''
        this.selectedDevice = undefined
      } else {
        device.class = 'selected'
        this.selectedDevice = device
      }
    } else {
      device.class = 'selected'
      this.selectedDevice = device
    }
  }
}
