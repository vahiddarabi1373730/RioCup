import {Component, Input} from '@angular/core';
import {PackInterface} from "../../_models/share.interface";
import {SvgIconComponent} from "../svg-icon/svg-icon.component";
import {FooterComponent} from "../footer/footer.component";
import {FormGeneratorComponent} from "../form-generator/form-generator.component";

@Component({
  selector: 'app-pack',
  standalone: true,
  imports: [
    SvgIconComponent,
    FooterComponent,
    FormGeneratorComponent
  ],
  templateUrl: './pack.component.html',
  styleUrl: './pack.component.scss'
})
export class PackComponent {
  @Input() pack!: PackInterface
}
