import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PriceRange } from 'src/app/interfaces/price-range';

@Component({
  selector: 'app-shop-filter',
  templateUrl: './shop-filter.component.html',
  styleUrls: ['./shop-filter.component.css'],
})
export class ShopFilterComponent implements OnInit {
  @Output() changePriceRange = new EventEmitter<Array<PriceRange>>();
  @Output() changeSizes = new EventEmitter<Array<string>>();
  @Output() changeColors = new EventEmitter<Array<string>>();

  prices: Array<PriceRange> = [{min:0,max:0}];
  colors: Array<string> = [''];
  sizes: Array<string> = [''];
  constructor() {}

  ngOnInit(): void {}

  addPrice(min: number, max: number, event: any) {
    if (event.target.checked) {
      this.prices.push({ min: min, max: max });
    } else {
      const i = this.prices.findIndex((x) => x.min == min && x.max == max);
      this.prices.splice(i, 1);
    }
    this.changePriceRange.emit(this.prices);
  }

  addColor(color: string, event: any) {
    if (event.target.checked) {
      this.colors.push(color);
    } else {
      const i = this.colors.findIndex((x) => x == color);
      this.colors.splice(i, 1);
    }
    this.changeColors.emit(this.colors);
  }

  addSize(size: string, event: any) {
    if (event.target.checked) {
      this.sizes.push(size);
    } else {
      const i = this.sizes.findIndex((x) => x == size);
      this.sizes.splice(i, 1);
    }
    this.changeSizes.emit(this.sizes);
  }
}
