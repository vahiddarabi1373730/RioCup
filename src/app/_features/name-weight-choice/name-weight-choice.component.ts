import {Component} from '@angular/core';
import {DescriptionComponent} from "../../_share/_components/description/description.component";
import {FormGeneratorComponent} from "../../_share/_components/form-generator/form-generator.component";
import {of} from "rxjs";
import {packs} from "../../../assets/fake-data/fake-data";
import {CommonModule} from "@angular/common";
import {PackComponent} from "../../_share/_components/pack/pack.component";
import {DynamicFormConfigInterface} from "../../_share/_models/share.interface";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-name-weight-choice',
  standalone: true,
  imports: [
    DescriptionComponent,
    FormGeneratorComponent,
    CommonModule,
    PackComponent
  ],
  templateUrl: './name-weight-choice.component.html',
  styleUrl: './name-weight-choice.component.scss'
})
export class NameWeightChoiceComponent {
  private form!: FormGroup
  protected description = 'لطفان وزن بسته‌بندی مد نظر خود را انتخاب و نوع آسیاب قهوه را هم انتخاب کنید و برای ترکیب خود یک نام بگذارید'
  protected packs$ = of(packs)
  protected config: DynamicFormConfigInterface = {
    controls: {
      'name': {
        controlType: "input",
        label: 'نامی برای ترکیب خود بگذارید.',
        value: "ترکی"
      },
      'isMill': {
        controlType: "input-group",
        label: 'آیا مایلید قهوه آسیاب شود ؟',
        value: ""
      }
    }
  }

  protected formReady(form: FormGroup) {
    console.log(form)
    this.form = form
  }

}
