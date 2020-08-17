import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-cheese',
  templateUrl: './cheese.component.html',
  styleUrls: ['./cheese.component.scss']
})
export class CheeseComponent implements OnInit {

  cheese: String[];

  // dependecy injection to use throughout all logic
  constructor(private _http: HttpService) { }

  ngOnInit(){
    this.cheese = this._http.getCheese();
  }

  

}
