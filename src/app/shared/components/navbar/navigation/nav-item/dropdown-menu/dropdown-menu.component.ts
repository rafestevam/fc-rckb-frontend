import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fc-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent implements OnInit {

  isShown: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isShown = !this.isShown;
  }

}
