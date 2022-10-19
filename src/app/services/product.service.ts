import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PriceRange } from '../interfaces/price-range';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProductsWithFilter(
    products: Array<Product>,
    sizes: Array<string>,
    colors: Array<string>,
    priceRanges: Array<PriceRange>,
    page: number = 0,
    pageSize: number = 9
  ) {
    products = products.filter((x) => {
      return (
        this.filterSize(sizes, x) &&
        this.filterColor(colors, x) &&
        this.filterPrices(priceRanges, x)
      );
    });
    return products.slice(page * pageSize, page * pageSize + pageSize);
  }

  getProductsCountWithFilter(
    products: Array<Product>,
    sizes: Array<string>,
    colors: Array<string>,
    priceRanges: Array<PriceRange>
  ): number {
    products = products.filter((x) => {
      return (
        this.filterSize(sizes, x) &&
        this.filterColor(colors, x) &&
        this.filterPrices(priceRanges, x)
      );
    });
    return products.length;
  }

  filterSize(sizes: Array<string>, product: Product): boolean {
    if (sizes.length == 0) return true;
    return sizes.includes(product.size) || sizes.includes('');
  }
  filterColor(colors: Array<string>, product: Product): boolean {
    if (colors.length == 0) return true;
    return colors.includes(product.color) || colors.includes('');
  }
  filterPrices(priceRanges: Array<PriceRange>, product: Product): boolean {
    if (priceRanges.length == 0) return true;
    for (let i = 0; i < priceRanges.length; i++)
      if (
        (priceRanges[i].min <= product.price &&
          priceRanges[i].max >= product.price) ||
        (priceRanges[i].min == 0 && priceRanges[i].max == 0)
      )
        return true;
    return false;
  }

  getProductsByType(type: string) {
    return this.httpClient.get(
      `${environment.APIUrl}products/${
        type === 'recent' ? 'getRecent' : 'getFeatured'
      }`
    );
  }

  getProducts() {
    return this.httpClient.get(`${environment.APIUrl}products/`);
  }
  getProductById(id:string){
    return this.httpClient.get(`${environment.APIUrl}products/${id}`);
  }
  getProductsByCat(cat_id:string){
    
    return this.httpClient.get(`${environment.APIUrl}products/getByCategoryId/${cat_id}`);
  }
}
