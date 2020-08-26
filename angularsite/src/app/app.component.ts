import { Component } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'This is Cheese';
  cartLength = this._cartService.numOfItems;  
  isActive = false;

  constructor( private _cartService: CartService ){
  }

  onOpenMenu(){
    this.isActive = true
    console.log('open')
  }
  onCloseMenu(){
    this.isActive = false
    console.log('close')
  }
  getClass(){
    return this.isActive == true ? 'active' : '';
  }

}
