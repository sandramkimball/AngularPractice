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

  deleteFromCart(item){
    console.log(this.cart)
    var indx = this.cart.findIndex(obj => obj.name === item.name)
    this.cart.splice(indx, 1);
    console.log(`Deleted ${item.name} at indx ${indx}.`)
  }

}