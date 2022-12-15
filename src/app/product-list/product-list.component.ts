import { Component,OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent  implements OnInit{
  Products:product[]=[];
  constructor(private ProductService:ProductService){}




ngOnInit():void{
  console.log("ngOnInit")
  this.loadProductData();
}

loadProductData(){
  console.log("loadProductData")
  this.ProductService.getProduct().subscribe((data:any)=>{
    this.Products=data;
    console.log("loadProductData.subscribe:",data);
  })
}

}