import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DataRepository } from 'src/app/model/data-repository';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent {
  editing = false;
  product: Product = new Product();
  img;

  constructor(
    private repository: DataRepository,
    private router: Router,
    activeRoute: ActivatedRoute
  ) {
    this.editing = activeRoute.snapshot.params.mode === 'edit';
    if (this.editing) {
      Object.assign(
        this.product,
        repository.getProduct(activeRoute.snapshot.params.id)
      );
    }
  }
  update(form: NgForm) {
    this.repository.updateProduct(this.product);
    this.router.navigateByUrl('/admin/main/products');
  }
  save(form: NgForm) {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl('/admin/main/products');
  }
}
