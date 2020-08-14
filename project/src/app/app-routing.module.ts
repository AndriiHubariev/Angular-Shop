import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.componet';
import { CheckoutComponent } from './store/components/checkout/checkout.component';
import { ProductCartComponent } from './store/components/product-cart/product-cart.component';
import { HomeComponent } from './store/components/home/home.component';
import { ContactsComponent } from './store/components/contacts/contacts.component';
import { CartDetailComponent } from './store/components/cart/cart-detail/cart-detail.component';
import { StoreGuard } from './guards/store.guard';
import { AboutUsComponent } from './store/components/about-us/about-us.component';

const routes: Routes = [
  {
    path: '',
    component: StoreComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, canActivate: [StoreGuard] },
      {
        path: 'contacts',
        component: ContactsComponent,
        canActivate: [StoreGuard],
      },
      {
        path: 'about',
        component: AboutUsComponent,
        canActivate: [StoreGuard],
      },
      {
        path: 'product/:id',
        component: ProductCartComponent,
        canActivate: [StoreGuard],
      },
      { path: 'cart', component: CartDetailComponent, canActivate: [StoreGuard] },
      { path: 'checkout', component: CheckoutComponent, canActivate: [StoreGuard] },
    ],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule)
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  providers: [StoreGuard],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
