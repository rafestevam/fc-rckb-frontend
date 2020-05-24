import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fc-s-menu-header',
  templateUrl: './s-menu-header.component.html',
  styleUrls: ['./s-menu-header.component.scss']
})
export class SMenuHeaderComponent implements OnInit {

  @Input() menuTitle: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
