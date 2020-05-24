import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ProfileMenuModule } from '../shared/components/profile-menu/profile-menu.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    ProfileMenuModule
  ],
  exports: [HeaderComponent]
})
export class CoreModule { }
