import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { UsersRoutingModule } from './users-routing.module';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { PageformHeaderModule } from 'src/app/shared/components/pageform-header/pageform-header.module';
import { IconsModule } from 'src/app/core/components/navbar/icons/icons.module';


@NgModule({
  declarations: [UserFormComponent, UserListComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    PageformHeaderModule,
    IconsModule
  ],
  exports: [
    UserFormComponent,
    UserListComponent
  ]
})
export class UsersModule { }
