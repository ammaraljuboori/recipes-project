import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingredients : Ingredient[] = [
    new Ingredient("Orange ", 3),
    new Ingredient("Apple", 6),
    new Ingredient("Tomatoes", 9),
  ];

  constructor() { }

  ngOnInit() {
  }

}
