import { Component, OnInit, EventEmitter } from '@angular/core';
import { FoodItem } from './food-item.model';
import { FoodService } from './food-item.service';
import { Dialogs } from '../cardapio.component';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss']
})

export class FoodItemComponent implements OnInit {
    foods: FoodItem[];

    constructor(private foodService: FoodService, private shoppingCartService: ShoppingCartService) {}

    ngOnInit() {
    this.foodService.foods()
    .subscribe(foods => this.foods = foods);
    }

    addItem(item: FoodItem) {
      // console.log(item);
      this.shoppingCartService.addItem(item);
    }

}
