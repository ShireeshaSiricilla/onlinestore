import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducer';
import { ProductComponent } from './product/product.component';
const routes: Routes = [
  {
    path : '',
    redirectTo : '/products',
    pathMatch : 'full'
  },
{
  path : 'products',
  component: ProductComponent,
},
{
  path : 'cart',
  component : CartComponent,
},
{
  path:'product/:id',
  component: ProductComponent,
},
{
  path :'**',
  redirectTo:'',
  pathMatch: 'full'
},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
