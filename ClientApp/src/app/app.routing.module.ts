import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizeGuard } from '../api-authorization/authorize.guard';

import { HomeComponent } from './home/home.component';
import { ListComponent as ProductListComponent } from './products/list/list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthorizeGuard] },
  { path: 'products', component: ProductListComponent, canActivate: [AuthorizeGuard] },
];

@NgModule({
  declarations: [
    HomeComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
