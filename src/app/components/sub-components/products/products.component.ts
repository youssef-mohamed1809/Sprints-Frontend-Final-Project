import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Array<Product> = [];
  @Input() type: string = '';
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProductsByType(this.type).subscribe(
      (res: any) => {
        this.products = res.data;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
