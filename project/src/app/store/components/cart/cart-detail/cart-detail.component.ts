import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';
import { cartRemoving, show } from 'src/app/app.animations';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss'],
  animations: [cartRemoving, show]
})
export class CartDetailComponent implements OnInit {
  footerEmail;

  constructor(public cart: Cart) { }

  ngOnInit(): void {
    document.documentElement.scrollTop = 0;
  }

  sendEmail() {
    if (this.footerEmail) {
      console.log(this.footerEmail);
      this.footerEmail = '';
    }
  }

}
