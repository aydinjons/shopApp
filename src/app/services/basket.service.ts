import { LocalstorageService } from 'src/app/services/localstorage.service';
import { AlertifyService } from './alertifyService';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  products = {};
  products$ = new BehaviorSubject({});
  totalPrice: any;

  constructor(
    private alertifyService: AlertifyService,
    private localstorageService: LocalstorageService
  ) {
    this.products = this.localstorageService.get('products');
    this.products$.next(this.products);
  }

  add(product) {
    product = this.products[product.id] || product;
    const count = (product.count || 0) + 1;
    this.products[product.id] = { ...product, count };

    this.products$.next(this.products);
    this.alertifyService.success(`${product.name} added`);
    this.localstorageService.set('products', this.products);
  }

  delete(id) {
    delete this.products[id];
    this.products$.next(this.products);
    this.localstorageService.set('products', this.products);
  }

  getProducts() {
    return this.products$.asObservable().pipe(map(list => Object.values(list)));
  }
}
