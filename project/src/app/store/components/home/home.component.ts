import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { DataRepository } from 'src/app/model/data-repository';
import { CartSummaryComponent } from '../cart/cartSummary.component';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { slideAnim } from 'src/app/app.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [slideAnim],
})
export class HomeComponent implements OnInit {
  constructor(
    private dataRepository: DataRepository,
    private cart: Cart,
    private router: Router
  ) {}
  footerEmail;
  selectedCategory: string;
  moveSlide = 0;
  ngOnInit(): void {
    setInterval(() => {
      if (this.moveSlide === 3) {
        this.moveSlide = 0;
      }
      this.moveSlide += 1;
    }, 2000);
  }

  get products(): Product[] {
    return this.dataRepository.getProducts(this.selectedCategory);
  }
  get categories() {
    return this.dataRepository.categories;
  }
  addProductToCart(product: Product) {
    this.cart.addLine(product);
  }
  sendEmail() {
    if (this.footerEmail) {
      console.log(this.footerEmail);
      this.footerEmail = '';
    }
  }
}
