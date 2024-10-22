import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iProduct } from './i-product';
import { map, Observable, Subject } from 'rxjs';
import { iJSONresponse } from './i-jsonresponse';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  apiUrl: string = 'https://dummyjson.com/products';
  chart$ = new Subject<iProduct[]>();
  liked$ = new Subject<iProduct[]>();

  cart: iProduct[] = [];
  liked: iProduct[] = [];

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<iProduct[]> {
    return this.http
      .get<iJSONresponse>(this.apiUrl)
      .pipe(map((res) => res.products));
  }

  addToCart(product: iProduct) {
    this.chart$.next(this.cart);
    this.cart.push(product);
  }
  addToLiked(product: iProduct) {
    this.liked$.next(this.liked);
    this.liked.push(product);
  }
}
