import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {

  @Input() primaryLabel;
  @Input() secondLabel;


  @Output() primaryFunction = new EventEmitter<any>();
  @Output() secondFunction = new EventEmitter<any>();

  constructor() {}


  primaryAction(event) {
    this.primaryFunction.emit(event);
  }

  secondaryAction(event) {
    this.secondFunction.emit(event);
  }

}
