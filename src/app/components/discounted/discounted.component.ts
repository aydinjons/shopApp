import { Component, OnInit } from '@angular/core';
import { Image } from './Image';
@Component({
  selector: 'app-discounted',
  templateUrl: './discounted.component.html',
  styleUrls: ['./discounted.component.css']
})
export class DiscountedComponent implements OnInit {
  

 
images = [1, 2, 3].map(() => `/assets/images/discounted/${Math.floor(Math.random() * 3)}.png`);

  constructor() { }
  
  ngOnInit() {
  }

}


