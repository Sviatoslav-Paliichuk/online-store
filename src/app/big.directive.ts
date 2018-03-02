import {Directive, ElementRef, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBig]',
  exportAs: 'appBigDirective'
})
export class BigDirective {

  @HostBinding('class')
  elementClass = 'btn';

  constructor() {

  }
}
