
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Injectable } from '@angular/core';
import {Http } from '@angular/http';
import { Observable } from 'rxjs';

import {ErrorHandler } from '../../app.error-handler';
import { FoodItem } from './food-item.model';
import { FOOD_API } from '../../app.api';

@Injectable()

export class FoodService {

    constructor(private http: Http) {}
        foods(): Observable<FoodItem[]> {
        return this.http.get(`${FOOD_API}/foods`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }
}
