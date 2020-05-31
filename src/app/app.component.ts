import { Component } from '@angular/core';
import { UserService } from './core/services/user/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fc-rckb-frontend';
  logged$: Observable<boolean>;

  constructor(private userService: UserService){
    this.logged$ = userService.getLogged();
  }

}
