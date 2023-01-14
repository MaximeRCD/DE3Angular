import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs';
import { Product } from './productSchema';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  apiUrl = "assets/product.json";

  constructor(private http: HttpClient) { }

  getproducts(){
    return this.http.get<Product[]>(this.apiUrl)
  }

  getProductById(name: string){
    return this.http.get<Product[]>(this.apiUrl).pipe(map(Product=>Product.filter(Product=>Product.name === name)))
  }
}
