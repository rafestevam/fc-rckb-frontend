import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fc-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {

  @Input() navItem: string = '';
  @Input() icon: string = '';
  @Input() isActive: boolean = false;
  @Output() linkClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  activeEmitter() {
    this.linkClicked.emit();
  }

}
