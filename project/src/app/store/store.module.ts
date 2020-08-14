import { NgModule } from '@angular/core';
import { StoreComponent } from './store.componet';
import { ModelModule } from '../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParallaxDirective } from './parallax.directive';
import { CartRotateDirective } from './cart-rotate.directive';
import { CartSummaryComponent } from './components/cart/cartSummary.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { RouterModule } from '@angular/router';
import { CartDetailComponent } from './components/cart/cart-detail/cart-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  imports: [
    ModelModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule,
    Ng2PageScrollModule,
    GoogleMapsModule,
  ],
  declarations: [
    StoreComponent,
    ParallaxDirective,
    CartRotateDirective,
    CartSummaryComponent,
    ProductCartComponent,
    CheckoutComponent,
    HomeComponent,
    ContactsComponent,
    CartDetailComponent,
    AboutUsComponent,
  ],
  exports: [StoreComponent],
})
export class StoreModule {}
