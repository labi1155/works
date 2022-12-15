import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [

{
  path:'products',
  component:ProductListComponent,
},
{
  path:'products/:ProductId',
  component:ProductDetailsComponent,
},
{
  path:'Home',
  component:HomeComponent,

},
{
path:'',
redirectTo:'/products',
pathMatch:'full',
},
{
  path:'cart',
  component:CartComponent,
}







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
