import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { DataSource } from './data-source';
@Injectable()
export class OrderRepository {
  private loaded = false;
  orders: Order[] = [];
  constructor(private dataSource: DataSource) {}

  loadOrders() {
    this.loaded = true;
    this.dataSource.getOrders().subscribe((orders) => this.orders = orders);
  }

  getOrders(): Order[] {
    if (!this.loaded) {
      this.loadOrders();
    }
    return this.orders;
  }

  saveOrder(order) {
    return this.dataSource.saveOrder(order).subscribe();
  }

  updateOrder(order: Order) {
    this.dataSource.updateOrder(order).subscribe((ordr) => {
      this.orders.splice(
        this.orders.findIndex((o) => o.id === order.id),
        1,
        ordr
      );
    });
  }

  deleteOrder(id: string) {
    this.dataSource.deleteOrder(id).subscribe((order) => {
      this.orders = this.orders.filter((or) => or.id !== id);
    });
  }
}
