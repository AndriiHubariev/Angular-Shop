import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './main/products/products.component';
import { EditComponent } from './main/products/edit/edit.component';
import { OrdersComponent } from './main/orders/orders.component';
import { AuthGuard } from '../guards/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminComponent,
        children: [
          { path: '', redirectTo: '/admin/main/products', pathMatch: 'full' },
          { path: 'login', component: LoginComponent },
          {
            path: 'main',
            component: MainComponent,
            canActivate: [AuthGuard],
            children: [
              {
                path: 'products',
                component: ProductsComponent,
              },
              { path: 'products/:mode/:id', component: EditComponent },
              { path: 'products/:mode', component: EditComponent },
              { path: 'orders', component: OrdersComponent },
            ],
          },
          {path: '**', redirectTo: '/admin/main/products', pathMatch: 'fiil'},
        ],
      },
    ]),
  ],
  declarations: [
    AdminComponent,
    OrdersComponent,
    EditComponent,
    ProductsComponent,
    MainComponent,
    LoginComponent,
  ],
  providers: [AuthGuard],
  exports: [RouterModule],
})
export class AdminModule {}
