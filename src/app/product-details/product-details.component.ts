import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  implements OnInit {
  ProductId:string | null ='';
  ProductDetails:any=undefined;

  constructor(private route:ActivatedRoute,
    private ProductService:ProductService) {}

  ngOnInit(): void {
    this.loadDetailsproducts();
  }  
   
loadDetailsproducts(){
  this.ProductId=this.route.snapshot.paramMap.get('ProductId');
  if(this.ProductId != null){
    this.ProductService.getProductDetails(this.ProductId).subscribe(data=>{
      this.ProductDetails=data;
      console.log("single product",data)
    })
  }
}


}
