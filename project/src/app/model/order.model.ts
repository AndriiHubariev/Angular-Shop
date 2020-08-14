import { Cart } from './cart.model';
import { Injectable } from '@angular/core';

@Injectable()
export class Order {
  public id: string;
  public name: string;
  public address: string;
  public city: string;
  public phone: string;
  public zip: string;
  public country: string;
  public shipped = false;
  constructor(public cart: Cart) {}
  clear() {
    this.id = null;
    this.name = this.address = this.city = null;
    this.phone = this.zip = this.country = null;
    this.shipped = false;
    this.cart.clear();
  }
}
