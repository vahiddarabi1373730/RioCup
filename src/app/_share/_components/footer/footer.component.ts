import {Component, Input} from '@angular/core';
import {ButtonInterface, FooterInterface} from "../../_models/share.interface";
import {SvgIconComponent} from "../svg-icon/svg-icon.component";
import {ButtonComponent} from "../button/button.component";
import {CommonModule} from "@angular/common";
import {Button} from "primeng/button";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    SvgIconComponent,
    ButtonComponent,
    Button
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() footer!: FooterInterface
  protected buttons: ButtonInterface[] = [
    {
      innerText: "بازگشت",
      severity: "primary",
      hasInnerText: true,
      hasIcon: true,
      iconName: "arrow-right",
      raised: true,
      text: true,
      class: 'F2F2F2',
      icon: "pi-arrow-left",
      iconPos: "right",
      operation: () => {

      }
    },
    {
      innerText: "مرحله بعد",
      severity: "primary",
      hasInnerText: true,
      hasIcon: true,
      iconName: "arrow-left",
      class: 'DDBE88',
      operation: () => {

      }
    }
  ]
}
