import { Component, OnInit } from '@angular/core';
import { DataRepository } from 'src/app/model/data-repository';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  constructor(private repository: DataRepository) {}
  getProducts(): Product[] {
    return this.repository.getProducts();
  }
  deleteProduct(id: string) {
    this.repository.deleteProduct(id);
  }
}
