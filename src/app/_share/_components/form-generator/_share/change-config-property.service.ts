import {Injectable} from '@angular/core';
import {ChangeConfigPropertyInterface} from "../../../_models/share.interface";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChangeConfigPropertyService {
  public changeConfigProperty$ = new Subject<ChangeConfigPropertyInterface>()

}
