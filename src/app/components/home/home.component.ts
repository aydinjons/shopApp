import { Component, OnInit } from '@angular/core';
import { AppResolver } from 'src/app/services/app-resolver.service';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private basketService: BasketService) { }

  ngOnInit() {

  }
    addToCard(product) {

    this.basketService.add(product);
  }

}
