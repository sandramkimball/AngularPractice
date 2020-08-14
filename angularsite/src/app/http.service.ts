import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  headers: Object = {
    "Authorization": "Token b2434b7beaf543b088c0f0228bd01bf34780edfe",
  }

  constructor(private http: HttpClient) { }

  getWines(){
    return this.http.get('https://api.globalwinescore.com/globalwinescores/', this.headers);
  }
}
