import {Component, Input} from '@angular/core';
import {SvgIconComponent} from "../svg-icon/svg-icon.component";
import {CoffeeCardInterface} from "../../_models/share.interface";
import {SliderComponent} from "../slider/slider.component";
import {PlaceHolderComponent} from "./place-holder/place-holder.component";

@Component({
  selector: 'app-coffee-card',
  standalone: true,
  imports: [
    SvgIconComponent,
    SliderComponent,
    PlaceHolderComponent
  ],
  templateUrl: './coffee-card.component.html',
  styleUrl: './coffee-card.component.scss'
})
export class CoffeeCardComponent {
  @Input() item!: CoffeeCardInterface
}