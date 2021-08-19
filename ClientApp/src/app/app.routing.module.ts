import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizeGuard } from '../api-authorization/authorize.guard';

import { HomeComponent } from './home/home.component';
import { ProductsRoutingModule } from './products/products.routing.module';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthorizeGuard] },
];

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ProductsRoutingModule
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
