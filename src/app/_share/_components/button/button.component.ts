import {Component, Input} from '@angular/core';
import {ButtonInterface} from "../../_models/share.interface";
import {Button, ButtonDirective} from "primeng/button";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    CommonModule,
    Button,
    ButtonDirective,
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() button!: ButtonInterface
}
