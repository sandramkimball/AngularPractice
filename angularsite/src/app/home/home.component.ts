import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter: number = 0;
  searchTerm: string = '';

  constructor() { }

  ngOnInit(): void {
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

}
