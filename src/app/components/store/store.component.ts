import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { BasketService } from 'src/app/services/basket.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { Product } from '../products/product';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  cartPlus = faCartPlus;
  products$: Observable<any[]>;
  total: any = 0;


  constructor(
    private basketService: BasketService,
    private localstorageService: LocalstorageService
  ) {

  }
  addedItems: any;
  ngOnInit() {
    this.products$ = this.localstorageService.observe('products');
    this.localstorageService.observe('products').subscribe(item => this.addedItems = item);
    console.log(this.addedItems);

  }
  delete(products: string, item: any) {
    this.localstorageService.remove('products', item);
  }
}
