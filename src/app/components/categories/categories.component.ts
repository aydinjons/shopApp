import { Component, OnInit } from '@angular/core';
import { category } from './category';
import { faCheck } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  title="Kategoriler"
  check = faCheck;
  constructor() { }
  categories:category[] =[
    {id:1, name:"Elektronik", categoryId:1},
    {id:2, name:"Bilgisayar", categoryId:2},
    {id:3, name:"Sarf Malzemeleri", categoryId:3},
    {id:4, name:"CD/DVD", categoryId:4},
    {id:5, name:"Kitap", categoryId:5},
    {id:6, name:"Kırtasiye", categoryId:6},
    {id:7, name:"Beyaz Eşya", categoryId:7},
    {id:8, name:"Ev Aletleri", categoryId:8},
    {id:9, name:"Müzik", categoryId:9},
    {id:10, name:"Hediyelik", categoryId:10},

  ]
  ngOnInit() {
  }

}
