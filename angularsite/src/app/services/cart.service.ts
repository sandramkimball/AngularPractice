import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<any> = [];
  cartLength = 0

  constructor() { }

  addToCart(item){
    var newItem = {
        name: item.name,
        quantity: item.quantity,
        price: item.price
    }
    this.cart.push(newItem)
    this.cartLength = this.cart.length
  }

  deleteFromCart(item){
    var indx = this.cart.findIndex(obj => obj.name === item.name)
    this.cart.splice(indx, 1);
    this.cartLength = this.cart.length
  }

}