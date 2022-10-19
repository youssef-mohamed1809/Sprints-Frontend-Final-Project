import { Injectable } from '@angular/core';
import { Order } from '../interfaces/order';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  order: Order;
  constructor() {
    this.order = new Order();
    let savedOrderStr = localStorage.getItem('order');
    if (savedOrderStr) {
      let savedOrder: Order = JSON.parse(savedOrderStr);
      savedOrder.orderDetails.forEach((detail) => {
        for (let i = 0; i < detail.quantity; i++)
          this.order.addProduct(detail.product);
      });
    }
  }

  addToCart(product: Product) {
    this.order.addProduct(product);
  }
}
