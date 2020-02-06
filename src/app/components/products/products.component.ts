import { Component, OnInit, defineInjectable } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from 'src/app/services/alertifyService';
import { BasketService } from 'src/app/services/basket.service';
import { AppResolver } from 'src/app/services/app-resolver.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products =[];


  constructor(
    private basketService: BasketService,
    private productList:AppResolver,
    private localstorageService:LocalstorageService
    ) { }

  title = "Ürün Listesi";
  filterText = "";


  ngOnInit() {
    this.products = this.productList.products
  }

  addToCard(product) {
    this.basketService.add(product);
  }
}
