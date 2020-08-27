import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../models/Card';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  cheeseTypes = [
    'Emmental', 
    'Roquefort', 
    'Délice de Bourgogne', 
    'Buffalo Mozzarella', 
    'Marscapone', 
    'Parmigiano-Reggiano', 
    'Camembert', 
    'Pont-l\'Évêque', 
    'Gruyère', 
    'Fontina', 
    'Comtè', 
    'Taleggio', 
    'Bleu d\'Auvergne'
  ];
  origins = ['Italy', 'Spain', 'France', 'Turkey', 'Israel', 'Iran']
  cheeses = [];
  

  constructor(private http: HttpClient) { }

  getCheese(){
    this.cheeseTypes.map(cheese=> {
      var newItem: Card = {
        name: cheese,
        quantity: 1,
        origin: this.origins[Math.floor(Math.random() * Math.floor(6))],
        price: Math.floor(Math.random() * Math.floor(17)) + 1,
      }
      this.cheeses.push(newItem)
    })
    
    console.log('there should only be 13:', this.cheeses.length)
    return this.cheeses
  }

};

/**
Example
  public getProducts():Observable<Product[]>{
    return this.httpClient
    .get<Product[]>('http://localhost:3000/products')
    .pipe(catchError(this.handleError))
  }
 */
