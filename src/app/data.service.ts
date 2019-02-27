import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getFruits(){
    return this.http.get('https://cors-anywhere.herokuapp.com/http://flimsy-good-bye.surge.sh/fruits.json');
  }
}
