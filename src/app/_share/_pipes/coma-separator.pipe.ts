import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'comaSeparator',
  standalone: true
})
export class ComaSeparatorPipe implements PipeTransform {

  transform(value: number): string {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

}
