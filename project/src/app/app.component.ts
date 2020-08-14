import { Component, OnInit } from '@angular/core';
import { DataRepository } from './model/data-repository';
import { Product } from './model/product.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }

}