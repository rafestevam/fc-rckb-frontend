import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'fc-profile-menu-avatar',
  templateUrl: './profile-menu-avatar.component.html',
  styleUrls: ['./profile-menu-avatar.component.scss']
})
export class ProfileMenuAvatarComponent implements OnInit {

  @Input() avatarImg = '';
  @Input() name = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  getInitialsFromName(name: string){
    console.log(name);
    return this.userService.getUserInitials(name);
  }

  getProfileAvatar(avatarImg: string) {
    return this.userService.getUserImage(avatarImg);
  }

}
