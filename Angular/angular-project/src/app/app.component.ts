import { Component, OnInit } from '@angular/core';
import {Product } from './product.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  product1: Product;
  product2: Product;
  product3: Product;
  products: Product[];
  category:string;

  constructor(){ }

  ngOnInit(){

    this.category = 'show-all';

    this.product1={
      pid:1,
      pname: 'Oppo A12',
      price: 12500,
      categoryName: 'mobile'
    };

    this.product2={
      pid:2,
      pname: 'HP Laptop L8',
      price: 53500,
      categoryName: 'laptop'
    };

    this.product3={
      pid:3,
      pname: 'Apple IPhone 6',
      price: 20500,
      categoryName: 'mobile'
    };

    this.productArrayInit();
  }

  productArrayInit(){
    this.products = [];
    this.products.push(this.product1); //[p1]
    this.products.push(this.product2); //[p1,p2]
    this.products.push(this.product3); //[p1,p2,p3]
  }

  onCategorySelect(){
    this.productArrayInit(); //[p1,p2,p3]

    if(this.category != 'show-all')
        this.products = this.products
                    .filter(p=>p.categoryName == this.category);
  }
}
