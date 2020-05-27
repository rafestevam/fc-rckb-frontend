import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileMenuModule } from '../shared/components/profile-menu/profile-menu.module';
import { HeaderComponent } from './components/header/header.component';
import { NavbarModule } from './components/navbar/navbar.module';


@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    NavbarModule,
    ProfileMenuModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
