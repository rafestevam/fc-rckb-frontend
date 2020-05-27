import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fc-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {

  @Input() navItem: string = '';
  @Input() icon: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
