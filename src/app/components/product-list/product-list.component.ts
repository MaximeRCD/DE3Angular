import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/service/productSchema';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router){}

  products_list :Product[] = [];
  //products : Observable<Product[]> | undefined;
  ngOnInit(): void {
    this.productService.getproducts().subscribe((data : Product[])=>
    {
      data.forEach(prod => this.products_list.push(prod))
    });
  }

  onClickDetail(name:string){
    this.router.navigate(['/detail'])
  }

  
}
