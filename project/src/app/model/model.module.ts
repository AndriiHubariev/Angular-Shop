import { NgModule } from '@angular/core';
import { DataSource } from './data-source';
import { DataRepository } from './data-repository';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';



@NgModule({
    providers: [DataSource, DataRepository, Cart, Order, OrderRepository]
})
export class ModelModule {}
