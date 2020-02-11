import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

 images = [1, 2, 3].map(() => `/assets/images/banners/${Math.floor(Math.random() * 4)}.jpg`);

  constructor() { }

  ngOnInit() {
  }

}

