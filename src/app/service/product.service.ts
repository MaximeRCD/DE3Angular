/*
* Ce fichier contient la définition du service qui
* s'occupe de la récupération des produits depuis
* le fichier (json) correspondants placé dans le
* dossier ./src/assets
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Product } from './productSchema';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  productUrl = "assets/product.json";

  constructor(private http: HttpClient) {}

  getProducts(){
    return this.http.get<Product[]>(this.productUrl)
  }

  getProductById(name: string){
    return this.http.get<Product[]>(this.productUrl).pipe(map(Product=>Product.filter(Product=>Product.name === name)))
  }
}
