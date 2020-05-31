import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileMenuModule } from '../shared/components/profile-menu/profile-menu.module';
import { HeaderComponent } from './components/header/header.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './services/auth/request.interceptor';


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
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
