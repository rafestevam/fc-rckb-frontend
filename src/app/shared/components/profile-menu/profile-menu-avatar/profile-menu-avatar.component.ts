import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fc-profile-menu-avatar',
  templateUrl: './profile-menu-avatar.component.html',
  styleUrls: ['./profile-menu-avatar.component.scss']
})
export class ProfileMenuAvatarComponent implements OnInit {

  @Input() avatarSrc = '';

  constructor() { }

  ngOnInit(): void {
  }

}
