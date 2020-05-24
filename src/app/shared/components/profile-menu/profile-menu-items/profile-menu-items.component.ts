import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fc-profile-menu-items',
  templateUrl: './profile-menu-items.component.html',
  styleUrls: ['./profile-menu-items.component.scss']
})
export class ProfileMenuItemsComponent implements OnInit {

  isShown: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.isShown = !this.isShown;
  }

}
