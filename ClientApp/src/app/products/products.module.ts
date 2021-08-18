import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [ListComponent, DetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [ListComponent]
})
export class ProductsModule { }
