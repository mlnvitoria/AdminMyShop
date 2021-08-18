import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductService, Product } from '../product.service';

@Component({
  selector: 'products-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  protected products: Product[] = [];

  constructor(private productService: ProductService) { }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  delete(product: Product): void {
    this.productService.deleteProduct(product.Id).subscribe();
  }

  ngOnInit() {
    this.getProducts();
  }

}
