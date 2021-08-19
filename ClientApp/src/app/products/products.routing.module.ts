import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizeGuard } from '../../api-authorization/authorize.guard';

import { MatDialogModule, MatDividerModule, MatIconModule, MatTableModule } from '@angular/material';

import { ProductListComponent } from './list/list.component';
import { ProductDetailsComponent } from './details/details.component';

const productsRoutes: Routes = [
  {
    path: 'products',
    component: ProductListComponent,
    canActivate: [AuthorizeGuard]
  },
  { path: 'products/:id', component: ProductDetailsComponent },
];

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
  ],
  imports: [
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    MatTableModule,
    CommonModule,

    RouterModule.forRoot(productsRoutes),
  ],
})
export class ProductsRoutingModule { }
