import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import {MatCardModule} from '@angular/material/card';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    AppRoutingModule,

  ],
  exports:[
    ProductListComponent,
    ProductDetailsComponent
  ]
})
export class ProductListModule { }
