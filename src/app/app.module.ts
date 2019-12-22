import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule, MaterializeAction,  MaterializeDirective } from 'angular2-materialize';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { FoodItemComponent } from './cardapio/food-item/food-item.component';
import { FoodService } from './cardapio/food-item/food-item.service';
import { ShoppingCartService } from './cardapio/shopping-cart/shopping-cart.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardapioComponent,
    FoodItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterializeModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [FoodService, ShoppingCartService, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
