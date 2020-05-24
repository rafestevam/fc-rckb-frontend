import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fc-s-menu-item',
  templateUrl: './s-menu-item.component.html',
  styleUrls: ['./s-menu-item.component.scss']
})
export class SMenuItemComponent implements OnInit {

  @Input() target: string = '';
  @Input() menuItem: string = '';

  constructor(
    private router: Router 
  ) { }

  ngOnInit(): void {
  }

  navigateTo(){
    this.router.navigate([`${this.target}`]);
  }

}
