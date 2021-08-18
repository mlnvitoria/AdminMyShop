import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductService, Product } from '../product.service';

@Component({
  selector: 'product-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product: Product;
  @Input() id?: number;

  constructor(private productService: ProductService) { }

  get(id: number): void {
    this.productService.getProduct(id).subscribe(product => this.product = product);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.productService.addProduct({ Name: name, } as Product);
  }

  ngOnInit() {
    this.get(this.id);
  }

}
