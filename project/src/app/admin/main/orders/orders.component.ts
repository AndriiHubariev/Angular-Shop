import { Component, OnInit } from '@angular/core';
import { OrderRepository } from 'src/app/model/order.repository';
import { Order } from 'src/app/model/order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent {
  includeShipped = false;
  constructor(private repository: OrderRepository) {}
  getOrders(): Order[] {
    return this.repository
      .getOrders()
      .filter((o) => this.includeShipped || !o.shipped);
  }
  markShipped(order: Order) {
    order.shipped = true;
    this.repository.updateOrder(order);
  }
  delete(id: string) {
    this.repository.deleteOrder(id);
  }
}
