import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private el: ElementRef, private r: Renderer2) {
    // el.nativeElement.style.color = 'red'
    //r.setStyle(el.nativeElement, 'color', 'blue')
  }

  @HostListener('mouseenter', ['$event']) onEnter() {
    this.r.setStyle(this.el.nativeElement, 'color', 'blue')
  }
  @HostListener('mouseleave', ['$event']) onLeave() {
    this.r.setStyle(this.el.nativeElement, 'color', 'red')
  }
}
