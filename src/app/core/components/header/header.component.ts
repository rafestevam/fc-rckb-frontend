import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../../services/auth/auth.service';
import { UserService } from '../../services/user/user.service';
import { User } from '../../services/user/user';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'fc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  name: string = '';
  user$: Observable<User>;

  constructor(
    private userService: UserService,
    private router: Router
  ) { 
    this.user$ = userService.getUserLogged();
  }

  ngOnInit(): void {
  }

  logout() {
    this.userService.logOut();
    this.router.navigate(['']);
  }

}
