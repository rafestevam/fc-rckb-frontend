import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fc-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem = '';
  @Input() target = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo() {
    this.router.navigate([this.target]);
  }

}
