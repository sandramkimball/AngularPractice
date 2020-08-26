import { Component } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'This is Cheese';
  cartLength = 0;  
  isActive = false;

  constructor( private _cartService: CartService ){
  }
 

  onOpenMenu(){
    this.isActive = true
    this.cartLength = this._cartService.cartLength
  }
  onCloseMenu(){
    this.isActive = false
  }
  getClass(){
    return this.isActive == true ? 'active' : '';
  }

}
