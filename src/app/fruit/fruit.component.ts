import { Component, OnInit } from '@angular/core';
import {DataService}  from '../data.service';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.scss']
})
export class FruitComponent implements OnInit {

  constructor(private data:DataService) { }

  ngOnInit() {
    this.loadItems();
  }

  fruits;

  loadItems(){
    this.data.getFruits().subscribe(payload=>{
      this.fruits = payload;
      console.log(payload)
    })
  }

}
