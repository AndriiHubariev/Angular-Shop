import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataRepository } from '../model/data-repository';
import { Product } from '../model/product.model';
import { fromEvent } from 'rxjs';
import { menuAnimation, slideAnim, ul, searchInput } from '../app.animations';
import { Cart } from '../model/cart.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: 'store.component.html',
  styleUrls: ['./store.component.scss'],
  animations: [menuAnimation, ul, searchInput],
})
export class StoreComponent implements OnInit{
  menuToggle = false;
  moveSlide = 0;
  searchWindow = false;
  constructor(private dataRepository: DataRepository, public cart: Cart, private router: Router) {}

  ngOnInit() {
    fromEvent(window, 'resize').subscribe(() => this.menuToggle = false);
  }
  showMenu(e) {
    if (!this.menuToggle) {
      this.menuToggle = true;
    } else {
      this.menuToggle = false;
    }
  }
}

