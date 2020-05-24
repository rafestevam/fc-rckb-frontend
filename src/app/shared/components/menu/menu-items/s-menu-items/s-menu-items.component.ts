import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fc-s-menu-items',
  templateUrl: './s-menu-items.component.html',
  styleUrls: ['./s-menu-items.component.scss']
})
export class SMenuItemsComponent implements OnInit {

  isShown: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isShown = !this.isShown;
  }

}
