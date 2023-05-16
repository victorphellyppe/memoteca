import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {
  @Input() buttonText = 'Button';
  @Input() buttonType: 'primary' | 'danger' | 'warn' = 'primary';
  @Input() buttonDisable : boolean = false;

  @Output() buttonAction: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
