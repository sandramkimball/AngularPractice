import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() cart = this._cartService.cart;
  cartTotal: number = 0;

  constructor( private _cartService: CartService ) { }

  ngOnInit() {
    this.cart.map(obj=> {
      this.cartTotal += (obj.quantity * obj.price)
    })
  }
  

  onDelete(item){
    this._cartService.deleteFromCart(item)
  }

  onCheckout(){
    console.log('Checkout')
  }

}
