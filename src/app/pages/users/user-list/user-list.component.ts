import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/core/services/user/user';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'fc-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService
      .getUsers()
      .subscribe(
        users => this.users = this.users.concat(users)
      );
  }

}
