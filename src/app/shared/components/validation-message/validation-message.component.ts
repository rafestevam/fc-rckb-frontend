import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fc-validation-message',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.scss']
})
export class ValidationMessageComponent implements OnInit {

  @Input() message: string = '';

  constructor() {}

  ngOnInit(): void {
  }

}
