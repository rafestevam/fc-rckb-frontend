import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'fc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isShown: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbar() {
    this.isShown = !this.isShown;
  }

}
