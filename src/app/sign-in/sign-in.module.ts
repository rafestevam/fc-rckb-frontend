import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SignInComponent } from './sign-in.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { ValidationMessageModule } from '../shared/components/validation-message/validation-message.module';

@NgModule({
  declarations: [SignInComponent, ForgotPassComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ValidationMessageModule
  ],
  exports: [SignInComponent]
})
export class SignInModule { }
