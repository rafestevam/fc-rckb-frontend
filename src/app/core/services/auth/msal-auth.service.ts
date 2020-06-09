import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { BehaviorSubject } from 'rxjs';
import { OAuthSettings } from 'src/oauth';

@Injectable({
  providedIn: 'root'
})
export class MsalAuthService {

  msTokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(
    private msalService: MsalService
  ) { }

  signIn() {
    this.msalService
      .loginPopup(OAuthSettings.scopes)
      .then(result => {
        console.log(result);
        this.msTokenSubject.next(result);
      })
      .catch(reason => {
        console.log(reason);
      })
  }


}
