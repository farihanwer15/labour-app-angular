
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toast: MatSnackBar) { }

  show(message: string, buttonLabel: string = 'OK', config: MatSnackBarConfig = null): MatSnackBarRef<any> {
    const toastTimeout = 8000;
    if (config) {
      return this.toast.open(message, buttonLabel, config);
    }
    return this.toast.open(message, buttonLabel, { duration: toastTimeout });
  }
}