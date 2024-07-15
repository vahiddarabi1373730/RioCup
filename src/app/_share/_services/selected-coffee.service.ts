import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {selectedCoffeeInterface} from "../_models/share.interface";

@Injectable({
  providedIn: 'root'
})
export class SelectedCoffeeService {

  constructor() {
  }

  public selectedCoffee$ = new BehaviorSubject<selectedCoffeeInterface[]>([])
}
