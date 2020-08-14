import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-cheese',
  templateUrl: './cheese.component.html',
  styleUrls: ['./cheese.component.scss']
})
export class CheeseComponent implements OnInit {

  wines: Object;

  // dependecy injection to use throughout all logic
  constructor(private _http: HttpService) { }

  ngOnInit(){
    console.log('fetching wine...')
    this._http.getWines().subscribe( data => {
      this.wines = data;
      console.log('res', data);
    });
    console.log('wine time?', this.wines);
  }

}
