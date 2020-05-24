import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuAvatarComponent } from './menu-avatar/menu-avatar.component';
import { RouterModule } from '@angular/router';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { MenuItemComponent } from './menu-items/menu-item/menu-item.component';
import { SMenuItemsComponent } from './menu-items/s-menu-items/s-menu-items.component';
import { SMenuItemComponent } from './menu-items/s-menu-items/s-menu-item/s-menu-item.component';
import { SMenuHeaderComponent } from './menu-items/s-menu-items/s-menu-header/s-menu-header.component';



@NgModule({
  declarations: [
    MenuComponent, 
    MenuAvatarComponent, 
    MenuItemsComponent, 
    MenuItemComponent, 
    SMenuItemsComponent, 
    SMenuItemComponent, 
    SMenuHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
