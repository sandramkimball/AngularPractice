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
  mobileMenuDisplay: String = 'none !important';

  constructor( private _cartService: CartService ){
    console.log('numOfItems2', this.cartLength)
  }

  onOpenMenu(){
    this.mobileMenuDisplay = 'initial !important'
  }
  onCloseMenu(){
    this.mobileMenuDisplay = 'none !important'
  }

  getDisplay(){
    console.log( this.mobileMenuDisplay )
    return this.mobileMenuDisplay;
  }

}
