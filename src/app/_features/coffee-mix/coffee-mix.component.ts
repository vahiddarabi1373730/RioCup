import {AfterViewInit, Component, inject, Input, OnInit} from '@angular/core';
import {DescriptionComponent} from "../../_share/_components/description/description.component";
import {FormGeneratorComponent} from "../../_share/_components/form-generator/form-generator.component";
import {DynamicFormConfigInterface, selectedCoffeeInterface} from "../../_share/_models/share.interface";
import {SelectedCoffeeService} from "../../_share/_services/selected-coffee.service";
import {Observable} from "rxjs";
import {FormGroup} from "@angular/forms";
import {FooterService} from "../../_share/_services/footer.service";
import {AlertService} from "../../_share/_services/alert.service";
import {calculateTotalPercentage} from "./_functions/calculate-total-percentage";
import {CalculateTotalPercentageFn} from "./_functions/calculate-total-percentageFn";

@Component({
  selector: 'app-coffee-mix',
  standalone: true,
  imports: [
    DescriptionComponent,
    FormGeneratorComponent
  ],
  templateUrl: './coffee-mix.component.html',
  styleUrl: './coffee-mix.component.scss'
})
export class CoffeeMixComponent implements OnInit, AfterViewInit {
  private alertService = inject(AlertService)
  private footerService = inject(FooterService)
  protected description = 'حداقل یک و حداکثر سه قهوه را برای شروع ترکیب دلخواه انتخاب کنید. برای بهترین ترکیب، بهتر است یک قهوه از نوع عربیکا و نوع دوم ربوستای اوگاندا را انتخاب کنید. ربوستا تلخی، غلظت، کرما و کافئین قهوه را افزایش می دهد و برای طعم و عطر بهتر از ترکیب یک عربیکا استفاده کنید.'
  private form!: FormGroup
  protected config: DynamicFormConfigInterface = {
    textError: "حداکثز میزان قهوه 100% میباشد.",
    validatorFn: CalculateTotalPercentageFn(),
    controls: {}
  }
  private selectedCoffeeService = inject(SelectedCoffeeService)
  @Input() selectedCoffee: Observable<selectedCoffeeInterface[]> = this.selectedCoffeeService.selectedCoffee$;

  protected onReady(form: FormGroup) {
    this.form = form
  }

  ngOnInit() {
    this.selectedCoffee.subscribe(selectedCoffee => {
      selectedCoffee.forEach((item, index) => {
        this.config.controls[item.coffee.nameFlag] = {controlType: "slider", value: "0", label: item.coffee.title}
      })
    })

  }

  ngAfterViewInit() {
    this.form.valueChanges.subscribe({
      next: (value) => {
        this.footerService.disabledButton$.next({disabled: calculateTotalPercentage(value), key: "next-level"})
      }
    })

  }
}
