import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clickCounter: number = 0;
  searchTerm: string = '';
  @Input() cart = this._cartService.cart;
  searchResults: Array<any> = [];


  constructor(
    private router: Router,
    private _cartService: CartService
  ) { }

  ngOnInit(){
  }

  addClick(){
    this.clickCounter += 1;
  }

  subtractClick(){
    this.clickCounter -= 1;
  }

  onSubmit(){
    var thing: Object = {
      name: 'Buffalo Mozzarella',
      quantity: 5,
    }
    this.searchResults.push(thing)
  }

  onDelete(item){
    this._cartService.deleteFromCart(item)
  }

}
