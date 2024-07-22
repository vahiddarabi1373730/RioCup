import {inject, Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {AlertInterface} from "../_models/share.interface";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() {
    this.alert$.subscribe(alert => {
      switch (alert.type) {
        case "success":
          const success = this.toastr.success(alert.message, alert.title);
          this.clearToastr(success.toastId)
          break
        case "error":
          const error = this.toastr.error(alert.message, alert.title);
          this.clearToastr(error.toastId)
          break
        case "warning":
          const warning = this.toastr.warning(alert.message, alert.title);
          this.clearToastr(warning.toastId)
          break
        case "info":
          const info = this.toastr.info(alert.message, alert.title);
          this.clearToastr(info.toastId)
          break
      }
    })
  }

  public alert$ = new Subject<AlertInterface>()
  private toastr = inject(ToastrService)

  private clearToastr(toasterId: number): void {
    setTimeout(() => {
      this.toastr.clear(toasterId)
    }, 3000)
  }
}
