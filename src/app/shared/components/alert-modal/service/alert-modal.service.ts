import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Alert, AlertType } from '../alert';

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  alertSubject: Subject<Alert> = new Subject<Alert>();

  constructor() { }

  success(title: string, message: string){
    this.alert(AlertType.SUCCESS, title, message);
  }

  warning(title: string, message: string){
    this.alert(AlertType.WARNING, title, message);
  }

  info(title: string, message: string){
    this.alert(AlertType.INFO, title, message);
  }

  danger(title: string, message: string){
    this.alert(AlertType.DANGER, title, message);
  }

  private alert(alertType: AlertType, title: string, message: string){
    this.alertSubject.next(new Alert(alertType, title, message));
  }

  getAlert(){
    return this.alertSubject.asObservable();
  }

  clearImmediate(){
    this.alertSubject.next(null);
  }



}
