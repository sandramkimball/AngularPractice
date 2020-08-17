import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter: number = 0;
  searchTerm: string = '';
  searchResults: Array<any> = [
    {
      name: 'Parmesan Arregiano',
      quantity: 3,
    }
];


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void{
  }

  addClick(){
    this.clickCounter += 1;
  }

  subtractClick(){
    this.clickCounter -= 1;
  }

  setClasses(){
    let myClasses = {
      active: this.clickCounter > 10,
      crazy: this.clickCounter > 20,
    }
    return myClasses;
  }

  onSubmit(){
    var thing: Object = {
      name: 'Buffalo Mozzarella',
      quantity: 5,
    }
    this.searchResults.push(thing)
  }

}
