import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  @Input('appStyle') color: string = 'blue'
  // @ts-ignore
  @Input() dStyles: {
    fontWeight?:string,
    border?:string,
    borderRadius?:string
  }

  constructor(private el: ElementRef, private r: Renderer2) {
    // el.nativeElement.style.color = 'red'
    //r.setStyle(el.nativeElement, 'color', 'blue')
    console.log(this.color)
  }

  @HostListener('mouseenter', ['$event']) onEnter(color:string) {
    this.r.setStyle(this.el.nativeElement, 'color', this.color)
    this.r.setStyle(this.el.nativeElement, 'fontWeight', this.dStyles.fontWeight)
    this.r.setStyle(this.el.nativeElement, 'border', this.dStyles.border)
    this.r.setStyle(this.el.nativeElement, 'borderRadius', this.dStyles.borderRadius)
  }

  @HostListener('mouseleave', ['$event']) onLeave(color:string) {
    this.r.setStyle(this.el.nativeElement, 'color', null)
    this.r.setStyle(this.el.nativeElement, 'fontWeight', null)
    this.r.setStyle(this.el.nativeElement, 'border', null)
    this.r.setStyle(this.el.nativeElement, 'borderRadius', null)

  }
}
