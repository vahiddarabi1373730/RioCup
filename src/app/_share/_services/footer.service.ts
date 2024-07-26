import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {DisabledButtonInterface, FooterInterface} from "../_models/share.interface";

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor() {
  }

  public footer$ = new BehaviorSubject<FooterInterface>({
    level: "اول",
    price: 75000,
    countProducts: 2,
  })

  public disabledButton$ = new BehaviorSubject<DisabledButtonInterface>({})
}
