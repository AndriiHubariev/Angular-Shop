import { Component, OnInit } from '@angular/core';
import { OrderRepository } from 'src/app/model/order.repository';
import { Order } from 'src/app/model/order.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { show, showPopup } from 'src/app/app.animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  animations: [showPopup],
})
export class CheckoutComponent implements OnInit {
  footerEmail;
  submited = false;
  formValid = true;
  form: FormGroup;
  constructor(
    public orderRepository: OrderRepository,
    public order: Order,
    private router: Router
  ) {}

  ngOnInit(): void {
    document.documentElement.scrollTop = 0;
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(6)]),
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      zip: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.minLength(3),
      ]),
      country: new FormControl('', [Validators.required]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]*'),
      ]),
    });
  }

  submit() {
    if (this.form.invalid) {
      this.formValid = false;
      return;
    }
    this.order.name = this.form.value.name;
    this.order.city = this.form.value.city;
    this.order.phone = this.form.value.phone;
    this.order.country = this.form.value.country;
    this.order.zip = this.form.value.zip;
    this.order.address = this.form.value.address;
    this.submited = true;
    this.orderRepository.saveOrder(this.order);
    this.order.clear(), (this.formValid = false);
    this.form.reset();
    setTimeout(() => {
      this.submited = false;
      this.router.navigate(['/home']);
    }, 2500);
  }
  sendEmail() {
    if (this.footerEmail) {
      console.log(this.footerEmail);
      this.footerEmail = '';
    }
  }
}
