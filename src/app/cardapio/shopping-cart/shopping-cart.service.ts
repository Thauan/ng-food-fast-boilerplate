import { CartItem } from './cart-item.model';
import { FoodItem } from '../food-item/food-item.model';

export class ShoppingCartService {
  items: CartItem[] = [];

  clear() {
    this.items = [];
  }

  addItem(item: FoodItem) {
    const foundItem = this.items.find((fItem) => fItem.foodItem.id === item.id);
    if (foundItem) {
      foundItem.quantity = foundItem.quantity + 1;
    } else {
      this.items.push(new CartItem(item));
    }
  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
    // console.log(item);
  }

  total(): number {
    return this.items
    .map(item => item.value())
    .reduce((prev, value) => prev + value, 0);
  }


}
