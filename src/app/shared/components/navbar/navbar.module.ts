import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavItemComponent } from './navigation/nav-item/nav-item.component';
import { DropdownMenuComponent } from './navigation/nav-item/dropdown-menu/dropdown-menu.component';
import { DropdownItemComponent } from './navigation/nav-item/dropdown-menu/dropdown-item/dropdown-item.component';
import { DropdownHeaderComponent } from './navigation/nav-item/dropdown-menu/dropdown-header/dropdown-header.component';
import { IconsModule } from './icons/icons.module';



@NgModule({
  declarations: [
    NavbarComponent,
    ButtonToggleComponent,
    NavigationComponent,
    NavItemComponent,
    DropdownMenuComponent,
    DropdownItemComponent,
    DropdownHeaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    IconsModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
