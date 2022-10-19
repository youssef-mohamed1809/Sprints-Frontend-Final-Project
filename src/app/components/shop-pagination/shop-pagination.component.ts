import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PriceRange } from 'src/app/interfaces/price-range';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop-pagination',
  templateUrl: './shop-pagination.component.html',
  styleUrls: ['./shop-pagination.component.css'],
})
export class ShopPaginationComponent implements OnInit {
  @Input() sizes: Array<string> = [];
  @Input() colors: Array<string> = [];
  @Input() priceRange: Array<PriceRange> = [];
  @Output() changePage = new EventEmitter<number>();

  page: number = 0;
  products: Array<Product> = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data.data;
    });
  }

  getPageCount(): number {
    const pageCount = Math.ceil(
      this.productService.getProductsCountWithFilter(
        this.products,
        this.sizes,
        this.colors,
        this.priceRange
      ) / 9
    );
    if (pageCount - 1 < this.page) {
      setTimeout(() => {
        this.setPage(0);
      }, 0);
    }

    return pageCount;
  }

  setPage(p: number) {
    this.page = p;
    this.changePage.emit(p);
  }
}
