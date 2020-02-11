import { Component, OnInit } from "@angular/core";
import { BasketService } from "src/app/services/basket.service";

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.css"]
})
export class ShoppingCartComponent implements OnInit {
  products$: any;

  constructor(private basketService: BasketService) {}

  ngOnInit() {
    this.products$ = this.basketService.getProducts();
  }
  delete(item: any) {
    this.basketService.delete(item.id);
  }
}
