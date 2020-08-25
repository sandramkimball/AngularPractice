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

  // this is the control
  cheese: Array<any> = [];
  // this is filtered/mapped for display
  searchResults: Array<any> = [];
  searchTerm: string = '';
  selectedOrigin: string = '';

  constructor(
    private _http: HttpService, 
    private _cartService: CartService
  ) { }

  ngOnInit(){
    this.cart = this._cartService.cart;
    // this._http.getCheese().subscribe(res => this.cheese = res);
    this.cheese = this._http.getCheese();
    this.searchResults = this._http.getCheese();
    console.log(this.cheese)
  }

  // add item to cart
  onAdd(item){
    this._cartService.addToCart(item);
  }

  // add, subtract quantity
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

  // search-filter bar
  onSelect(e){
    e.preventDefault();
    this.selectedOrigin = e.target.value;
  }

  onSearch(){
    var temp = [];
    this.cheese.map( obj => {
      if( 
          (obj.name.toLowerCase().includes(this.searchTerm) || this.searchTerm == '' ) &&
          (obj.origin == this.selectedOrigin || this.selectedOrigin == '')
        ){
        temp.push(obj)
      }
    })
    this.searchResults = temp;
  }

}
