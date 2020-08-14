import { Injectable } from '@angular/core';
import { Product } from './product.model';
@Injectable()
export class Cart {
  public lines: CartLine[] = [];
  public itemCount = 0;
  public cartPrice = 0;
  addLine(product: Product, quantity: number = 1) {
    const l = this.lines.find((line) => line.product.id === product.id);
    if (l !== undefined) {
      l.quantity += quantity;
    } else {
      this.lines.push(new CartLine(product, quantity));
    }
    this.recalculate();
  }
  updateQuantity(product: Product, quantity: number) {
    const l = this.lines.find((line) => line.product.id === product.id);
    if (l !== undefined) {
      l.quantity = Number(quantity);
    }
    this.recalculate();
  }
  removeLine(id: string) {
    this.lines = this.lines.filter(l => l.product.id !== id);
    this.recalculate();
  }
  clear() {
    this.lines = [];
    this.itemCount = 0;
    this.cartPrice = 0;
  }
  private recalculate() {
    this.itemCount = 0;
    this.cartPrice = 0;
    this.lines.forEach((l) => {
      this.itemCount += l.quantity;
      this.cartPrice += l.quantity * l.product.price;
    });
  }
}
export class CartLine {
  constructor(public product: Product, public quantity: number) {}
  get lineTotal() {
    return this.quantity * this.product.price;
  }
}
