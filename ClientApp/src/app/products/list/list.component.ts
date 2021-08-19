import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { ProductDetailsComponent } from '../details/details.component';

import { ProductService, Product } from '../product.service';

@Component({
  selector: 'products-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ProductListComponent implements OnInit {
  displayedColumns = ['id', 'name', 'price', 'quantity', 'actions'];

  protected products: Product[] = [];

  constructor(private productService: ProductService, public dialog: MatDialog) { }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  openDetails(product: Product): void {
    this.dialog.open(ProductDetailsComponent, {
      width: '40em',
      data: product
    })
  }

  delete(product: Product): void {
    this.productService.deleteProduct(product.id).subscribe();
  }

  ngOnInit() {
    this.getProducts();
  }

}
