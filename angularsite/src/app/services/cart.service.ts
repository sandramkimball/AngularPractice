import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = [];
  numOfItems = 0;

  constructor() { }

  addToCart(item){
    var newItem = {
        name: item.name,
        quantity: item.quantity,
    }
    this.cart.push(newItem)
    this.numOfItems = this.cart.length;
  }

  deleteFromCart(item){
    var indx = this.cart.findIndex(obj => obj.name === item.name)
    this.cart.splice(indx, 1);
  }

}