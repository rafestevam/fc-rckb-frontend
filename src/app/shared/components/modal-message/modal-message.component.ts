import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'fc-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.scss']
})
export class ModalMessageComponent implements OnInit {

  @Output() open = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.open.emit(null);
  }

}
