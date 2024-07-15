import {AfterViewInit, Component, inject, Input, OnInit} from '@angular/core';
import {DescriptionComponent} from "../_share/_components/description/description.component";
import {FormGeneratorComponent} from "../_share/_components/form-generator/form-generator.component";
import {DynamicFormConfigInterface, selectedCoffeeInterface} from "../_share/_models/share.interface";
import {SelectedCoffeeService} from "../_share/_services/selected-coffee.service";
import {Observable} from "rxjs";
import {FormGroup} from "@angular/forms";

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
  private form!: FormGroup
  protected config: DynamicFormConfigInterface = {
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
        this.config.controls[item.coffee.nameFlag] = {controlType: "slider", value: "50", label: item.coffee.title}
      })
    })
  }

  ngAfterViewInit() {
    console.log(this.form)
  }
}
