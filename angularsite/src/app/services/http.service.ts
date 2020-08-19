import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  cheeseTypes = ['Emmental', 'Roquefort', 'Délice de Bourgogne', 'Buffalo Mozzarella', 'Marscapone', 'Parmigiano-Reggiano', 'Camembert', 'Pont-l\'Évêque', 'Gruyère', 'Fontina', 'Comtè', 'Taleggio', 'Bleu d\'Auvergne'];
  origins = ['Italy', 'Spain', 'France', 'Turkey', 'Israel', 'Iran']
  cheeseList: Array<any> = [];

  constructor(private http: HttpClient) { }

  getCheese(){
    this.cheeseTypes.map(cheese=> {
      var newItem = {
        name: cheese,
        quantity: 1,
        origin: this.origins[Math.floor(Math.random() * Math.floor(6))],
        price: Math.floor(Math.random() * Math.floor(17)),
      }
      this.cheeseList.push(newItem)
    })
    return this.cheeseList;
  }

};
