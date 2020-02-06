import { Product } from './../components/products/product';
import { Injectable } from '@angular/core';
declare let alertify:any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {
  constructor() { }

success(product:string){
  alertify.success(product)
 
}

}
