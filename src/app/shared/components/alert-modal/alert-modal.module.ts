import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './alert-modal.component';
import { AlertModalService } from './service/alert-modal.service';



@NgModule({
  declarations: [AlertModalComponent],
  imports: [
    CommonModule
  ],
  exports: [AlertModalComponent],
  providers: [AlertModalService]
})
export class AlertModalModule { }
