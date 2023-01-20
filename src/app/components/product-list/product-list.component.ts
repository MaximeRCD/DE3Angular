/*
* Ce fichier déclare le composant qui affiche les
* l'ensemble des produits disponibles sur le site.
* Chacun des produits est cliquable et renvoie
* vers le détail du produit en question.
*/

import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/service/productSchema';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  products_list :Product[] = [];

  constructor(private productService: ProductService, private router: Router){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data : Product[])=>
      {
        data.forEach(prod => this.products_list.push(prod))
      });
  }

  onClickDetail(name:string) {
    this.router.navigate([`/product-detail/${name}`])
  }
}
