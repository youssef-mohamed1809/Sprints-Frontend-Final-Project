import { Product } from './product';

export class Order {
  orderDetails: Array<OrderDetail>;
  constructor() {
    this.orderDetails = [];
  }
  addProduct(product: Product) {
    let currentProduct = this.orderDetails.find(
      (x) => x.product._id == product._id
    );
    if (currentProduct != null) currentProduct.incQuantity();
    else this.orderDetails.push(new OrderDetail(product));

    localStorage.setItem('order', JSON.stringify(this));
  }

  incQuantity(i: number) {
    this.orderDetails[i].incQuantity();
    localStorage.setItem('order', JSON.stringify(this));
  }

  decQuantity(i: number) {
    this.orderDetails[i].decQuantity();
    localStorage.setItem('order', JSON.stringify(this));
  }

  deleteLine(i: number) {
    this.orderDetails.splice(i, 1);
    localStorage.setItem('order', JSON.stringify(this));
  }

  getSubTotal(): number {
    return this.orderDetails.map((x) => x.price).reduce((a, v) => (a += v));
  }

  getShipping(): number {
    return this.getSubTotal() * 0.05;
  }

  getTotal(): number {
    return this.getShipping() + this.getSubTotal();
  }
}

export class OrderDetail {
  product: Product;
  quantity: number;
  price: number;
  constructor(product: Product) {
    this.product = product;
    this.quantity = 1;
    this.price = product.price - product.price * product.discount;
  }

  incQuantity() {
    this.quantity += 1;
    this.price =
      this.quantity *
      (this.product.price - this.product.price * this.product.discount);
  }
  decQuantity() {
    if (this.quantity >= 1) {
      this.quantity -= 1;
      this.price =
        this.quantity *
        (this.product.price - this.product.price * this.product.discount);
    }
  }
}
