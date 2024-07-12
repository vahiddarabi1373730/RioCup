import {Component, OnInit} from '@angular/core';
import {SvgIconComponent} from "../_share/_components/svg-icon/svg-icon.component";
import {CoffeeCardInterface} from "../_share/_models/share.interface";
import {Observable, of} from "rxjs";
import {CommonModule} from "@angular/common";
import {CoffeeCardComponent} from "../_share/_components/coffee-card/coffee-card.component";
import {coffees} from '../../assets/fake-data/fake-data';
import {FooterComponent} from "../_share/_components/footer/footer.component";

@Component({
  selector: 'app-choice-coffee',
  standalone: true,
  imports: [
    CommonModule,
    SvgIconComponent,
    CoffeeCardComponent,
    FooterComponent
  ],
  templateUrl: './choice-coffee.component.html',
  styleUrl: './choice-coffee.component.scss'
})
export class ChoiceCoffeeComponent implements OnInit {

  protected coffees: Observable<CoffeeCardInterface[]> = of(coffees)

  ngOnInit() {
  }


}
