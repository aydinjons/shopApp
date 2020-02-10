import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  products$: any;

  constructor(
    private basketService: BasketService,
    private localstorageService: LocalstorageService
  ) { }

  ngOnInit() {
    this.products$ = this.localstorageService.observe('products');
  }
  delete(products: string, item: any) {
    this.localstorageService.remove('products', item);
  }

}
