import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileMenuComponent } from './profile-menu.component';
import { ProfileMenuAvatarComponent } from './profile-menu-avatar/profile-menu-avatar.component';
import { ProfileMenuItemsComponent } from './profile-menu-items/profile-menu-items.component';
import { MenuItemComponent } from './profile-menu-items/menu-item/menu-item.component';
import { ShowOnHoverDirective } from './profile-menu-items/show-on-hover.directive';



@NgModule({
  declarations: [
    ProfileMenuComponent, 
    ProfileMenuAvatarComponent, 
    ProfileMenuItemsComponent, 
    MenuItemComponent,
    ShowOnHoverDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProfileMenuComponent,
    ProfileMenuAvatarComponent,
    ProfileMenuItemsComponent,
    MenuItemComponent
  ]
})
export class ProfileMenuModule { }
