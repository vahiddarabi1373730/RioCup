import {Component} from '@angular/core';
import {DescriptionComponent} from "../../_share/_components/description/description.component";
import {FormGeneratorComponent} from "../../_share/_components/form-generator/form-generator.component";
import {of} from "rxjs";
import {packs} from "../../../assets/fake-data/fake-data";
import {CommonModule} from "@angular/common";
import {PackComponent} from "../../_share/_components/pack/pack.component";
import {DynamicFormConfigInterface, PackInterface} from "../../_share/_models/share.interface";
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
  private selectedPack: PackInterface | undefined;
  protected description = 'لطفان وزن بسته‌بندی مد نظر خود را انتخاب و نوع آسیاب قهوه را هم انتخاب کنید و برای ترکیب خود یک نام بگذارید'
  protected packs$ = of(packs)
  protected config: DynamicFormConfigInterface = {
    formClass: 'md:tw-flex-row md:tw-justify-between md:tw-gap-16',
    controls: {
      'name': {
        controlType: "input",
        label: 'نامی برای ترکیب خود بگذارید:',
        value: "ترکی",
        controlClass: "md:tw-flex-row md:tw-w-1/2 md:tw-justify-between md:tw-items-center"
      },
      'isMill': {
        controlType: "input-group",
        label: 'آیا مایلید قهوه آسیاب شود ؟',
        value: "",
        controlClass: "md:tw-flex-row md:tw-w-1/2 md:tw-justify-between md:tw-items-center"
      }
    }
  }

  protected selectPack(pack: PackInterface, packs: PackInterface[]) {
    packs.forEach(device => device.class = '')
    if (this.selectedPack) {
      if (this.selectedPack.id === pack.id) {
        pack.class = ''
        this.selectedPack = undefined
      } else {
        pack.class = 'selected'
        this.selectedPack = pack
      }
    } else {
      pack.class = 'selected'
      this.selectedPack = pack
    }
    console.log(pack)
  }

  protected formReady(form: FormGroup) {
    this.form = form
    this.form.valueChanges.subscribe(res => {
    })
  }

}
