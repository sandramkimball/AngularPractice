import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'This is Cheese';
  cart: Array<any> = [];

  addToCart(item){
    console.log('item added to cart')
    this.cart.push(item)
  }
}
