import { Component } from '@angular/core';
import { Store,select } from '@ngrx/store';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-root',
  template: `
    Cart :{{cart.length}}
    <h1>{{title}}</h1>
    <app-products></app-products>
    <router-outlet></router-outlet>
  `,
  
  styles: []
})
export class AppComponent {
  title = 'online-store';
  cart: any[]=[];


constructor(private store: Store<any>){

}
ngOnInit(){
  this.store.select('cart').subscribe((state => this.cart = state))
}

}


