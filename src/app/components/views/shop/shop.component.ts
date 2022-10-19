import { Component, OnInit } from '@angular/core';
import { PriceRange } from 'src/app/interfaces/price-range';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  sizes: Array<string> = [];
  colors: Array<string> = [];
  priceRange: Array<PriceRange> = [];
  page: number = 0;
  constructor() {}

  ngOnInit(): void {}

  changePriceRange(event: Array<PriceRange>) {
    this.priceRange = event;
  }
  changeSizes(event: Array<string>) {
    this.sizes = event;
  }
  changeColors(event: Array<string>) {
    this.colors = event;
  }

  changePage(p: number) {
    this.page = p;
  }
}
