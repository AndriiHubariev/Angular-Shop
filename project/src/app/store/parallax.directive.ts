import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallax]',
})
export class ParallaxDirective {
   x: number;
   y: number;
  constructor(private el: ElementRef, private r: Renderer2) {}

  @HostListener('mousemove', ['$event']) move(e: { clientX; clientY }) {
    this.x = e.clientX;
    this.y = e.clientY;
    if (window.innerWidth > 1010) {
      this.r.setStyle(this.el.nativeElement, 'transform', `translatex(${-this.x / 5}px)`);
      this.r.setStyle(this.el.nativeElement.children[0].children[0], 'transform', `translateX(${this.x / 10}px)`);
      this.r.setStyle(this.el.nativeElement.children[1], 'transform', `translateX(${this.x / 30}px)`);
    } else {
      return;
    }
  }
  @HostListener('mouseleave', ['$event']) enter() {
    this.r.setStyle(this.el.nativeElement, 'transform', `translatex(${0}px)`);
    this.r.setStyle(this.el.nativeElement.children[0].children[0], 'transform', `translateX(${0}px)`);
    this.r.setStyle(this.el.nativeElement.children[1], 'transform', `translateX(${0}px)`);
  }
}
