import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from '../../services/user/user.service';
import { User } from '../../services/user/user';

@Component({
  selector: 'fc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  user$: Observable<User>;

  constructor(
    private userService: UserService,
    private router: Router,
  ) { 
    this.user$ = userService.getUserLogged();
  }

  
  ngOnInit(): void {
    
  }
  
  ngAfterViewInit(): void {
    
  }

  logout() {
    this.userService.logOut();
    this.router.navigate(['']);
  }

  getAvatarImage(avatar: string) {
    return this.userService.getUserImage(avatar);
  }

}
