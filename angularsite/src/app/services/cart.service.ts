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
  }

  deleteFromCart(item){
    var indx = this.cart.findIndex(obj => obj.name === item.name)
    this.cart.splice(indx, 1);
  }

}