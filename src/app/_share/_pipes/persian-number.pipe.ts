import {Pipe, PipeTransform} from '@angular/core';
import {addCommas, digitsEnToFa} from "@persian-tools/persian-tools";

@Pipe({
  name: 'persianNumber',
  standalone: true
})
export class PersianNumberPipe implements PipeTransform {
  transform(number: number): string {
    return digitsEnToFa(addCommas(number))
  }

}
