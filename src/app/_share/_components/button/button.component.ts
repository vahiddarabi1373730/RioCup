import {Component, Input} from '@angular/core';
import {ButtonInterface} from "../../_models/share.interface";
import {Button} from "primeng/button";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    Button,
    NgClass
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() button!: ButtonInterface
}
