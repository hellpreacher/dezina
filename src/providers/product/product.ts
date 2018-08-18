import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Product {
    id: string
    name: string
    description: string
    price: string
    image: string
    gender: string,
    bestSeller?: boolean
}


@Injectable()
export class ProductProvider {

    constructor(public http: HttpClient) { }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>('../../assets/data.json')
    }

}
