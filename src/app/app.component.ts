import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './core/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fc-rckb-frontend';
  //loggedIn: boolean = true;
  auth$: Observable<boolean>;

  constructor(private authService: AuthService){
    this.auth$ = authService.getAuth();
  }
}
