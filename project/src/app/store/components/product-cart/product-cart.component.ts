import {
  Component,
  OnInit,
  ContentChildren,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataRepository } from 'src/app/model/data-repository';
import { Product } from 'src/app/model/product.model';
import { Cart } from 'src/app/model/cart.model';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss'],
})
export class ProductCartComponent implements OnInit, AfterViewInit {
  currentRate = 3;
  footerEmail;
  @ViewChild('cont') cont;

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private repository: DataRepository,
    private cart: Cart
  ) {}
  ngAfterViewInit(): void {}

  ngOnInit(): void {
    document.documentElement.scrollTop = 0;
    this.route.params.subscribe((params: Params) => {
      this.product = this.repository.getProduct(params.id);
    });
  }

  addProductToCart(p) {
    this.cart.addLine(p);
  }
  sendEmail() {
    if (this.footerEmail) {
      console.log(this.footerEmail);
      this.footerEmail = '';
    }
  }
}
