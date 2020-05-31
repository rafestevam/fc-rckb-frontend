import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { NavItemComponent } from './navigation/nav-item/nav-item.component';

@Component({
  selector: 'fc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isShown: boolean = false;
  @ViewChild('usuariosItem') usuariosItem: NavItemComponent;
  @ViewChild('projetosItem') projetosItem: NavItemComponent;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbar() {
    this.isShown = !this.isShown;
  }

  controlActive(param: string) {

    this.usuariosItem.isActive = param == 'usuarios' ? true : false;
    this.projetosItem.isActive = param == 'projetos' ? true : false;

  }

}
