import {Routes} from '@angular/router';

import {CardapioComponent} from './cardapio/cardapio.component';
import {FoodItemComponent} from './cardapio/food-item/food-item.component';
import {ShoppingCartService} from './cardapio/shopping-cart/shopping-cart.service';

export const ROUTES: Routes = [
  {path: '', component: CardapioComponent}
];
