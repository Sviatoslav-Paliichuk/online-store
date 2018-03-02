import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {
  @Input() className = '';
  @Input() type = 'button';
  @Input() value = 'Submit';
  @Output() onClickEvent: EventEmitter<any> = new EventEmitter<any>();
}
