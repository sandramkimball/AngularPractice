import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { HttpService } from '../services/http.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cheese',
  templateUrl: './cheese.component.html',
  styleUrls: ['./cheese.component.scss']
})
export class CheeseComponent implements OnInit {
  @Input() cart = [];
  @Output() cartLength = new EventEmitter()
  cheese = [];

  // dependecy injection to use throughout all logic
  constructor(
    private _http: HttpService, 
    private _cartService: CartService
  ) { }

  ngOnInit(){
    if(this.cheese.length === 0){
      this.cheese = this._http.getCheese()
    };
    
    this.cart = this._cartService.cart;
    this.cartLength.emit(this.cart.length)
  }

  onAdd(item){
    this._cartService.addToCart(item);
  }

  addQty(item){
    this.cheese.forEach(obj => {
      if(obj.name === item.name){
        obj.quantity += 1;
      } 
    })
  }

  subtractQty(item){
    this.cheese.forEach(obj => {
      if(obj.name === item.name){
        obj.quantity -= 1;
      } 
    })
  }

}
