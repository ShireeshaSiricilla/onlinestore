import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';

 import {Routes,RouterModule} from '@angular/router';
import { from } from 'rxjs';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { reducer } from './store/reducer';
import { StoreModule } from '@ngrx/store';

const routes : Routes=[
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
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({cart: reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
