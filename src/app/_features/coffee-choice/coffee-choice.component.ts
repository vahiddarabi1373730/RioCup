import {Component, inject} from '@angular/core';
import {SvgIconComponent} from "../../_share/_components/svg-icon/svg-icon.component";
import {CoffeeInterface} from "../../_share/_models/share.interface";
import {Observable, of} from "rxjs";
import {CommonModule} from "@angular/common";
import {CoffeeCardComponent} from "../../_share/_components/coffee-card/coffee-card.component";
import {coffees} from '../../../assets/fake-data/fake-data';
import {FooterComponent} from "../../_share/_components/footer/footer.component";
import {DescriptionComponent} from "../../_share/_components/description/description.component";
import {SelectedCoffeeService} from "../../_share/_services/selected-coffee.service";

@Component({
  selector: 'app-coffee-choice',
  standalone: true,
  imports: [
    CommonModule,
    SvgIconComponent,
    CoffeeCardComponent,
    FooterComponent,
    DescriptionComponent
  ],
  templateUrl: './coffee-choice.component.html',
  styleUrl: './coffee-choice.component.scss'
})
export class CoffeeChoiceComponent {
  protected description = 'حداقل یک و حداکثر سه قهوه را برای شروع ترکیب دلخواه انتخاب کنید. برای بهترین ترکیب، بهتر است یک قهوه از نوع عربیکا و نوع دوم ربوستای اوگاندا را انتخاب کنید. ربوستا تلخی، غلظت، کرما و کافئین قهوه را افزایش می دهد و برای طعم و عطر بهتر از ترکیب یک عربیکا استفاده کنید.'
  protected coffees: Observable<CoffeeInterface[]> = of(coffees)
  private selectedCoffeeService = inject(SelectedCoffeeService)

  protected selectCoffee(coffee: CoffeeInterface, index: number) {
    const selectedCoffees = this.selectedCoffeeService.selectedCoffee$.getValue()
    const findIndex = selectedCoffees.findIndex(c => c.index === index)
    if (findIndex === -1) {
      coffee.class = 'selected'
      this.selectedCoffeeService.selectedCoffee$.next([...selectedCoffees, {coffee, index}])
    } else {
      coffee.class = ''
      selectedCoffees.splice(findIndex, 1)
      this.selectedCoffeeService.selectedCoffee$.next(selectedCoffees)
    }
  }

}
