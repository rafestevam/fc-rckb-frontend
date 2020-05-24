import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fc-menu-avatar',
  templateUrl: './menu-avatar.component.html',
  styleUrls: ['./menu-avatar.component.scss']
})
export class MenuAvatarComponent implements OnInit {

  @Input() avatarSrc: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
