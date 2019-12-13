
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {Http } from '@angular/http';
import { Observable } from 'rxjs';



import { FoodItem } from './food-item.model';
import { FOOD_API } from '../../app.api';

@Injectable()

export class FoodService {

    constructor(private http: Http) {}

        foods(): Observable<FoodItem[]> {
        return this.http.get(`${FOOD_API}/foods`).pipe(
        map(response => response.json()));
    }
}
