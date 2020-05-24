import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fc-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() icon: string = '';
  @Input() menuItem: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
