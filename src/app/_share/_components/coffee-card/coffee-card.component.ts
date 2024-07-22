import {Component, Input} from '@angular/core';
import {SvgIconComponent} from "../svg-icon/svg-icon.component";
import {CoffeeInterface} from "../../_models/share.interface";
import {SliderComponent} from "../slider/slider.component";
import {PlaceHolderComponent} from "./place-holder/place-holder.component";
import {Button} from "primeng/button";
import {NgClass} from "@angular/common";
import {PersianNumberPipe} from "../../_pipes/persian-number.pipe";

@Component({
  selector: 'app-coffee-card',
  standalone: true,
  imports: [
    SvgIconComponent,
    SliderComponent,
    PlaceHolderComponent,
    Button,
    NgClass,
    PersianNumberPipe
  ],
  templateUrl: './coffee-card.component.html',
  styleUrl: './coffee-card.component.scss'
})
export class CoffeeCardComponent {
  @Input() item!: CoffeeInterface
}
