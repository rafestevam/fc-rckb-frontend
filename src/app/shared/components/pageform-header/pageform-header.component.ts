import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fc-pageform-header',
  templateUrl: './pageform-header.component.html',
  styleUrls: ['./pageform-header.component.scss']
})
export class PageformHeaderComponent implements OnInit {

  @Input() headerPreTitle: string = '';
  @Input() headerTitle: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
