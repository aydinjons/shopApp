import { LocalstorageService } from 'src/app/services/localstorage.service';
import { ProductFilterPipe } from './../components/products/product-filter.pipe';
import { AlertifyService } from './alertifyService';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BasketService {
  products = {};
  products$ = new BehaviorSubject([]);
  totalPrice: any;

  constructor(
    private alertifyService: AlertifyService,
    private localstorageService: LocalstorageService
  ) { }

  add(product) {
    product = this.products[product.name] || product;
    const count = (product.count || 0) + 1;
    this.products[product.name] = { ...product, count };

    const productsArray = Object.values(this.products);
    this.products$.next(productsArray);
    this.alertifyService.success(`${product.name} added`);
    this.localstorageService.set('products', productsArray);
  }

  getProducts() {
    return this.products$.asObservable();
  }

}
