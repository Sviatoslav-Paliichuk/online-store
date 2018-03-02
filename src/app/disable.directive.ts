import {Directive, ElementRef, HostBinding} from '@angular/core';

@Directive({
  selector: '[appDisabled]'
})
export class DisableDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.pointerEvents = 'none';
    el.nativeElement.style.opacity = '0.75';
  }
}
