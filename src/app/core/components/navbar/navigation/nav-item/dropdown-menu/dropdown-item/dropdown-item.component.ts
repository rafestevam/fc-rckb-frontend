import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fc-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.scss']
})
export class DropdownItemComponent implements OnInit {

  @Input() dropdownItem: string = '';
  @Input() target: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo() {
    this.router.navigateByUrl(this.target);
  }

}
