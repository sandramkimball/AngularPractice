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
  @Input() cart = this._cartService.cart;


  constructor(
    private router: Router,
    private _cartService: CartService
  ) { }

  ngOnInit(){
  }


  onDelete(item){
    this._cartService.deleteFromCart(item)
  }

}
