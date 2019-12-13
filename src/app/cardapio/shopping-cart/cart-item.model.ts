import {FoodItem} from '../food-item/food-item.model';

export class CartItem {
    constructor(public foodItem: FoodItem,
    public quantity: number = 1 ) {}

        value(): number {
            return this.foodItem.price * this.quantity;
    }
}
