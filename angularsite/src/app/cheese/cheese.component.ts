import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../services/http.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cheese',
  templateUrl: './cheese.component.html',
  styleUrls: ['./cheese.component.scss']
})
export class CheeseComponent implements OnInit {
  @Input() cart = [];
  cheese = [];

  // dependecy injection to use throughout all logic
  constructor(
    private _http: HttpService, 
    private _cartService: CartService
  ) { }

  ngOnInit(){
    this.cheese = this._http.getCheese();
    this.cart = this._cartService.cart;
  }

  onAdd(item){
    this._cartService.addToCart(item);
    console.log('updated cart', this.cart)
  }

  addQty(item){
    this.cheese.forEach(obj => {
      if(obj.name === item.name){
        obj.quantity += 1;
        console.log(obj.name, obj.quantity)
      } 
    })
  }

  subtractQty(item){
    this.cheese[item].quantity -= 1;
  }

}
