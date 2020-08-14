import { Injectable } from '@angular/core';
import { DataSource } from './data-source';
import { Product } from './product.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable() 
export class DataRepository {
    allProducts: Product[] = [];
    categories = [];
    constructor(private dataSource: DataSource) {
        dataSource.getProducts().subscribe((products: Product[]) => {
            this.allProducts = products;
            this.categories = products.map(p => p.category.toLowerCase().replace(/\s+/g, ''))
            .filter((p, index, array) => array.indexOf(p) === index).sort();
        });
    }

    getProducts(category: string = null): Product[]{
        return this.allProducts.filter(p => category === null || category === p.category.toLowerCase().replace(/\s+/g, ''));
    }

    getProduct(id: string) {
        return this.allProducts.find(p => p.id === id);
    }

    saveProduct(product: Product) {
        return this.dataSource.saveProduct(product).subscribe(p => {this.allProducts.push(p)});
    }
    updateProduct(product) {
        this.allProducts = this.allProducts.filter(p => p.id !== product.id);
        return this.dataSource.updateProduct(product).subscribe(p => this.allProducts.push(p));
    }

    deleteProduct(id: string) {
        this.allProducts = this.allProducts.filter(p => p.id !== id);
        return this.dataSource.deleteProduct(id).subscribe();
    }
}
