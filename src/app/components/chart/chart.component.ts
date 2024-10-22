import { Component, OnInit } from '@angular/core';
import { iProduct } from '../../i-product';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent implements OnInit {
  cart: iProduct[] = [];

  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.service.chart$.subscribe((cart) => {
      this.cart = cart;
      console.log(this.cart);
    });
  }
}
