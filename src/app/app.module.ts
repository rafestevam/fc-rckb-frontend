import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NavbarModule } from './core/components/navbar/navbar.module';
import { SignInModule } from './sign-in/sign-in.module';
import { AlertModalModule } from './shared/components/alert-modal/alert-modal.module';
import { HttpClientModule } from '@angular/common/http';
import { MsalModule } from '@azure/msal-angular';
import { OAuthSettings } from 'src/oauth';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    NavbarModule,
    SignInModule,
    AlertModalModule,
    MsalModule.forRoot({
      clientID: OAuthSettings.appId
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
