import { Component } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';
@Component({
  selector: 'app-cart-summary',
  styleUrls: ['cartSummary.component.scss'],
  templateUrl: 'cartSummary.component.html',
})
export class CartSummaryComponent {
  constructor(public cart: Cart) {}
}
