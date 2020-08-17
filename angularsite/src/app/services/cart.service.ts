import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = [];

  constructor() { }

  addToCart(item){
    var newItem = {
        name: item.name,
        quantity: item.quantity,
    }
    this.cart.push(newItem)
    // console.log(`updated cart:`, this.cart)
  }

}