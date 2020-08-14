import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appRotate]',
})
export class CartRotateDirective {
  card;
  ofsetY;
  constructor(private el: ElementRef, private r: Renderer2) {}

  @HostListener('mousemove', ['$event']) move(e: {
    offsetHidth;
    offsetWidth;
    offsetX;
    offsetY;
    target;
    parentElement;
  }) {
    if (e.target.classList[0] === 'about') {
      this.card = e.target.parentElement;
    } else if (e.target.classList[0] === 'h3' || e.target.classList[0] === 'span' || e.target.classList[0] === 'p' ){
      this.card = e.target.parentElement.parentElement;
    } else {
      return;
    }
    if (window.innerWidth > 1010) {
      const halfHeight = this.card.offsetHeight / 2;
      // const halfWidth = this.card.offsetWidth;
      this.r.setStyle(
        this.card,
        'transform',
        `rotateX(${-(e.offsetY - halfHeight) / 10}deg) rotateY(${
          (e.offsetX - halfHeight) / 10
        }deg)`
      );
    }
  }
  @HostListener('mouseleave') stopMove() {
    if (this.card) {
      this.r.setStyle(this.card, 'transform', `rotate(0)`);
    }
  }
}
