import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Product } from './product.model';
import { Observable } from 'rxjs';
import { Order } from './order.model';
export interface respons {
  name: string;
}

@Injectable()
export class DataSource {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(`${environment.firebaseConfig.databaseURL}/products.json`)
      .pipe(
        map((res: { [key: string]: any }) => {
          return Object.keys(res).map((key) => ({
            ...res[key],
            id: key,
          }));
        })
      );
  }
  saveProduct(product: Product): Observable<Product> {
    return this.http
      .post<Product>(
        `${environment.firebaseConfig.databaseURL}/products.json`,
        product
      )
      .pipe(
        map((res: respons) => {
          const newProd = {
            ...product,
            id: res.name,
          };
          return newProd;
        })
      );
  }

  deleteProduct(id): Observable<Product> {
    return this.http.delete(`${environment.firebaseConfig.databaseURL}/products/${id}.json`);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.patch(`${environment.firebaseConfig.databaseURL}/products/${product.id}.json`, product);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${environment.firebaseConfig.databaseURL}/orders.json`)
    .pipe(
      map((res: { [key: string]: any }) => {
        return Object.keys(res).map((key) => ({
          ...res[key],
          id: key,
        }));
      })
    );
  }

  deleteOrder(id): Observable<Order> {
    return this.http.delete<Order>(`${environment.firebaseConfig.databaseURL}/orders/${id}.json`);
  }

  updateOrder(order: Order): Observable<Order> {
    return this.http.patch<Order>(`${environment.firebaseConfig.databaseURL}/orders/${order.id}.json`, order);
  }

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${environment.firebaseConfig.databaseURL}/orders.json`, order);
  }
}
