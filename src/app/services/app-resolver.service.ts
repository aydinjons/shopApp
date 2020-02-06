import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { of } from 'rxjs';
import { Product } from '../components/products/product';
import productData from '../../app/components/products/productData.json';

@Injectable({
  providedIn: 'root'
})

export class AppResolver implements Resolve<any> {
  products: any = productData



constructor() {
  console.log(this.products);
 }
  resolve(route: ActivatedRouteSnapshot) {
   const categoryId = route.params.id
   return   of(this.products.filter(item => item.categoryId == categoryId))
  }


}
