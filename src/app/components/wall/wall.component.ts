import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasketService } from 'src/app/services/basket.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {
  selectedCategory: any;
  constructor(
    private actr: ActivatedRoute,
    private basketService: BasketService,
    private localstorageService: LocalstorageService

  ) {
  }
  ngOnInit() {
    this.actr.data.subscribe(res => this.selectedCategory = res.rs);
  }
  addToCard(product) {
    this.localstorageService.set("products", product)
    this.basketService.add(product);
  }

}
