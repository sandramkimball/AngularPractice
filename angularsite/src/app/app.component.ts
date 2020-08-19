import { Component, Input, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'This is Cheese';
  cartLength = 0;  

  constructor( private _cartService: CartService ){}


  ngOnInit(){
    console.log( 'cart length', this._cartService.numOfItems);
    this.cartLength = this._cartService.numOfItems;
  }

}
