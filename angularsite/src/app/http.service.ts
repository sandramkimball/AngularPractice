import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  cheeseList = ['Emmental', 'Roquefort', 'Délice de Bourgogne', 'Buffalo Mozzarella', 'Marscapone', 'Parmigiano-Reggiano', 'Camembert', 'Pont-l\'Évêque', 'Gruyère', 'Fontina', 'Comtè', 'Taleggio', 'Bleu d\'Auvergne'];
  
  constructor(private http: HttpClient) { }

  getWines(){
    return this.http.get('https://api.globalwinescore.com/globalwinescores/latest/', {
      headers: new HttpHeaders({
        'Authorization': "Token b2434b7beaf543b088c0f0228bd01bf34780edfe",
        'Access-Control-Allow-Origin': '*'
      })
    });
  }

  getCheese(){
    return this.cheeseList;
  }

};
