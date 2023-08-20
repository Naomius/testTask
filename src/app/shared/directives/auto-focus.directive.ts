import {AfterViewInit, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[AutoFocus]'
})
export class AutoFocusDirective implements AfterViewInit{

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.el.nativeElement.focus()
    },500)
  }

}
