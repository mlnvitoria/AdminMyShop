import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Product } from '../product.service';

@Component({
  selector: 'product-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class ProductDetailsComponent {
  private product: Product;

  constructor(
    public dialogRef: MatDialogRef<ProductDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product)
  {
    this.product = data;
  }
}
