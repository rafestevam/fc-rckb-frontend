import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fc-dropdown-header',
  templateUrl: './dropdown-header.component.html',
  styleUrls: ['./dropdown-header.component.scss']
})
export class DropdownHeaderComponent implements OnInit {

  @Input() dropdownHeader: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
