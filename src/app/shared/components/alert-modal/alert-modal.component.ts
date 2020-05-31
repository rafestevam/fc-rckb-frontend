import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Alert, AlertType } from './alert';
import { AlertModalService } from './service/alert-modal.service';
import { $ } from 'protractor';

@Component({
  selector: 'fc-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent implements OnInit {

  //@ViewChild('modalAlert') modalAlert: ElementRef;  
  modalMessage: string = '';
  modalTitle: string = '';
  modalClass: string = '';
  alert: Alert;

  constructor(private alertService: AlertModalService) { 
    this.alertService
      .getAlert()
      .subscribe(alert => {
        this.modalMessage = alert.message;
        this.modalTitle = alert.title;
        this.modalClass = this.getAlert(alert);
        document.getElementById('launchModal').click();
      });
  }

  ngOnInit(): void {
  }

  private getAlert(alert: Alert) {
    if(!alert) return '';

    switch (alert.alertType) {
      case AlertType.DANGER:
        return 'alert-danger';
      case AlertType.INFO:
        return 'alert-info';
      case AlertType.SUCCESS:
        return 'alert-success';
      case AlertType.WARNING:
        return 'alert-warning';
    }

  }

  closeModal() {

  }

}
