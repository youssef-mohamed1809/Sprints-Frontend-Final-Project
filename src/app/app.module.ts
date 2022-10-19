import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { ImageComponentComponent } from './components/image-component/image-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HomeComponent } from './components/views/home/home.component';
import { ShopComponent } from './components/views/shop/shop.component';
import { DetailComponent } from './components/views/detail/detail.component';
import { CartComponent } from './components/views/cart/cart.component';
import { CheckoutComponent } from './components/views/checkout/checkout.component';
import { ContactComponent } from './components/views/contact/contact.component';
import { CategoriesComponent } from './components/sub-components/categories/categories.component';
import { CategoryComponent } from './components/sub-components/category/category.component';
import { ProductsComponent } from './components/sub-components/products/products.component';
import { ProductComponent } from './components/sub-components/product/product.component';
import { RatingComponent } from './components/sub-components/rating/rating.component';
import { ShopSortComponent } from './components/shop-sort/shop-sort.component';
import { ShopFilterComponent } from './components/shop-filter/shop-filter.component';
import { ShopProductsComponent } from './components/shop-products/shop-products.component';
import { ShopPaginationComponent } from './components/shop-pagination/shop-pagination.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponentComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ShopComponent,
    DetailComponent,
    CartComponent,
    CheckoutComponent,
    ContactComponent,
    CategoriesComponent,
    CategoryComponent,
    ProductsComponent,
    ProductComponent,
    RatingComponent,
    ShopSortComponent,
    ShopFilterComponent,
    ShopProductsComponent,
    ShopPaginationComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
