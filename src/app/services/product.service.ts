import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_BASE_URL ="https://fakestoreapi.com"

  constructor( private http: HttpClient) { }




getProduct(){
  console.log("ProductService.getProduct")
  return this.http.get(`${this.API_BASE_URL}/products`);
}
getProductDetails(prodId:string){
  return this.http.get(`${this.API_BASE_URL}/products/${prodId}`)
}
}
