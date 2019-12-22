import { Component, OnInit, EventEmitter } from '@angular/core';
import {Http } from '@angular/http';
import {ShoppingCartService} from './shopping-cart/shopping-cart.service';
import {MaterializeDirective, MaterializeAction} from 'angular2-materialize';
// import {FoodItem} from './food-item/food-item.component';
import { CartItem } from '../cardapio/shopping-cart/cart-item.model';


@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
    console.log(this.shoppingCartService.items);
  }

  clear(): void {
    return this.shoppingCartService.clear();
  }

  items(): any[] {
    return this.shoppingCartService.items;
  }

  total(): number {
    return this.shoppingCartService.total();
  }

  remove(item: CartItem): void {
    return this.shoppingCartService.removeItem(item);
  }

}



export class Dialogs {
  modalActions1 = new EventEmitter<string|MaterializeAction>();
  globalActions = new EventEmitter<string|MaterializeAction>();
  params = [];

  model1Params = [
    {
      dismissible: false,
    }
  ];

  openModal1() {
    this.modalActions1.emit({action: 'modal', params: ['open']});
  }
  closeModal1() {
    this.modalActions1.emit({action: 'modal', params: ['close']});
  }
}
