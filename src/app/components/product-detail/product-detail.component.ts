import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/service/productSchema';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  
  product!:  Product;
  id: any;
  constructor(private route: ActivatedRoute, private productService: ProductService) {}
  
  ngOnInit(): void {
    //this.id="hero Product"
    this.id = this.route.snapshot.paramMap.get('id')
    this.productService.getProductById(this.id).subscribe((data : Product[])=>
    {
      data.forEach(prod => this.product=prod)
    });
  }


}
