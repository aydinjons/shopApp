import { Component, OnInit } from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  cartPlus = faCartPlus;
  products: any[];
  total: any = 0;

  constructor(
    private basketService: BasketService
  ) {}
  ngOnInit() {
    this.basketService
      .getProducts()
      .subscribe(items => (this.products = items));
  }
  delete(item: any) {
    this.basketService.delete(item.id);
  }
}
