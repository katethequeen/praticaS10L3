import { ProductsService } from './../../products.service';
import { Component } from '@angular/core';
import { iProduct } from '../../i-product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  product: iProduct[] = [];

  constructor(private productSvc: ProductsService) {}

  ngOnInit() {
    this.productSvc.getAllProducts().subscribe((prod) => {
      this.product = prod;
      console.log(this.product);
    });
  }

  addCart(product: iProduct) {
    this.productSvc.addToCart(product);
  }
  like(product: iProduct) {
    this.productSvc.addToLiked(product);
  }
}
